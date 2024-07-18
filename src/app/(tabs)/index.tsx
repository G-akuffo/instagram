import React from "react";
import { Text, View } from "react-native";
import posts from "~/assets/data/posts.json";

const post1 = posts[0];

export default function FeedScreen() {
  return (
    <View className="bg-slate-300 flex-1 items-center justify-center">
      <Text className="text-5xl font-bold text-blue-500">Feed</Text>
    </View>
  );
}
