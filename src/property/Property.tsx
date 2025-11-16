import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Conditional from "src/components/conditional/Conditional";
import icons from "src/constants/icons";
import images from "src/constants/images";
import { useAppRequest } from "src/hooks/useAppRequest";
import { Facility } from "./components/facility";
import { Galleries } from "./components/Galleries";
import { useGetPropertyById } from "./hooks/useGetProperty";

export const Property = () => {
  const { params } = useRoute();

  const { data, loading } = useAppRequest({
    fn: useGetPropertyById,
    //@ts-ignore
    params: { id: params?.id! },
  });

  const windowHeight = Dimensions.get("window").height;

  return (
    <View>
      <Conditional condition={loading && !data}>
        <View className="h-screen w-full items-center justify-center">
          <ActivityIndicator size="large" className="text-primary-300" />
        </View>
      </Conditional>
      <Conditional condition={Boolean(data)}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pb-32 bg-white"
        >
          <View
            className="relative w-full"
            style={{ height: windowHeight / 2 }}
          >
            <Image
              source={{ uri: data?.image }}
              className="size-full"
              resizeMode="cover"
            />

            <Image
              source={images.whiteGradient}
              className="absolute top-0 w-full z-40"
            />

            <View
              className="z-50 absolute inset-x-7"
              style={{ top: Platform.OS === "ios" ? 50 : 20 }}
            >
              <View className="flex flex-row items-center justify-between w-full">
                <TouchableOpacity
                  className="flex flex-row rounded-full size-10 items-center 
                  justify-center bg-primary-200"
                >
                  <Image source={icons.backArrow} className="size-5" />
                </TouchableOpacity>

                <View className="flex flex-row items-center gap-4">
                  <Image source={icons.heart} className="size-7" />
                  <Image source={icons.send} className="size-7" />
                </View>
              </View>
            </View>
          </View>

          <View className="px-4 flex mt-6 gap-2">
            <Text className="text-3xl font-rubik-extraBold">{data?.name}</Text>

            <View className="flex flex-row gap-3">
              <View className="flex flex-row items-center bg-primary-100 px-4 py-2 rounded-full">
                <Text className="text-xl font-rubik-bold color-primary-300 ">
                  {data?.type}
                </Text>
              </View>

              <View className="flex flex-row gap-2 justify-center items-center">
                <Image source={icons.star} className="size-6" />
                <Text className="text-black-200 text-sm mt-1 font-rubik-medium">
                  {data?.rating} ({data?.reviews?.length} reviews)
                </Text>
              </View>
            </View>

            <View className="flex flex-row mt-4 gap-3">
              <View className="flex flex-row items-center mr-6 gap-2">
                <View className="flex flex-row items-center bg-primary-100 rounded-full p-4">
                  <Image source={icons.bed} className="size-5" />
                </View>
                <Text className="text-black-300 text-md font-rubik-semiBold">
                  {data?.bedrooms} Beds
                </Text>
              </View>
              <View className="flex flex-row items-center mr-6 gap-2">
                <View className="flex flex-row items-center bg-primary-100 rounded-full p-4">
                  <Image source={icons.bath} className="size-5" />
                </View>
                <Text className="text-black-300 text-md font-rubik-semiBold">
                  {data?.bathrooms} Baths
                </Text>
              </View>
              <View className="flex flex-row items-center mr-6 gap-2">
                <View className="flex flex-row items-center bg-primary-100 rounded-full p-4">
                  <Image source={icons.area} className="size-5" />
                </View>
                <Text className="text-black-300 text-md font-rubik-semiBold">
                  {data?.area} sqft
                </Text>
              </View>
            </View>

            <View className="w-full border-t border-primary-200 mt-5 pt-7">
              <Text className="text-black-300 text-2xl font-rubik-bold">
                Agent
              </Text>

              <View className="flex flex-row items-center justify-between mt-4">
                <View className="flex flex-row items-center">
                  <Image
                    source={{ uri: data?.agent.avatar }}
                    className="size-16 rounded-full"
                  />

                  <View className="flex flex-col items-start justify-start ml-4">
                    <Text className="text-black-300 text-2xl text-start font-rubik-bold mb-2">
                      {data?.agent.name}
                    </Text>
                    <Text className="text-black-200 text-sm text-start font-rubik-medium">
                      {data?.agent.email}
                    </Text>
                  </View>
                </View>

                <View className="flex flex-row items-center justify-center gap-4">
                  <Image source={icons.chat} className="size-8" />
                  <Image source={icons.phone} className="size-8" />
                </View>
              </View>

              <View className="mt-8">
                <Text className="text-black-300 text-2xl font-rubik-bold">
                  Overview
                </Text>
                <Text className="text-black-200 text-md font-rubik-medium mt-2">
                  {data?.description}
                </Text>
              </View>

              <Conditional condition={data?.amenities.length > 0}>
                <View className="mt-8">
                  <Text className="text-black-300 text-2xl font-rubik-bold">
                    Facilities
                  </Text>

                  <View className="flex flex-row flex-wrap items-start justify-start mt-5 gap-10">
                    {data?.amenities.map((facility: string, index: number) => (
                      <Facility facility={facility} key={index} />
                    ))}
                  </View>
                </View>
              </Conditional>

              <Conditional condition={data?.gallery.length > 0}>
                <View className="mt-8">
                  <Text className="text-black-300 text-2xl font-rubik-bold">
                    Gallery
                  </Text>

                  <Galleries galleries={data?.gallery} />
                </View>
              </Conditional>
            </View>
          </View>
        </ScrollView>
      </Conditional>
    </View>
  );
};
