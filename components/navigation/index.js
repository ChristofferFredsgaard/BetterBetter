import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen/index";
import MatchScreen from "../screens/MatchScreen";
import LeagueScreen from "../screens/LeagueScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LiveScreen from "../screens/LiveScreen";

const Tab = createBottomTabNavigator();

const Tabs = ({ props }) => {
  return (
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
  );
};

export default Tabs;
