import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native";
import axios from "axios";
import { DataTable } from "react-native-paper";

//Firebase Imports
//import firebase from "firebase/compat/app";
//import "firebase/compat/auth";

//Styles
import styles from "./edit_profile_styles";

//onst usermail = firebase.auth().currentUser.email;

const EditProfile = () => {
  return (
    <View>
      <View style={styles.ContentContainer}>
        <View style={styles.titles}>
          <View>
            <Text style={styles.title}></Text>
            <View>
              <Text style={styles.subtitle}></Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>Password</Text>
            <View>
              <Text style={styles.subtitle}></Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
