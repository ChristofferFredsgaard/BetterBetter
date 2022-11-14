import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import auth from 'firebase'

import Tabs from '../navigation';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default function Loginscreen({ navigation }) {

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

    /*function Login() {
        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
                console.log('Logged');
                navigation.navigate('SignInScreen', { screen: 'SignUp' });
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }*/

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            } 
        })
    })

    return (
        <View style={styles.view}>
            <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            onChangeText={text => handleChange(text, "email")}
            />
            <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            onChangeText={text => handleChange(text, "pwd")}
            maxLength={20}
            secureTextEntry={true}
            />
            <Pressable color="#3740FE" title="Login" onPress={() => Login()}>
                <Text>Log In</Text>
            </Pressable>
        </View>
    )
}