import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import styles from './styles'
import Header from '../../components/header/header'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getDatabase, ref, onValue} from "firebase/database";

const image = { uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png" };

const handleSignOut = () => {
  firebase.auth()
    .signOut()
    .catch(error => alert(error.message))
}

const user = firebase.auth().currentUser.email

/*const test = user.providerData.forEach((userInfo) => {
  console.log(userInfo.email)
});*/



const ProfileScreen = () => {
  return (
    <View>
        <View style={styles.ContentContainer}>
          <Header />
          <View style={styles.logo}>
            <Image source={image} style={styles.image}></Image>
          </View>
          <View>
            <TouchableHighlight onPress={handleSignOut}>
              <View>
                <Text style={styles.subtitle}>Email: {user}</Text>
                <Text style={styles.subtitle}>LOG OUT</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
    </View>
  );
};

export default ProfileScreen;