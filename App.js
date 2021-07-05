import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, BackHandler } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import './assets/css/styles.css';

const Stack = createStackNavigator();
let searchInp = "";
let searchInp2 = "";
let url = "https://appmockapi.herokuapp.com/author/search";


const Search = ({navigation}) => {
  const [name, onChangeFname] = React.useState();
  //const [lp, onChangeLp] = React.useState();

  searchInp = "";

  return (
  <View>
    <header class="masthead">
          <div class="container px-4 px-lg-5">
              <View style={styles.container}>
                  <Text style={styles.header}>Society of Women Journalists</Text>
                  <Text>{"\n\n"}</Text>

                  <TextInput style={styles.input}
                    onChangeText={onChangeFname}
                    value={name}
                    placeholder="Name..."/>

                  <Text>{"\n\n"}</Text>
                  <Button title="Search"
                    color= 'mediumturquoise'
                    onPress={() => {
                    input1(name);
                    navigation.navigate('Search Results');
                  }}/>

                  <Text>{"\n\n"}</Text>
                  <Text style={styles.searchInst}>Search for any journalist in mind by </Text>
                  <Text style={styles.searchInst}> inputting a first name, last name, or pen name</Text>
                  <StatusBar style="auto" />
              </View>
          </div>
    </header>
  </View>
  )
}

const input1 = (name) => {
  if (name != undefined && searchInp == ""){
    searchInp += "?name=" + name;
    //input2(name);
  }
  /*
  else if (lp != undefined && searchInp == ""){
    searchInp += "?leadership position=" + lp;
    input2(name, lp);
  }
  */
}
/*
const input2 = (name, lp) => {
  if (lp != undefined && searchInp != ""){
    searchInp += "&leadership position=" + lp;
  }
}
*/
const SearchRes = ({navigation}) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  searchInp2 = "";

  React.useEffect(() => {
    fetch(url + searchInp, {
      method: "GET"})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if (Array.isArray(items) && items.length){
        return items.map(element => {
          if (element['first name'] != null && element['Surname'] != null){
            return (
              <View>
                <Text onPress={() => {
                  navigation.navigate('Biography')}}
                  style={styles.searchResult}>
                  {element.['first name'] + " " + element.['Surname']}
                </Text>
              </View>
            )
          }
          else if (element['first name'] != null){
            return (
                <View>
                <Text onPress={() => {
                  navigation.navigate('Biography')}}
                  style={styles.searchResult}>
                  {element.['first name']}
                </Text>
                </View>
            )
          }
          else if (element['Surname'] != null){
            return (
                <View>
                <Text onPress={() => {
                  navigation.navigate('Biography')}}
                  style={styles.searchResult}>
                  {element.['Surname']}
                </Text>
                </View>
            )
          }
        })
      }
      else {
        return (
          <View>
            <Text style={styles.searchResult}>No result matched</Text>
          </View>
        )
      }
    }

}

const Bio = () => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(url + searchInp2, {
      method: "GET"})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return items.map(element => {
        return(
          <View>
            <Text style={styles.header}>{element['prefix/title'] + " " + element.first_name + " " + element.Surname}</Text>
          </View>
        )
        if (element['pen name'] != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Pen name: " + element['pen name']}</Text>
            </View>
          )
        }
        if (element.DOB != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Date of Birth: " + element.DOB}</Text>
            </View>
          )
        }
        if (element.DOD != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Date of Death: " + element.DOD}</Text>
            </View>
          )
        }
        if (element['leadership position'] != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Leadership Position: " + element['leadership position']}</Text>
            </View>
          )
        }
        if (element['street address'] != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Street Address: " + element['street address']}</Text>
            </View>
          )
        }
        if (element.neighborhood != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Neighborhood: " + element.neighborhood}</Text>
            </View>
          )
        }
        if (element.city != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Leadership Position: " + element.city}</Text>
            </View>
          )
        }
        if (element['post code'] != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Post Code: " + element['post code']}</Text>
            </View>
          )
        }
        if (element.proposer != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Proposer: " + element.proposer}</Text>
            </View>
          )
        }
        if (element.org1 != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Organization 1: " + element.org1}</Text>
            </View>
          )
        }
        if (element.org2 != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Organization 2: " + element.org2}</Text>
            </View>
          )
        }
        if (element.org3 != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Organization 3: " + element.org3}</Text>
            </View>
          )
        }
        if (element.org4 != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Organization 4: " + element.org4}</Text>
            </View>
          )
        }
        if (element.org5 != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Organization 5: " + element.org5}</Text>
            </View>
          )
        }
        if (element.periodicals != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Periodicals : " + element.periodicals}</Text>
            </View>
          )
        }
        if (element['source of info'] != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Source of Information: " + element['source of info']}</Text>
            </View>
          )
        }
        if (element.other != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Other: " + element.other}</Text>
            </View>
          )
        }
        if (element.Joined != null) {
          return (
            <View>
              <Text style={styles.bio}>{"Joined: " + element.Joined}</Text>
            </View>
          )
        }
      })
    }

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Search Results" component={SearchRes}/>
        <Stack.Screen name="Biography" component={Bio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    borderWidth: 2,
    margin:50,
    fontSize: 15,
    color: 'white',
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  searchInst: {
    fontSize: 20,
    color: "white",
  },
  searchResContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  searchResult: {
    fontSize: 25,
  },
  bio: {
    fontSize: 20,
  },
  web: {
     flex: 1
  },
});

export default App;
