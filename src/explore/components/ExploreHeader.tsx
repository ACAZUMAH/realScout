import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "src/constants/icons";
import { useAppNavigation } from "src/hooks/useAppNavigation";

export const ExploreHeader = () => {
  const { navigateBack } = useAppNavigation();
  return (
    <View className="flex flex-row items-center justify-between mt-2 mb-2">
      <TouchableOpacity
        className="flex flex-row rounded-full size-10 items-center 
       justify-center bg-primary-200"
        onPress={() => navigateBack()}
      >
        <Image source={icons.backArrow} className="size-5" />
      </TouchableOpacity>
      <Text>Search for Your Ideal Home</Text>
      <Image source={icons.bell} className="w-6 h-6" />
    </View>
  );
};
