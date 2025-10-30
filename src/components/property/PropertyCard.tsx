import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "src/constants/icons";
import images from "src/constants/images";

interface PropertyCardProps {
  onPress?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full px-3 py-4 rounded-2xl bg-white shadow-lg
      shadow-black-100/70 relative"
    >
      <View
        className="flex flex-row items-center absolute px-2 
       top-5 right-5 bg-white/90 p-1 rounded-full z-50"
      >
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          4.4
        </Text>
      </View>

      <Image source={images.newYork} className="w-full h-40 rounded-2xl" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">
          Cozy Studio
        </Text>
        <Text className="text-xs font-rubik text-black-200">
          22 w 15th St, New York, NY
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            $2,500
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191d31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
