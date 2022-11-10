import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import Login from './components/users/login';
import Signup from './components/users/signup';
import SignUpScreen from './components/users/signup2';
import firebase from 'firebase/compat/app'

const Tab = createBottomTabNavigator();

function TabsLogin() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Log In",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          tabBarStyle: {
            borderTopColor: "#353535",
            backgroundColor: "#353535",
          },
        }}
      />

      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarLabel: "Sign Up",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" color={color} size={size} />
          ),
          tabBarStyle: {
            borderTopColor: "#353535",
            backgroundColor: "#353535",
          },
        }}
      />

      <Tab.Screen
        name="Signup2"
        component={SignUpScreen}
        options={{
          tabBarLabel: "Sign Up 2",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" color={color} size={size} />
          ),
          tabBarStyle: {
            borderTopColor: "#353535",
            backgroundColor: "#353535",
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyD7ygjGXrh22R-ACUuIyXqW9a13WMg_AlE",
    authDomain: "betterbetter-odds.firebaseapp.com",
    projectId: "betterbetter-odds",
    storageBucket: "betterbetter-odds.appspot.com",
    messagingSenderId: "933134229209",
    appId: "1:933134229209:web:64407976a294b0b51ee8c8",
    measurementId: "G-KDXHFJX3QJ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <TabsLogin />
    </NavigationContainer>
  );
}