import React, { useEffect } from 'react'
import { Pressable, Text, View, useWindowDimensions } from 'react-native'
import { globalStyles } from '../../theme/Theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import  { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native'
import  { type RootStackParams } from '../../routes/StackNavigator'

export const HomeScreen = () => {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)}>
            <Text> Menu</Text>
        </Pressable>
      )
    })
 
  }, [])
  
  return (
    <View style = { globalStyles.container }>
      <PrimaryButton 
         label={'Productos'} 
         onPress={()=> navigation.navigate('Products')}>
      </PrimaryButton>
  

      <PrimaryButton 
         label={'Settings'}
         onPress={()=> navigation.navigate('Settings')}>
      </PrimaryButton>

    </View>
  )
}
