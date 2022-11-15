import React from 'react';
import { Text, View, Image } from 'react-native';

//Firebase Imports
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


import styles from './styles'
import Header from '../../components/header/header'

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
          </View>
        </View>
    </View>
  );
};

export default HomeScreen;