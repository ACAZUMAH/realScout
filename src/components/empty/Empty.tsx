import React from "react";
import { Image, Text, View } from "react-native";
import images from "src/constants/images";

export const Empty: React.FC = () => {
  return (
    <View className="flex items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="2xl font-rubik-bold text-black-300 mt-5">
        No Results
      </Text>
      <Text className="text-base text-black-100 mt-2">
        We couldn’t find any results
      </Text>
    </View>
  );
};
