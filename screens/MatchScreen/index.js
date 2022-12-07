import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import axios from "axios";
import { DataTable } from 'react-native-paper';

// Firebase Imports
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

import styles from './styles'
import Header from '../../components/header/header'
import ApiCalls from '../../components/api_calls/calls'
import apiImport from "../../config/keys";

const image = {
  uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png",
};

const MatchScreen = () => {
  const [state, setState] = useState({
    results: [],
    selected: {},
  });

  const consoleTester = () => {
    console.log(/*log data fra kampen der bliver trykket på*/)
    Alert.alert("This feature is still under construction...")
  }

  var leagues = ApiCalls.Fixtures.DecToApril;
  const getJsonData = () => {
    axios(leagues).then(({ data }) => {
      let results = data.data;
      //console.log(axios);
      console.log(results);
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  useEffect(() => {
    getJsonData();
  }, [])

  return (
    <View>
      <View style={styles.ContentContainer}>
        <Header />

        <View style={styles.logo}>
          <Image source={image} style={styles.image}></Image>
        </View>
      </View>
              <View style={styles.titles}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>
                    <Text style={styles.title}>Hometeam</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Time</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Awayteam</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <ScrollView>
                {state.results.map((result) => (
                  <View key={result.id} style={styles.tableText}>
                    <TouchableHighlight onPress={() => consoleTester()}>
                      <DataTable.Row>
                        <DataTable.Cell>
                          <Text style={styles.subtitle}>{result.localTeam.data.name}</Text>
                        </DataTable.Cell>

                        <DataTable.Cell>
                            <Text style={styles.subtitle}>{result.time.starting_at.date} </Text>
                        </DataTable.Cell>

                        <DataTable.Cell>
                            <Text style={styles.subtitle}>{result.visitorTeam.data.name}</Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                    </TouchableHighlight>
                  </View>
                ))}
            </ScrollView>

              </DataTable>
              </View>
    </View>
  );
};

export default MatchScreen;