import React from 'react'
import {View, Image, Text} from 'react-native'

class Groupe extends React.Component{
    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <ScrollView>
                    <Text>Achievements</Text>
                    <Text>Publication</Text>
                </ScrollView>
                <View>
                    <Text>Membres</Text>
                </View>
            </View>
        )
    }
}

export default Groupe