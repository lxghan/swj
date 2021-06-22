import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, BackHandler } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './component/header';
import Footer from './component/footer';
<Route exact path="/" component={SWJ} />

const Stack = createStackNavigator();
let searchInp = "";
let searchInp2 = "";
let url = "https://appmockapi.herokuapp.com/author/search";

const SWJ = ({navigation}) => {
  const [fname, onChangeFname] = React.useState();
  const [lname, onChangeLname] = React.useState();
  const [pname, onChangePname] = React.useState();
  const [lp, onChangeLp] = React.useState();

  searchInp = "";

  return (

    <View style={styles.container}>
      <Header/>
      <Text style={styles.header}>Society of Women Journalists</Text>
      <Text>{"\n\n"}</Text>

        <TextInput style={styles.input}
        onChangeText={onChangeFname}
        value={fname}
        placeholder="First name..."/>

        <TextInput style={styles.input}
        onChangeText={onChangeLname}
        value={lname}
        placeholder="Last name..."/>

        <TextInput style={styles.input}
        onChangeText={onChangePname}
        value={pname}
        placeholder="Pen name..."/>

        <TextInput style={styles.input}
        onChangeText={onChangeLp}
        value={lp}
        placeholder="Leadership position..."/>

      <Text>{"\n\n"}</Text>
      <Button title="Search"
        onPress={() => {
        input1(fname, lname, pname, lp);
        navigation.navigate('Search Results');
      }}/>

      <StatusBar style="auto" />
      <Footer/>
    </View>
  )
}

const input1 = (fname, lname, pname, lp) => {
  if (fname != undefined && searchInp == ""){
    searchInp += "?first_name=" + fname;
    input2(fname, lname, pname, lp);
  }
  else if (lname != undefined && searchInp == ""){
    searchInp += "?Surname=" + lname;
    input2(fname, lname, pname, lp);
  }
  /*
  else if (pname != undefined && searchInp == ""){
    searchInp += "?pen name=" + pname;
    input2(fname, lname, pname, lp);
  }
  else if (lp != undefined && searchInp == ""){
    searchInp += "?leadership position=" + lp;
    input2(fname, lname, pname, lp);
  }*/
}

const input2 = (fname, lname, pname, lp) => {
  if (lname != undefined && searchInp != ""){
    searchInp += "&Surname=" + lname;
  }
  /*
  if (pname != undefined && searchInp != ""){
    searchInp += "&pen name=" + pname;
  }
  if (lp != undefined && searchInp != ""){
    searchInp += "&leadership position="  + lp;
  }
  */
}

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
            return (
              <View>
                <Text onPress={() => {
                  searchInp2 = "?first_name=" + element.first_name + "&Surname=" + element.Surname;
                  navigation.navigate('Biography')}}
                  style={styles.header}>
                  {element.first_name + " " + element.Surname}
                </Text>
              </View>
            )
        })
      }
      else {
        return (
          <View>
            <Text style={styles.header}>No result matched</Text>
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
            <Text style={styles.bio}>{"Pen name: " + element['pen name']}</Text>
            <Text style={styles.bio}>{"Date of Birth: " + element.DOB}</Text>
            <Text style={styles.bio}>{"Date of Death: " + element.DOD}</Text>
            <Text style={styles.bio}>{"Leadership Position: " + element['leadership position']}</Text>
            <Text style={styles.bio}>{"Street Address: " + element['street address']}</Text>
            <Text style={styles.bio}>{"Neighborhood: " + element['neighborhood']}</Text>
            <Text style={styles.bio}>{"City: " + element.city}</Text>
            <Text style={styles.bio}>{"Post Code: " + element['post code']}</Text>
            <Text style={styles.bio}>{"Proposer: " + element['proposer']}</Text>
            <Text style={styles.bio}>{"Organization 1: " + element['org1']}</Text>
            <Text style={styles.bio}>{"Organization 2: " + element['org2']}</Text>
            <Text style={styles.bio}>{"Organization 3: " + element['org3']}</Text>
            <Text style={styles.bio}>{"Organization 4: " + element['org4']}</Text>
            <Text style={styles.bio}>{"Organization 5: " + element['org5']}</Text>
            <Text style={styles.bio}>{"Periodicals: " + element['periodicals']}</Text>
            <Text style={styles.bio}>{"Source of Info.: " + element['source of info']}</Text>
            <Text style={styles.bio}>{"Other: " + element['other']}</Text>
            <Text style={styles.bio}>{"Joined: " + element['Joined']}</Text>
          </View>
        )
      })
    }

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SWJ" component={SWJ}/>
        <Stack.Screen name="Search Results" component={SearchRes}/>
        <Stack.Screen name="Biography" component={Bio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    margin: 12,
    fontSize: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 20,
  },
});

export default App;
