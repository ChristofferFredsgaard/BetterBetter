import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image } from 'react-native';
import axios from "axios";
import { DataTable } from "react-native-paper";

//Firebase Imports
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

//Styles
import styles from "./styles";

//Section Imports
import Header from "../../components/header/header";

//Api Calls
import ApiCalls from "../../components/api_calls/calls";

const image = {
  uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png",
};

const TeamdataScreen = ({route, navigation}) => {
    const { clubID, season } = route.params;

    const [state, setState] = useState({
        results: [],
        selected: {}
    });

  //Token
  var token = ApiCalls.ApiToken.Token;

  //Includes
  var includes = "?include=stats&seasons="

  var test = "https://soccer.sportmonks.com/api/v2.0/teams/"+clubID+"?&include=stats&seasons="+season+"&api_token=FYNhuIUF1XaTFKnLqL6WCkU2vyskoZoS0K6LVvmb5ggpQl0o5s8UGNut4GPe"

  const getTeamData = () => {
    axios(test).then(({ data }) => {
        let results = data.data;
        console.log(results);
      setState(prevState => {
        return { ...prevState, results: results }
      })
    });
  };

  useEffect(() => {
    getTeamData();
  }, []);

  return (
    <View>
      <View style={styles.ContentContainer}>
        <Header />

        <View style={styles.logo}>
          <Image source={image} style={styles.image}></Image>
        </View>
      </View>

      <View style={styles.titles}>
        {/* {state.results.map((result) => (
            <View key={result.id} style={styles.tableText}>
                <Text>{result.name}</Text>
            </View>
        ))} */}
        <Text>{season}</Text>
      </View>
    </View>
  );
};

export default TeamdataScreen;