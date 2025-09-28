import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StatusBar } from "react-native";
import { Signin } from "src/authentication";
import { appRoutes } from "src/constants";
import { useAppAuthentication } from "src/hooks/useAppAuthentication";
import { Property } from "src/property";
import { TabsNavigator } from "./Tabs";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const { isAuthenticated } = useAppAuthentication();

  const initialRoute = React.useMemo(() => {
    return isAuthenticated ? appRoutes.TABS : appRoutes.SIGNIN;
  }, [isAuthenticated]);

  return (
    <>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={appRoutes.SIGNIN} component={Signin} />
        <Stack.Screen name={appRoutes.TABS} component={TabsNavigator} />
        <Stack.Screen name={appRoutes.PROPERTY} component={Property} />
      </Stack.Navigator>
    </>
  );
};
 