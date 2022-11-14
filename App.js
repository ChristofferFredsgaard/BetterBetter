//Standard Imports
import React, {useState, useEffect} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

//Firebase Imports
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

//Screens - users folder
import HomeScreen from "./screens/HomeScreen";
import MatchScreen from "./screens/MatchScreen";
import LeagueScreen from "./screens/LeagueScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LiveScreen from "./screens/LiveScreen";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignupScreen";

//Configuring Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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
  
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
    
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!user) {
    return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            tabBarStyle: {
              borderTopColor: "#353535",
              backgroundColor: "#353535",
            },
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            tabBarLabel: "Sign Up",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
            tabBarStyle: {
              borderTopColor: "#353535",
              backgroundColor: "#353535",
            },
          }}
        />
        </Tab.Navigator>
    </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
              tabBarStyle: {
                borderTopColor: "#353535",
                backgroundColor: "#353535",
              },
            }}
          />
  
          <Tab.Screen
            name="Matches"
            component={MatchScreen}
            options={{
              tabBarLabel: "Matches",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" color={color} size={size} />
              ),
              tabBarStyle: {
                borderTopColor: "#353535",
                backgroundColor: "#353535",
              },
            }}
          />
  
          <Tab.Screen
            name="Live-Matches"
            component={LiveScreen}
            options={{
              tabBarLabel: "Live-Matches",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="football-outline" color={color} size={size} />
              ),
              tabBarStyle: {
                borderTopColor: "#353535",
                backgroundColor: "#353535",
              },
            }}
          />
  
          <Tab.Screen
            name="Leagues"
            component={LeagueScreen}
            options={{
              tabBarLabel: "Leagues",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="reorder-four" color={color} size={size} />
              ),
              tabBarStyle: {
                borderTopColor: "#353535",
                backgroundColor: "#353535",
              },
            }}
          />
  
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
              tabBarStyle: {
                borderTopColor: "#353535",
                backgroundColor: "#353535",
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    ); 
  }
}