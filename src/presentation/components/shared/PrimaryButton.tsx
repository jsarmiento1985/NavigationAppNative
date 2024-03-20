import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../../theme/Theme';

interface Props{
    label: string,
    onPress: () => void,
}

export const PrimaryButton = ({label, onPress}:Props ) => {

    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => onPress()}
            style={ globalStyles.primaryButton }>
            <Text style={ globalStyles.buttonText }>
               {label}
            </Text>
        </Pressable>

    )
}
