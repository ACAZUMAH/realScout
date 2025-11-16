import React from "react";
import { Image, Text, View } from "react-native";
import icons from "src/constants/icons";

interface ReviewProps {
  item: any;
}

export const Review: React.FC<ReviewProps> = ({ item }) => {
  return (
    <View className="mt-4">
      <View className="flex flex-row items-center justify-start gap-2">
        <Image source={{ uri: item.avatar }} className="size-12 rounded-full" />
        <Text className="text-black-300 text-xl font-rubik-semiBold">
          {item.name}
        </Text>
      </View>
      <Text className="text-black-200 text-base font-rubik mt-3">
        {item.review}
      </Text>

      <View className="flex flex-row items-center justify-between mt-3">
        <View className="flex flex-row items-center">
          <Image
            source={icons.heart}
            className="size-6"
            tintColor={"#0061FF"}
          />
          <Text className="text-black-300 text-lg font-rubik-medium ml-2">
            {item.rating}
          </Text>
        </View>
        <Text>{new Date(item.$createdAt).toDateString()}</Text>
      </View>
    </View>
  );
};
