import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen/index";

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
        component={HomeScreen}
        options={{
          tabBarLabel: "Matches",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
          tabBarStyle: {
            borderTopColor: "#353535",
            backgroundColor: "#353535",
          },
        }}
      />

      <Tab.Screen
        name="Live-Matches"
        component={HomeScreen}
        options={{
          tabBarLabel: "Live-Matches",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
          tabBarStyle: {
            borderTopColor: "#353535",
            backgroundColor: "#353535",
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football" color={color} size={size} />
          ),
          tabBarStyle: {
            borderTopColor: "#353535",
            backgroundColor: "#353535",
          },
        }}
      />

      <Tab.Screen
        name="Leagues"
        component={HomeScreen}
        options={{
          tabBarLabel: "Leagues",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
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
