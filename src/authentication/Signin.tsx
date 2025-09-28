import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appRoutes } from "src/constants";
import icons from "src/constants/icons";
import images from "src/constants/images";
import { useAppNavigation } from "src/hooks/useAppNavigation";
import { useSignin } from "./hooks/useSignin";

export const Signin = () => {
  const { useGoogleSignin } = useSignin();
  const {navigateByReplace } = useAppNavigation();

  const onGoogleSignin = async () => {
    const result = await useGoogleSignin();
    if (result) {
      navigateByReplace(appRoutes.TABS);
    } else {
      Alert.alert("Error", "Failed to sign in. Please try again.");
    }
  };

  return (
    <SafeAreaView className="h-full bg-[#ffffff]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to RealScout
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <TouchableOpacity
            onPress={onGoogleSignin}
            className="bg-[#ffff] shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row justify-center items-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-200 ml-2">
                continue with google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
