import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PropertyCard } from "src/components/property";
import { SearchBar } from "src/components/search";
import { Featured } from "./components/Featured";
import { HomeHeader } from "./components/HomeHeader";
import { Recommendations } from "./components/Recommendations";

export const Home = () => {
  return (
    <SafeAreaView className="h-full ">
      <View className="px-3">
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <PropertyCard />}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          contentContainerClassName="pb-32"
          columnWrapperClassName="flex gap-5 mt-4 px-1"
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <HomeHeader />
              <SearchBar />
              <Featured />
              <Recommendations />
            </>
          }
        />
      </View>
    </SafeAreaView>
  );
};
