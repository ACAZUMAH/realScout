import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "./navigationRef";
import { StackNavigator } from "./Stack";

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
