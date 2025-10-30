import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Filters } from "src/components/Filters";
import { PropertyCard } from "src/components/property";

export const Recommendations = () => {
  return (
    <View className="mt-4">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-rubik-bold text-black-300">
          Our Recommendation
        </Text>
        <TouchableOpacity>
          <Text className="text-base font-rubik-bold text-primary-300">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <Filters />
      
      <View className="flex flex-row gap-5 mt-5">
        <PropertyCard />
        <PropertyCard />
      </View>
    </View>
  );
};
