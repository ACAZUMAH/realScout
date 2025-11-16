import React from "react";
import { Image, Text, View } from "react-native";
import { facilities } from "src/constants/data";
import icons from "src/constants/icons";

interface FacilityProps {
  facility: string;
}

export const Facility: React.FC<FacilityProps> = ({ facility }) => {
  const item = facilities.find((item) => item.title === facility);

  return (
    <View className="flex flex-1 flex-col items-center min-w-16 max-w-20">
      <View
        className="flex flex-row items-center justify-center 
        p-4 bg-primary-100 rounded-full size-20"
      >
        <Image source={facility ? item?.icon : icons.info} className="size-8" />
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-black-300 text-sm text-center font-rubik mt-1.5"
      >
        {facility}
      </Text>
    </View>
  );
};
