import React from "react";
import { Tabs } from "expo-router";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../context";
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.lightText,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 60,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Podcast"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="podcast" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="MyCourse"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="playcircleo" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Screens"
        options={{ href: null, headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;
