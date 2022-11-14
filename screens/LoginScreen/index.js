import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable, TouchableHighlight } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import styles from './styles';

export default function LoginScreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {
        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
                console.log('Logged');
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }

    return (
        <View style={styles.view}>
            <View style={styles.textInput}>
                <TextInput
                placeholder="Email"
                onChangeText={text => handleChange(text, "email")}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                placeholder="Password"
                onChangeText={text => handleChange(text, "pwd")}
                maxLength={20}
                secureTextEntry={true}
                />
            </View>
            <TouchableHighlight color="#3740FE" title="Login" onPress={() => Login()}>
                <View style={styles.button}>
                    <Text>Log In</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}