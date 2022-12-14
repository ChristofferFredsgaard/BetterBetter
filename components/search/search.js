import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import axios from "axios";
import { DataTable, Modal } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Firebase Imports
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

//Styles
import styles from "./search_styles";

//Api Calls
import ApiCalls from "../../components/api_calls/calls";
import Analytics from "../analytics/analytics";

//Token
var token = ApiCalls.ApiToken.Token;

const Search = () => {
  //Modal
  const [modalVisible, setModalVisible] = useState(false);

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = () => {
    axios(
      "https://soccer.sportmonks.com/api/v2.0/teams/search/" + state.s + token
    ).then(({ data }) => {
      let results = data.data;
      console.log(results)

      results.map(async (item) => {
        const ids = {};
        
        ids.name = item.name;
        ids.id = item.id;
        ids.season = item.current_season_id;

        try {
          await AsyncStorage.setItem('ids', JSON.stringify(ids))
          console.log(ids)

        } catch (e) {
          console.log("Error")
        }
      });

      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  return (
    <View style={styles.ContentContainer}>
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
              <Text style={styles.title}>SeasonID</Text>
            </DataTable.Title>
          </DataTable.Header>

          <ScrollView>
            {state.results.map((result) => (
              <TouchableHighlight
                key={result.id}
                style={styles.tableText}
                onPress={() => setModalVisible(true)}
              >
                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 2.5 }}>
                    <Text style={styles.subtitle}>{result.name}</Text>
                  </DataTable.Cell>

                  <DataTable.Cell>
                    <Text style={styles.subtitle}>{result.short_code}</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ flex: 1.3 }}>
                    <Text style={styles.subtitle}>
                      {result.current_season_id}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </DataTable>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Analytics />
        <TouchableHighlight style={styles.msTouchableHighlight}>
          <Text style={styles.msClose}>CLOSE</Text>
        </TouchableHighlight>
      </Modal>
    </View>
  );
};

export default Search;