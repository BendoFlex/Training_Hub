import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

import Filler from '../../../Element/Filler'

class MessageList extends React.Component {
    
    render(){
        const size =50;
        return(
            <View>
                {messageData.map(message =>
                    {
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View>
                            <Filler size={size}/>
                            <Text>{message.pseudo}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Text>{message.message}</Text>
                            <Text>Il y a {message.time}</Text>
                        </View>
                    </TouchableOpacity>
                    }
                )
            }       
            </View>
        )
        
    }
}

const messageData = [
    {
        id:1,
        pseudo:'bakugan',
        message:'saluuuut!',
        time: '1 min',
    },
    {
        id:2,
        pseudo:'Soul Reaper',
        message:'Bendo Ma Coroned',
        time: '30 min',
    },
    {
        id:3,
        pseudo:'PatrickDu77',
        message:'Super cet appli',
        time: '1 h',
    }
]

export default MessageList