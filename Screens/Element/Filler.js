import React from 'react'
import{Image,View} from 'react-native'

export default function Filler ({size}) {
    return(
        <View>
            <Image style={{ width:size, height:size, backgroundColor:'grey' }}/>
        </View>
    )
}