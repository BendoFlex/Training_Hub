import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Size from '../Styles/Size'

import {useNavigation} from '@react-navigation/native'

 export default function MyButton ({props},{location}) {
    
    const navigation = useNavigation();
        return(
            <TouchableOpacity style={{...Size[props.size],backgroundColor:props.bgColor}} onPress={() => navigation.navigate(location)}>
                <Text style={{color:props.color}}>{props.text}</Text>
            </TouchableOpacity>
        )
        
}




