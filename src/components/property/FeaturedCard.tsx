import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "src/constants/icons";
import images from "src/constants/images";

interface FeaturedCardProps {
  onPress?: () => void;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-center w-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />

      <View
        className="flex flex-row items-center bg-white px-3 py-1.5 rounded-full
        absolute top-4 right-4"
      >
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          4.4
        </Text>
      </View>
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extraBold text-accent-100"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text className="text-base font-rubik text-accent-100">
          22 w 15th St, New York, NY
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extraBold text-accent-100">
            $2,500
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
