import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles'
import Header from '../../components/header/header'

const image = { uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png" };

const LeagueScreen = () => {
  return (
    <View>
      <View style={styles.ContentContainer}>
        <Header />

        <View style={styles.logo}>
          <Image source={image} style={styles.image}></Image>
        </View>
      </View>

        <View style={styles.titles}>
          <Text style={styles.title}>LEAGUES</Text>
          <Text style={styles.subtitle}>Here at BetterBetter you will be able to determine your bets from specific data, 
                                        that you can find for every match you search up. It has never 
                                        been easier to find the average amount of corners, 
                                        goals scored or goals conceded per match. Create your bets, with the help of our data.</Text>
        </View>
    </View>
  );
};

export default LeagueScreen;