import React from "react";
import { Image, Text, View } from "react-native";
import icons from "src/constants/icons";
import { useAppAuthentication } from "src/hooks/useAppAuthentication";

export const HomeHeader = () => {
  const { user } = useAppAuthentication();
  return (
    <View className="flex flex-row items-center justify-between mt-5">
      <View className="flex flex-row">
        <Image
          source={{ uri: user?.avatar! }}
          className="size-12 rounded-full"
        />
        <View className="flex flex-col items-start justify-center ml-2">
          <Text className="text-xs font-rubik text-black-100">
            Good {' '}
            {new Date().getHours() < 12
              ? "Morning"
              : new Date().getHours() < 18
              ? "Afternoon"
              : "Evening"}
            ,
          </Text>
          <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
        </View>
      </View>
      <Image source={icons.bell} className="size-6" />
    </View>
  );
};
