import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons';



export const Tab1Screen = () => {


  return (
    <View>
        <HamburgerMenu/>
        <Text>Tab1 Screenas</Text>
        <Icon name="rocket-outline" size={30} color="#900" />
    </View>
  );
};
