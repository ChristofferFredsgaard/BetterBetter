import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

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
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Passwords are different!")
        }
    }

    return <View style={styles.view}>
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
        <TextInput
          style={styles.inputStyle}
          placeholder="Confirm Password"
          onChangeText={text => handleChange(text, "pwd2")}
          maxLength={20}
          secureTextEntry={true}
        />
        <Pressable color="#3740FE" title="Login" onPress={() => SignUp()}>
            <Text>Sign Up</Text>
        </Pressable> 
    </View>
}