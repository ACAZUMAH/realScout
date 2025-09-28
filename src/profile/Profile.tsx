import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appRoutes } from "src/constants";
import icons from "src/constants/icons";
import { useAppAuthentication } from "src/hooks/useAppAuthentication";
import { useAppNavigation } from "src/hooks/useAppNavigation";
import { links } from "./components";
import { SettingsItems } from "./components/SettingsItems";

export const Profile = () => {
  const { signout, user } = useAppAuthentication();
  const { navigateByReplace } = useAppNavigation();

  const handleSignout = () => {
    navigateByReplace(appRoutes.SIGNIN);
    signout();
  }

  return (
    <SafeAreaView className="h-full bg-[#ffffff]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View
          className="flex flex-row items-center justify-between
        mt-5"
        >
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="flex flex-col items-center relative mt-5">
          <Image
            source={{ uri: user?.avatar }}
            className="size-44 relative rounded-full"
          />
          <TouchableOpacity className="absolute bottom-14 right-28">
            <Image source={icons.edit} className="size-9" />
          </TouchableOpacity>

          <Text className="text-2xl font-rubik-bold mt-2">{user?.name}</Text>
        </View>
        <View className="flex flex-col mt-10 border-t pt-5 border-primary-200">
          {links.slice(0, 2).map((link, index) => (
            <SettingsItems key={index} icon={link.icon} label={link.label} />
          ))}
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {links.slice(2).map((link, index) => (
            <SettingsItems key={index} icon={link.icon} label={link.label} />
          ))}
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItems
            label="Logout"
            icon={icons.logout}
            showArrow={false}
            textStyle="text-danger"
            onPress={handleSignout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
