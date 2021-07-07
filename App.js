import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, BackHandler, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import './assets/css/styles.css';

const Stack = createStackNavigator();
let searchInp = "";
let index = 0;
let url = "https://appmockapi.herokuapp.com/author/search";

const Main = ({navigation}) => {
  return (
  <View>
  <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <title>swj</title>
          <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

          <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>

          <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

          <link href="/assets/css/styles.css" rel="stylesheet" />

  </head>
    <div id="page-top">
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
                  <img class="img-fluid" src="https://php-bootstrap.com/templates/grayscale/img/bg-masthead.jpg" alt="..." />
              </div>
          </section>

          <section class="projects-section bg-light" id="contributors">
              <div class="container px-4 px-lg-5">

              <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div class="col-lg-6"><img class="img-fluid" src="https://php-bootstrap.com/templates/grayscale/img/demo-image-01.jpg" alt="..." /></div>
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
                      <div class="col-lg-6"><img class="img-fluid" src="https://php-bootstrap.com/templates/grayscale/img/demo-image-02.jpg" alt="..." /></div>
                      <div class="col-lg-6 order-lg-first">
                          <div class="bg-black text-center h-100 project">
                              <div class="d-flex h-100">
                                  <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <Text style={styles.searchNav}
                                      onPress ={() => {
                                        navigation.navigate('Search')
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


          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>

          <script src="/assets/js/scripts.js"></script>
          <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Society of Women Journalists 2021</div></footer>
      </div>
  </View>
  )
}

const Search = ({navigation}) => {
  const [name, onChangeFname] = React.useState();
  //const [lp, onChangeLp] = React.useState();

  searchInp = "";

  return (
  <View>
    <header class="masthead">
          <div class="container px-4 px-lg-5">
              <View style={styles.searchContainer}>
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
        return items.map((element, i) => {
          if (element['first_name'] != null){
            return (
              <View>
                <Text onPress={() => {
                  index = i;
                  navigation.navigate('Biography')}}
                  style={styles.searchResult}>
                  {element['first_name'] + " " + element['Surname'] + "\n(Start Year:" + element['Startyear'] + " - End Year: " + element['Endyear'] + ")"}
                </Text>
              </View>
            )
          }
          else {
            return (
              <View>
                <Text onPress={() => {
                  index = i;
                  navigation.navigate('Biography')}}
                  style={styles.searchResult}>
                  {element['Surname'] + "\n(Start Year:" + element['Startyear'] + " - End Year: " + element['Endyear'] + ")"}
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
  let pf = "";//prefix
  let fn = "";//first name
  let sn = "";//surname
  let pn = "";//pen name
  let dob = "";//DOB
  let dod = "";//DOD
  let lp = "";//leadership position
  let sa = "";//street address
  let nh = "";//neighborhood
  let ct = "";//city
  let pc = "";//post code
  let ps = "";//proposer
  let o1 = "";//org1
  let o2 = "";//org2
  let o3 = "";//org3
  let o4 = "";//org4
  let o5 = "";//org5
  let pd = "";//periodicals
  let si = "";//source of info
  let other = "";//other
  let joined = "";//joined
  let sy = "";//start year
  let ey = "";//end year

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
      return items.map((element, i) => {
        if (i == index){
          if (element['prefix/title'] != null) pf = element['prefix/title'];
          if (element['first_name'] != null) fn = element['first_name'];
          if (element['Surname'] != null) sn = element['Surname'];
          element['pen_name'] != null ? pn = "Pen name: " + element['pen_name'] : pn = "";
          element.DOB != null ? dob = "Date of Birth: " + element['DOB'] : dob = "";
          element.DOD != null ? dod = "Date of Death: " + element['DOD'] : dod = "";
          element['leadership_position'] != null ? lp = "Leadership Position: " + element['leadership_position'] : lp = "";
          element['street_address'] != null ? sa = "Street Address: " + element['street_address'] : sa = "";
          element['neighborhood'] != null ? nh = "Neighborhood: " + element['neighborhood'] : nh = "";
          element['city'] != null ? ct = "City: " + element['city'] : ct = "";
          element['post_code'] != null ? pc = "Post Code: " + element['post_code'] : pc = "";
          element['proposer'] != null ? ps = "Proposer: " + element['proposer'] : ps = "";
          element['org1'] != null ? o1 = "Organization 1: " + element['org1'] : o1 = "";
          element['org2'] != null ? o2 = "Organization 2: " + element['org2'] : o2 = "";
          element['org3'] != null ? o3 = "Organization 3: " + element['org3'] : o3 = "";
          element['org4'] != null ? o4 = "Organization 4: " + element['org4'] : o4 = "";
          element['org5'] != null ? o5 = "Organization 5: " + element['org5'] : o5 = "";
          element['periodicals'] != null ? pd = "Periodicals: " + element['periodicals'] : pd = "";
          element['source_of_info'] != null ? si = "Source of Information: " + element['source_of_info'] : si = "";
          element['other'] != null ? other = "Other: " + element['other'] : other = "";
          element['Joined'] != null ? joined = "Joined: " + element['joined'] : joined = "";
          element['Startyear'] != null ? sy = "Start Year: " + element['Startyear'] : sy = "";
          element['Endyear'] != null ? ey = "End Year: " + element['Endyear'] : ey = "";
            return(
              <View>
                <header class="masthead">
                  <div class="container px-4 px-lg-5">
                    <View style={styles.bioContainer}>
                      <Text style={styles.bio}>{pf + " " + fn + " " + sn}</Text>
                      <Text style={styles.bio}>{pn}</Text>
                      <Text style={styles.bio}>{dob}</Text>
                      <Text style={styles.bio}>{dod}</Text>
                      <Text style={styles.bio}>{lp}</Text>
                      <Text style={styles.bio}>{sa}</Text>
                      <Text style={styles.bio}>{nh}</Text>
                      <Text style={styles.bio}>{ct}</Text>
                      <Text style={styles.bio}>{pc}</Text>
                      <Text style={styles.bio}>{ps}</Text>
                      <Text style={styles.bio}>{o1}</Text>
                      <Text style={styles.bio}>{o2}</Text>
                      <Text style={styles.bio}>{o3}</Text>
                      <Text style={styles.bio}>{o4}</Text>
                      <Text style={styles.bio}>{o5}</Text>
                      <Text style={styles.bio}>{pd}</Text>
                      <Text style={styles.bio}>{si}</Text>
                      <Text style={styles.bio}>{other}</Text>
                      <Text style={styles.bio}>{joined}</Text>
                      <Text style={styles.bio}>{sy}</Text>
                      <Text style={styles.bio}>{ey}</Text>
                    </View>
                  </div>
                </header>
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
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Search Results" component={SearchRes}/>
        <Stack.Screen name="Biography" component={Bio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
    justifyContent: "center"
  },
  searchContainer: {
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
  searchNav: {
    fontSize: 25,
    color: "white",
    textDecorationLine: 'underline',
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
  bioContainer: {
    backgroundColor: 'white',
    height: 750,
  },
  bio: {
    fontSize: 20,
  },
  web: {
     flex: 1
  },
});

export default App;
