import React from "react";
import { StyleSheet, View } from "react-native";
import { appRoutes } from "src/constants";
import icons from "src/constants/icons";
import { useAppNavigationWithRef } from "src/hooks/useAppNavigationWithRef";
import { TabBarItem } from "./TabBarItem";

export const TabBarContent = () => {
  const { navigateToTab } = useAppNavigationWithRef();
  return (
    <View style={styles.container}>
      <View className="flex flex-row justify-between items-center">
        <TabBarItem
          label="Home"
          icon={icons.home}
          route={appRoutes.HOME}
          onPress={() => navigateToTab(appRoutes.HOME)}
        />
        <TabBarItem
          label="Explore"
          icon={icons.search}
          route={appRoutes.EXPLORE}
          onPress={() => navigateToTab(appRoutes.EXPLORE)}
        />
        <TabBarItem
          label="Profile"
          icon={icons.person}
          route={appRoutes.PROFILE}
          onPress={() => navigateToTab(appRoutes.PROFILE)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderTopWidth: 0.7,
    minHeight: 50,
    paddingTop: 5,
    paddingBottom: 40,
    paddingHorizontal: 30,
    bottom: 0,
    width: "100%",
    borderTopColor: "#0061FF1A",
    backgroundColor: "white",
  },
});
