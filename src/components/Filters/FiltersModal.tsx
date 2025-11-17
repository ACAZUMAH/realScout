import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
    Image,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import icons from "src/constants/icons";
import images from "src/constants/images";
interface FiltersModal {
  visible: boolean;
  onClose: () => void;
}

export const FiltersModal: React.FC<FiltersModal> = ({ visible, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        className="flex-1 bg-black/50 justify-end"
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View className="bg-white rounded-t-3xl px-3 py-5 h-[85%] -bottom-32">
            <View className="flex flex-row justify-between items-center mb-6">
              <TouchableOpacity
                className="flex flex-row items-center justify-center rounded-full p-2
                bg-primary-200"
                onPress={onClose}
              >
                <Image source={icons.backArrow} className="size-6" />
              </TouchableOpacity>

              <Text className="text-black-300 text-md font-rubik-medium">
                Filters
              </Text>

              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="mb-6 px-3">
                <Text className="text-lg font-rubik-bold text-black-300 mb-2">
                  Price Range
                </Text>

                <>
                  <Image
                    source={images.barChart}
                    resizeMode="contain"
                    className="w-full h-full"
                  />
                  <View className="relative">
                    <Slider minimumValue={0} maximumValue={1000}/>
                  </View>
                </>
              </View>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
