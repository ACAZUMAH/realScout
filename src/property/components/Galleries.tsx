import React from "react";
import { FlatList, Image, Text } from "react-native";
import Conditional from "src/components/conditional/Conditional";
interface GalleriesProps {
  galleries: any[];
}

export const Galleries: React.FC<GalleriesProps> = ({ galleries }) => {
  return (
    <>
      <FlatList
        contentContainerStyle={{ paddingRight: 20 }}
        data={galleries.slice(0, 3)}
        renderItem={({ item }) => (
          <>
            <Image
              source={{ uri: item.image }}
              className="size-40 rounded-2xl"
            />
            <Conditional
              condition={galleries.indexOf(item) === 2 && galleries.length > 3}
            >
              <Text className="absolute text-white text-4xl font-rubik-bold top-14 left-14">
                {galleries.length > 3 ? `${galleries.length - 3}+` : ""}
              </Text>
            </Conditional>
          </>
        )}
        horizontal
        keyExtractor={(item) => item.$id}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="flex gap-4 mt-3"
      />
    </>
  );
};
