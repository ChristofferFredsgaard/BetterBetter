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
              <Text style={styles.welcome_title}>Welcome to BetterBetter</Text>
              <Text style={styles.subtitle}>As the title suggest with our application you can be better at betting. 
              Our application provide better betting percentage.
              With these more precise percentages you can be sure to know what to bet on and on what type of category.
              Be sure to use our application to ensure you choose a bet that suits you're betting chances.
              Don't be afraid give it a try!
              </Text>
          </View>
        </View>
    </View>
  );
};

export default HomeScreen;