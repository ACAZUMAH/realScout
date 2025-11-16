import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "src/constants/icons";

interface PropertyCardProps {
  item: any;
  onPress: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row justify-between w-full p-1 px-2 py-2 rounded-2xl
     bg-white shadow-sm"
    >
      <View className="flex flex-row justify-between w-40 rounded-2xl">
        <View
          className="flex flex-row items-center absolute px-2 
             top-2 right-2 bg-white/90 p-1 rounded-full z-50"
        >
          <Image source={icons.star} className="size-2.5" />
          <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
            {item.rating}.0
          </Text>
        </View>

        <Image
          source={{ uri: item.image }}
          className="w-full h-32 rounded-2xl"
        />
      </View>
      <View className="flex flex-col w-36 gap-8 my-3">
        <Text className="text-2xl font-rubik-bold text-black-300">
          {item.name}
        </Text>
        <Text className="text-xs font-rubik text-black-200">
          {item.address}
        </Text>
      </View>

      <View className="flex flex-col gap-10 items-end my-3 pr-3">
        <Image
          source={icons.heart}
          className="w-8 h-8 size-5"
          tintColor="#191d31"
        />
        <Text className="text-xl font-rubik-bold text-primary-300">
          $ {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
