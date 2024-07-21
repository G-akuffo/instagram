import React from "react";
import { Image, Text, View } from "react-native";
import posts from "~/assets/data/posts.json";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function PostListItem({ post }) {
  return (
    <View className="bg-white">
      {/* header */}
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      <View className="flex-row p-2 gap-3">
        <FontAwesome name="heart-o" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" />
        <Ionicons name="paper-plane-outline" size={24} color="black" />
        <Feather name="bookmark" size={24} color="black" className="ml-auto" />
      </View>
      <View>
        <Text className="p-2">{post.caption}</Text>
      </View>
    </View>
  );
}
