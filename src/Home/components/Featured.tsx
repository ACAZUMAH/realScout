import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Conditional from "src/components/conditional/Conditional";
import { appRoutes } from "src/constants";
import { useAppNavigation } from "src/hooks/useAppNavigation";
import { FeaturedCard } from "./FeaturedCard";

interface FeaturedProps {
  properties: any[];
  handlePress: (id: string) => void;
  loading?: boolean;
}

export const Featured: React.FC<FeaturedProps> = ({
  properties,
  handlePress,
  loading,
}) => {
  const { navigateToTab } = useAppNavigation();
  return (
    <View className="my-5">
      <View className="flex flex-row items-center justify-between mb-5">
        <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
        <TouchableOpacity onPress={() => navigateToTab(appRoutes.EXPLORE)}>
          <Text className="text-base font-rubik-bold text-primary-300">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={properties}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FeaturedCard item={item} onPress={() => handlePress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        contentContainerClassName="flex gap-5"
        bounces={false}
        ListEmptyComponent={
          <Conditional condition={loading!}>
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          </Conditional>
        }
      />
    </View>
  );
};
