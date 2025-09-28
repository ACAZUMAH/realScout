import { useNavigationState } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface TabBarItemProps {
  onPress: () => void;
  label: string;
  icon: ImageSourcePropType;
  route: string;
}

export const TabBarItem: React.FC<TabBarItemProps> = ({
  onPress,
  label,
  icon,
  route,
}) => {
  const currentRouteName = useNavigationState((state) => {
    const findCurrentRoute = (route: any) => {
      if (!route.state) return route.name;
      const currentRoute = route.state.routes[route.state.index];
      return findCurrentRoute(currentRoute);
    };
    const currentRoute = state.routes[state.index];
    return findCurrentRoute(currentRoute);
  });

  const isFocused = currentRouteName === route;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <View className="flex-1 mt-3 flex flex-col items-center">
        <Image
          source={icon}
          tintColor={isFocused ? "#0061ff" : "#666876"}
          resizeMode="contain"
          className="size-6"
        />
        <Text
          className={`${
            isFocused
              ? "text-primary-300 font-rubik-medium"
              : "text-black-200 font-rubik"
          } text-sm w-full text-center mt-1`}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
