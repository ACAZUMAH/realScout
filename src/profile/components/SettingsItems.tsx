import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import Conditional from 'src/components/conditional/Conditional';
import icons from 'src/constants/icons';

interface SettingsItemsProps {
  icon: ImageSourcePropType;
  label: string;
  textStyle?: string;
  showArrow?: boolean;
  onPress?: () => void;
}

export const SettingsItems: React.FC<SettingsItemsProps> = ({ icon, label, showArrow = true, textStyle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between py-3'>
      <View className='flex flex-row items-center gap-3'>
        <Image source={icon} className='size-6' />
        <Text className={`text-md font-rubik-medium text-black-300 ${textStyle}`}>
          {label}
        </Text>
      </View>
      <Conditional condition={showArrow}>
        <Image source={icons.rightArrow} className='size-5'/>
      </Conditional>
    </TouchableOpacity>
  )
}
