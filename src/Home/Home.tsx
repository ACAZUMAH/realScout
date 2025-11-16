import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Conditional from "src/components/conditional/Conditional";
import { Empty } from "src/components/empty";
import { SearchBar } from "src/components/search";
import { appRoutes } from "src/constants";
import { useAppNavigation } from "src/hooks/useAppNavigation";
import { useAppRequest } from "src/hooks/useAppRequest";
import { useFilters } from "src/hooks/useFilters";
import { Featured } from "./components/Featured";
import { HomeHeader } from "./components/HomeHeader";
import { PropertyCard } from "./components/PropertyCard";
import { Recommendations } from "./components/Recommendations";
import { useGetLatestProperties } from "./hooks/useGetLatestProperties";
import { useGetProperties } from "./hooks/useGetProperties";

export const Home = () => {
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

  const {
    data: latest,
    loading: latestLoading,
    refetch,
  } = useAppRequest({
    fn: useGetLatestProperties,
    params: {
      filter: filter,
      query: searchQuery,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({ filter: filter, query: searchQuery, limit: 6 });
  }, [filter, searchQuery]);

  const handlePropertyPress = (id: string) => {
    navigate(appRoutes.PROPERTY, { id: id });
  };

  return (
    <SafeAreaView className="h-full">
      {/* <Button onPress={() => seed()}>
        Seed
      </Button> */}
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
              <HomeHeader />
              <SearchBar search={searchQuery} onSearch={setSearchQuery} />
              <Conditional condition={Boolean(latest && latest.length > 0)}>
                <Featured
                  properties={latest!}
                  handlePress={handlePropertyPress}
                  loading={latestLoading}
                />
              </Conditional>
              <Recommendations />
            </>
          }
          ListEmptyComponent={
            loading && latestLoading ? (
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
