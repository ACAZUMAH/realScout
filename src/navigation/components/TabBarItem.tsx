import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Conditional from 'src/components/conditional/Conditional';

interface TabBarItemProps {
    onPress: () => void;
    label: string;
    focused: boolean;
    icon: string;
}

const TabBarItem: React.FC<TabBarItemProps> = ({ onPress, label, focused, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Conditional condition={focused}>
            <ImageBackground>
                
            </ImageBackground>
        </Conditional>
    </TouchableOpacity>
  )
}

export default TabBarItem