import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Empty } from "src/components/empty";
import { Filters } from "src/components/Filters";
import { SearchBar } from "src/components/search";
import { appRoutes } from "src/constants";
import { useGetProperties } from "src/Home/hooks/useGetProperties";
import { useAppNavigation } from "src/hooks/useAppNavigation";
import { useAppRequest } from "src/hooks/useAppRequest";
import { useFilters } from "src/hooks/useFilters";
import { ExploreHeader } from "./components/ExploreHeader";
import { PropertyCard } from "./components/PropertyCard";

const Explore = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { filter } = useFilters();
  const { navigate } = useAppNavigation();
  const { data, loading } = useAppRequest({
    fn: useGetProperties,
    params: {
      filter: filter,
      query: searchQuery,
      limit: 20,
    },
  });

  const handlePropertyPress = (id: string) => {
    navigate(appRoutes.PROPERTY, { id: id });
  };

  return (
    <SafeAreaView className="h-full">
      <View className="px-3">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PropertyCard
              item={item}
              onPress={() => handlePropertyPress(item.$id)}
            />
          )}
          keyExtractor={(item) => item.$id}
          numColumns={2}
          contentContainerClassName="pb-32"
          columnWrapperClassName="flex gap-5 mt-4 px-1"
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <ExploreHeader />
              <SearchBar search={searchQuery} onSearch={setSearchQuery} />
              <View className="mt-2">
                <Filters />
                <Text className="text-xl font-rubik-bold text-black-300 mt-2">
                  found {data?.length || 0} properties
                </Text>
              </View>
            </>
          }
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator
                size="large"
                className="text-primary-300 mt-5"
              />
            ) : (
              <Empty />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Explore;
