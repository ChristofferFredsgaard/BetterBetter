import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, Modal, TouchableHighlight, Alert } from 'react-native';
import axios from "axios";
import { DataTable } from "react-native-paper";

//Firebase Imports
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

//Styles
import styles from "./styles";
import modalStyles from './modalStyles'

//Section Imports
import Header from "../../components/header/header";

//Api Calls
import ApiCalls from "../../components/api_calls/calls";
import apiImport from "../../config/keys";

const image = {
  uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png",
};

const MatchScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [state, setState] = useState({
    results: [],
    selected: [],
});

  //Token
  var token = ApiCalls.ApiToken.Token;
  //Games
  var games = ApiCalls.Fixtures.DecToApril;
  //Predictions
  var predictions = ApiCalls.Predictions.GamePrediction;

  const getLeagueData = () => {
    axios(games).then(({ data }) => {
      let results = data.data;
      console.log(results);
      setState(prevState => {
        return { ...prevState, results: results }
      })
    });
  };

  const getPredictionData = id => {
    axios(predictions+id+token).then(({ data }) => {
        let result = data;

        console.log(result);
        console.log(id);

        setState(prevState => {
          return { ...prevState, selected: result }
        });
    });
}

  useEffect(() => {
    getLeagueData();
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
              <View key={result.id}>
                <TouchableHighlight onPress={() => getPredictionData(result.id) + setModalVisible(true)}>
                  <DataTable.Row>
                    <DataTable.Cell>
                      <Text style={styles.subtitle}>
                        {result.localTeam.data.name}
                      </Text>
                    </DataTable.Cell>

                    <DataTable.Cell>
                      <Text style={styles.subtitle}>
                        {result.time.starting_at.date}
                      </Text>
                    </DataTable.Cell>

                    <DataTable.Cell>
                      <Text style={styles.subtitle}>
                        {result.visitorTeam.data.name}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </TouchableHighlight>
              </View>
            ))}
          </ScrollView>
        </DataTable>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onShow={getPredictionData} 
      >
        <View style={modalStyles.msContainer}>
            <View style={modalStyles.msText}>
                
              <Text style={modalStyles.msText}>Thanks</Text>

              <TouchableHighlight
                style={modalStyles.msTouchableHighlight}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={modalStyles.msClose}>CLOSE</Text>
              </TouchableHighlight>
            </View>
        </View>
      </Modal>
    </View>
  );
};

export default MatchScreen;
