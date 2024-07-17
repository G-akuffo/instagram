import { Tabs } from "expo-router";
import {
  FontAwesome,
  AntDesign,
  Foundation,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "black", tabBarShowLabel: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "For You",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerTitle: "Explore",
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          headerTitle: "Create Post",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-square-o" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          headerTitle: "Reels",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="play-speed" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-circle" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
