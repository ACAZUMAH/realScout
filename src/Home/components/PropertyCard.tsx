import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "src/constants/icons";

interface PropertyCardProps {
  item: any;
  onPress: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ onPress, item }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full px-3 py-4 rounded-2xl bg-white shadow-sm
      shadow-black-100/100 relative"
    >
      <View
        className="flex flex-row items-center absolute px-2 
       top-5 right-5 bg-white/90 p-1 rounded-full z-50"
      >
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          {item.rating}.0
        </Text>
      </View>

      <Image source={{ uri: item.image }} className="w-full h-40 rounded-2xl" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">
          {item.name}
        </Text>
        <Text className="text-xs font-rubik text-black-200">
          {item.address}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            $ {item.price}
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
