import React from 'react'
import { Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons'

export const Tab3Screen = () => {
  return (
    <>
        <HamburgerMenu/>
        <Text>Tab3 Screen</Text>
        <Icon name="rocket-outline" size={100} color="#900" />
    </>
  )
}
