import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import axios from "axios";
import { DataTable } from "react-native-paper";

//Firebase Imports
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

//Styles
import styles from "./styles";
import modalStyles from "./modalStyles";

//Section Imports
import Header from "../../components/header/header";

//Api Calls
import ApiCalls from "../../components/api_calls/calls";
import apiImport from "../../config/keys";

//Token
var token = ApiCalls.ApiToken.Token;

const SearchScreen = ({route, navigation}) => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = () => {
    axios("https://soccer.sportmonks.com/api/v2.0/teams/search/"+state.s+token).then(({ data }) => {
      let results = data.data;
      console.log(axios);
      console.log(results);
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  return (
    <View style={styles.Container}>
      <Header />
      <View>
      <TextInput
        style={styles.SearchBar}
        placeholder="Club name..."
        placeholderTextColor="white"
        onChangeText={(text) =>
          setState((prevState) => {
            return { ...prevState, s: text };
          })
        }
        onSubmitEditing={search}
        value={state.s}
      />
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ flex: 2.5 }}>
              <Text style={styles.title}>Team</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.title}>Short</Text>
            </DataTable.Title>
            <DataTable.Title style={{ flex: 1.3 }}>
              <Text style={styles.title}>Founded</Text>
            </DataTable.Title>
          </DataTable.Header>

          <ScrollView>
            {state.results.map((result) => (
              <TouchableHighlight
                key={result.id}
                style={styles.tableText}
                onPress={() => navigation.navigate('Teamdata', {name: result.name, season: result.current_season_id})}
              >
                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 2.5 }}>
                    <Text style={styles.subtitle}>{result.name}</Text>
                  </DataTable.Cell>

                  <DataTable.Cell>
                    <Text style={styles.subtitle}>{result.short_code}</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ flex: 1.3 }}>
                    <Text style={styles.subtitle}>{result.founded}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </DataTable>
      </View>
    </View>
  );
};

export default SearchScreen;