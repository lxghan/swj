import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
let searchInp = null;
let globalnum = 0;

const SWJ = ({navigation}) => {
  const [txt, onChangeTxt] = React.useState();
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Society of Women Journalists</Text>
    <Text>{"\n\n"}</Text>
    <View style={{borderBottomWidth: 1,}}>
    <TextInput
    onChangeText={onChangeTxt}
    value={txt}
    placeholder="Search..."/>
    </View>
    <Text>{"\n"}</Text>
    <Button title="Search"
    onPress={() => {
      txt != null ? navigation.navigate('Search Results') : alert("No search input");
      searchInp = txt;
    }}></Button>
    <StatusBar style="auto" />
    </View>
  )
}

const SearchRes = ({navigation}) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://appmockapi.herokuapp.com/author/search")
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
        return items.map((element, i) => {
            switch(searchInp.toLowerCase()){
            case element.first_name.toLowerCase(): return (
                <Text onPress={() => {globalnum = i; navigation.navigate('Biography')}} style={styles.header}>{element.first_name + " " + element.last_name}</Text>
            )
            case element.last_name.toLowerCase(): return (
                <Text onPress={() => {globalnum = i; navigation.navigate('Biography')}} style={styles.header}>{element.first_name + " " + element.last_name}</Text>
            )
            case (element.first_name.toLowerCase() + " " + element.last_name.toLowerCase()): return (
                <Text onPress={() => {globalnum = i; navigation.navigate('Biography')}} style={styles.header}>{element.first_name + " " + element.last_name}</Text>
            )
            case element.pen_name.toLowerCase(): return (
                <Text onPress={() => {globalnum = i; navigation.navigate('Biography')}} style={styles.header}>{element.first_name + " " + element.last_name}</Text>
            )
            case element.leadership_position.toLowerCase(): return (
                <Text onPress={() => {globalnum = i; navigation.navigate('Biography')}} style={styles.header}>{element.first_name + " " + element.last_name}</Text>
            )
          }
        });
    }
}

const Bio = () => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://appmockapi.herokuapp.com/author/search")
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
      return items.map((element, i) => {
        switch(globalnum){
          case i: return (
              <View>
                <Text style={styles.header}>{element.prefix + " " + element.first_name + " " + element.last_name}</Text>
                <Text style={styles.bio}>{"Pen name: " + element.pen_name}</Text>
                <Text style={styles.bio}>{"Date of Birth: " + element.DOB}</Text>
                <Text style={styles.bio}>{"Date of Death: " + element.DOD}</Text>
                <Text style={styles.bio}>{"Leadership Position: " + element.leadership_position}</Text>
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
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  inputText: {
    fontSize: 15,
  },
  bio: {
    fontSize: 25,
  },
});

export default App;
