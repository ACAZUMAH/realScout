import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "src/components/search";
import { Featured } from "./components/Featured";
import { HomeHeader } from "./components/HomeHeader";
import { Recommendations } from "./components/Recommendations";

export const Home = () => {
  return (
    <SafeAreaView className="h-full bg-[#ffffff]">
      <View className="px-3">
        <HomeHeader />
        <SearchBar />
        <Featured />
        <Recommendations />
      </View>
    </SafeAreaView>
  );
};
