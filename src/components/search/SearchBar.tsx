import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import icons from "src/constants/icons";
import { useDebouncedCallback } from 'use-debounce';

export const SearchBar = () => {
  const [searchText, setSearchText] = React.useState("");

const debouncedSearch = useDebouncedCallback((text: string) => {
    setSearchText(text);
  }, 1000)

  return (
    <View
      className="flex flex-row items-center justify-between w-full px-5 rounded-lg bg-accent-100
    border border-primary-100 mt-6 py-3"
    >
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-6 mr-2" />
        <TextInput
          value={searchText}
          onChangeText={debouncedSearch}
          placeholder="Search for properties..."
          placeholderTextColor="#191D31"
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className="size-6" />
      </TouchableOpacity>
    </View>
  );
};
