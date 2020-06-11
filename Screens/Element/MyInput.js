import React from 'react'
import {View, Image, Text, TextInput} from 'react-native'

export default function ({placeholder}){
        return(
            <View> 
                <TextInput placeholder={placeholder}/>
                <Text></Text>
            </View>
        )
}

