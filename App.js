import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, BackHandler } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import './assets/css/styles.css';
import './assets/js/scripts.js';

const Stack = createStackNavigator();
let searchInp = "";
let searchInp2 = "";
let url = "https://appmockapi.herokuapp.com/author/search";

const SWJ = ({navigation}) => {

return(
  <View>

    <div id="page-top" />
          <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
              <div class="container px-4 px-lg-5">
                  <a class="navbar-brand" href="#page-top">SWJ</a>
                  <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      Menu
                  </button>
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                      <ul class="navbar-nav ms-auto">
                          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                          <li class="nav-item"><a class="nav-link" href="#contributors">Contributors</a></li>
                          <li class="nav-item"><a class="nav-link" href="#references">References</a></li>
                      </ul>
                  </div>
              </div>
          </nav>

          <header class="masthead">
              <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                  <div class="d-flex justify-content-center">
                      <div class="text-center">
                          <h1 class="mx-auto my-0 text-uppercase">Society of Women Journalists</h1>
                          <h2 class="text-white-50 mx-auto mt-2 mb-5">Brief introduction about SWJ website</h2>
                          <a class="btn btn-primary" href="#about">Get Started</a>
                      </div>
                  </div>
              </div>
          </header>

          <section class="about-section text-center" id="about">
              <div class="container px-4 px-lg-5">
                  <div class="row gx-4 gx-lg-5 justify-content-center">
                      <div class="col-lg-8">
                          <h2 class="text-white mb-4">About Us</h2>
                          <p class="text-white-50">
                              About Us section
                          </p>
                      </div>
                  </div>
                  <img class="img-fluid" src="assets/css/img/bg-signup.jpg" alt="..." />
              </div>
          </section>

          <section class="projects-section bg-light" id="contributors">
              <div class="container px-4 px-lg-5">

              <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div class="col-lg-6"><img class="img-fluid" src="assets/css/img/demo-image-01.jpg" alt="..." /></div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white">Contributors</h4>
                                <p class="mb-0 text-white-50">Contributors section</p>
                                <hr class="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                  <div class="row gx-0 justify-content-center">
                      <div class="col-lg-6"><img class="img-fluid" src="assets/css/img/demo-image-02.jpg" alt="..." /></div>
                      <div class="col-lg-6 order-lg-first">
                          <div class="bg-black text-center h-100 project">
                              <div class="d-flex h-100">
                                  <div class="project-text w-100 my-auto text-center text-lg-right">
                                      <Text
                                        style={{color: 'white', fontSize: 24}}
                                        onPress={() => {
                                        navigation.navigate('Search');
                                      }}>Search</Text>
                                      <p class="mb-0 text-white-50">Search for different journalists by their names, pen names, and leadership positions</p>
                                      <hr class="d-none d-lg-block mb-0 me-0" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section class="references-section" id="references">
              <div class="container px-4 px-lg-5">
                  <div class="row gx-4 gx-lg-5">
                      <div class="col-md-10 col-lg-8 mx-auto text-center">
                          <h2 class="text-white mb-5">References</h2>
                          <p class="text-white mb-5">
                          References section
                          </p>
                      </div>
                  </div>
              </div>
          </section>

          <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Society of Women Journalists 2021</div></footer>
  </View>
)

}

const Search = ({navigation}) => {
  const [fname, onChangeFname] = React.useState();
  const [lname, onChangeLname] = React.useState();
  const [pname, onChangePname] = React.useState();
  const [lp, onChangeLp] = React.useState();

  searchInp = "";

  return (
  <View>
  <section class="search-section" id="search">
  <div class="container px-4 px-lg-5">

    <View style={styles.container}>
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
        color= 'mediumturquoise'
        onPress={() => {
        input1(fname, lname, pname, lp);
        navigation.navigate('Search Results');
      }}/>

      <StatusBar style="auto" />
    </View>
  </div>
  </section>
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
              <div class="container px-4 px-lg-5">
                <Text onPress={() => {
                  searchInp2 = "?first_name=" + element.first_name + "&Surname=" + element.Surname;
                  navigation.navigate('Biography')}}
                  style={styles.header}>
                  {element.first_name + " " + element.Surname}
                </Text>
                </div>
              </View>
            )
        })
      }
      else {
        return (
          <View>
          <div class="container px-4 px-lg-5">
            <Text style={styles.header}>No result matched</Text>
          </div>
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
        <Stack.Screen name="Society of Women Journalists" component={SWJ}/>
        <Stack.Screen name="Search" component={Search}/>
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
