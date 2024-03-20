
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/Theme';
import { Text, View, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator

    drawerContent={(props) => <CustomDrawerContent {...props}/>}
      screenOptions = {{
      
        headerShown: false, //quita del toolbar la hambuerguesa y el tituo, trabaja con el del stack
        drawerType: (dimensions.width >= 768) ? 'permanent': 'slide' ,// slide= empuja el menu drawer, la validacion de dimensions es para cuando el tel sea mas grande poner el drawer hasta la mitad siempre
        drawerActiveBackgroundColor: globalColors.primary,  // coloca color en el boton del drawer
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}
      >
         <Drawer.Screen name="StackNavigator" component={StackNavigator} />
         <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>

  );
}


// retorna un nuevo JSX
const CustomDrawerContent = (props: DrawerContentComponentProps) =>{

  return(
    <DrawerContentScrollView>

      <View
        style = {{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,

        }}
      />
      <DrawerItemList {...props}/>
  
    </DrawerContentScrollView>
  )
}