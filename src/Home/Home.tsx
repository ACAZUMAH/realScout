import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SearchBar } from "src/components/search/SearchBar";
import { Featured } from "./components/Featured";
import { HomeHeader } from "./components/HomeHeader";

export const Home = () => {
  return (
    <SafeAreaView className="h-full bg-[#ffffff]">
      <View className="px-5">
        <HomeHeader />
        <SearchBar />
        <Featured />
      </View>
    </SafeAreaView>
  );
};
