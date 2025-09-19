import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Appearance } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./index";

import ShoppingLists from "./shopping-lists";

import Profile from "./profile";

const Tab = createBottomTabNavigator();

export default function HomeLayout() {

  const colorScheme = Appearance.getColorScheme() || "light";

  const activeColor = colorScheme === "dark" ? "#fff" : "#4c669f";
  const inactiveColor = "#888";

  return (

    <Tab.Navigator

      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: { backgroundColor: colorScheme === "dark" ? "#121212" : "#fff" },
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="ShoppingLists"
        component={ShoppingLists}
        options={{
          tabBarLabel: "Shopping Lists",
          tabBarIcon: ({ color, size }) => <Ionicons name="list-outline" size={size} color={color} />,
        }}
      />


      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
        }}
        
      />
    </Tab.Navigator>
  );
}
