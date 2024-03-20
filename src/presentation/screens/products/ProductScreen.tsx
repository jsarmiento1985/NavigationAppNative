import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/Theme';

export const ProductScreen = () => {

  //cualquiera de las dos formas extrae los param enviados desde otra pantalla que lo llame
  // const { id, name } = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })

  }, [])


  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>

      <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
        {params.id} - {params.name}
      </Text>
    </View>
  )
}
