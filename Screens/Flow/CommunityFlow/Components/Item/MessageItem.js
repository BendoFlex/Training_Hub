import React from 'react'
import {View,Image,Text} from 'react-native'


function MessageItem ({message},{size=50}){
        return(
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <Filler size={size}/>
                    <Text>{message.pseudo}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Text>{message.message}</Text>
                    <Text>Il y a {message.time}</Text>
                </View>
            </TouchableOpacity>
        )
   
}

export default MessageItem
