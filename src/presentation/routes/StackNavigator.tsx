import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';



export type RootStackParams = {

  Home: undefined,
  Product: { id: number, name: string },
  Products: undefined,
  Settings: undefined,

}

const Stack = createStackNavigator<RootStackParams>();



export const StackNavigator = () => {
  const navigator = useNavigation();

  useEffect(() => {

    navigator.setOptions({
      headerShown: false, //false: esconde el header
    })
  }, [])



  return (
    <Stack.Navigator screenOptions={{
      headerShown: true, //false: esconde el header
      headerStyle: {
        elevation: 0, //eliminar linea en ANDROID del header
        shadowColor: 'transparent' //eliminar linea en IOS del header
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}