import React, { useState, useEffect } from "react";
import {Text,View,Image,ScrollView, Pressable} from "react-native";
import axios from "axios";
import { DataTable } from 'react-native-paper';

import styles from "./styles";
import ApiCalls from "../../components/api_calls/calls"
import Header from "../../components/header/header";
import apiImport from "../../config/keys";

const image = {
  uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png",
};

const LeagueScreen = () => {
  const [state, setState] = useState({
    results: [],
    selected: {},
  });

  var leagues = ApiCalls.LeagueCalls.AllLeagues;
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

        <ScrollView style={styles.titles}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={{ flex:0.6 }}>
                    <Text style={styles.title}>Country</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>League</Text>
                  </DataTable.Title>
                </DataTable.Header>

                {state.results.map((result) => (
                  <View key={result.id} style={styles.tableText}>
                      <DataTable.Row>
                        <DataTable.Cell style={{ flex: 0.6 }}>
                          <Text style={styles.subtitle}>{result.country.data.name}</Text>
                        </DataTable.Cell>

                        <DataTable.Cell>
                            <Text style={styles.subtitle}>{result.name}</Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                  </View>
                ))}

              </DataTable>
        </ScrollView>
    </View>
  );
};

export default LeagueScreen;
