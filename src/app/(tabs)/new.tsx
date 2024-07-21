import React from "react";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function CreatePost() {
  const [caption, setCaption] = useState("Write something...");
  return (
    <View className="p-3 items-center flex-1">
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
      />
      <Text onPress={() => {}} className="font-semibold m-5 text-blue-500">
        Change
      </Text>
      <TextInput
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder="Write something..."
        className="w-full p-3"
      />
      <View className="mt-auto w-full">
        <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
}
