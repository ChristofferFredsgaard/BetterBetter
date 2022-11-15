import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Alert } from "react-native"

//Firebase Imports
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


import styles from './styles'

export default function SignUpScreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: "",
        pwd2: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {
        const { email, pwd, pwd2 } = values

        if (pwd == pwd2) {
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                .then(() => {
                    Alert.alert("Thanks for sign up " + email);
                    navigation.navigate('Loginscreen', { screen: 'Login' });
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Passwords are different!")
        }
    }

    return (
    <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text => handleChange(text, "email")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text => handleChange(text, "pwd")}
          maxLength={20}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          onChangeText={text => handleChange(text, "pwd2")}
          maxLength={20}
          secureTextEntry={true}
        />
        <View style={styles.button}>
                <TouchableHighlight color="#3740FE" title="Login" onPress={() => SignUp()}>
                    <Text>Log In</Text>
                </TouchableHighlight>
            </View>
    </View>
    );
}