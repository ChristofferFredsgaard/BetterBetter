import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles'
import Header from '../../header/header'
import logo from '../../../assets/BetterBetter.png'

const image = { uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png" };

const MatchScreen = () => {
  return (
    <View>
      <Header />
        <View style={styles.ContentContainer}>
          <View style={styles.logo}>
            <Image source={image} style={styles.image}></Image>
          </View>
          
          <View style={styles.titles}>
              <Text style={styles.title}>Welcome to SpiceBET</Text>
              <Text style={styles.subtitle}>Here at SpiceBet you will be able to determine your bets from specific data, 
                                            that you can find for every match you search up. It has never 
                                            been easier to find the average amount of corners, 
                                            goals scored or goals conceded per match. Create your bets, with the help of our data.</Text>
          </View>
        </View>
    </View>
  );
};

export default MatchScreen;