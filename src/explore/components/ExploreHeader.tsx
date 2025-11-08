import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "src/constants/icons";

export const ExploreHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between mt-2 mb-2">
      <TouchableOpacity className="flex p-2 rounded-full border border-primary-200">
        <Image source={icons.backArrow} className="size-6" />
      </TouchableOpacity>
      <Text>Search for Your Ideal Home</Text>
      <Image source={icons.bell} className="size-6" />
    </View>
  );
};
