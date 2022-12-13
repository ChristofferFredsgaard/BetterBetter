import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Modal,
  Pressable,
  GestureRecognizer,
} from "react-native";

//Firebase Imports
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import styles from "./styles";
import Header from "../../components/header/header";
import EditProfile from "../../components/edit_profile/edit_profile";

const image = {
  uri: "https://freepngimg.com/thumb/wave/110541-white-wave-free-hq-image.png",
};

const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .catch((error) => alert(error.message));
};

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.ContentContainer}>
        <Header />
        <View style={styles.logo}>
          <Image source={image} style={styles.image}></Image>
        </View>
        <View>
          <View>
            <TouchableHighlight
              style={styles.tableText}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.subtitle}>EDIT PROFILE</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight onPress={handleSignOut}>
            <View>
              <Text style={styles.subtitle}>LOG OUT</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <EditProfile />
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
          </Pressable>
        </Modal>
    </View>
  );
};

export default ProfileScreen;
