import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

// Firebase Imports
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

import styles from './styles'
import Header from '../../components/header/header'
import apiImport from "../../config/keys";

const image = { uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png" };

const MatchScreen = () => {

const [data, setData] = useState([])

  const getUpcomingGames = () => {
    fetch("https://soccer.sportmonks.com/api/v2.0/fixtures/between/2022-11-16/2023-03-31?include=localTeam,visitorTeam"+apiImport.apiToken.key)
    .then((res) => res.json())
    .then(resJson => {
      console.log(resJson)
      setData(resJson);
    }).catch(e => {console.log(e)})
  }
  
  useEffect(() => {
    getUpcomingGames();
  }, [])

  return (
    <View>
        <View style={styles.ContentContainer}>
          <Header />

          <View style={styles.titles}>
          </View>
        </View>
    </View>
  );
};

export default MatchScreen;