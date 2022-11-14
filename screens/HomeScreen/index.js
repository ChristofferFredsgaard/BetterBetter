import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import styles from './styles'
import Header from '../../components/header/header'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const image = { uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png" };

const HomeScreen = () => {
  return (
    <View>
        <View style={styles.ContentContainer}>
        <Header />
          <View style={styles.logo}>
            <Image source={image} style={styles.image}></Image>
          </View>
          
          <View style={styles.titles}>
              <Text style={styles.title}>HOME</Text>
              <Text style={styles.subtitle}>{firebase.auth.currentUser?.email}</Text>
          </View>
        </View>
    </View>
  );
};

export default HomeScreen;