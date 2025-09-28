import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FeaturedCard } from "src/components/property";

export const Featured = () => {
  return (
    <View className="my-5">
      <View className="flex flex-row items-center justify-between mb-5">
        <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
        <TouchableOpacity>
          <Text className="text-base font-rubik-bold text-primary-300">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FeaturedCard />
    </View>
  );
};
