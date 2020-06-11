import React from 'react'
import {View, Image, Text} from 'react-native'

class PersonnalityScreen extends React.Component {
    render(){
        return(
            <View>
                <Text>Ma Question Personnalisée</Text>
                <View>
                    <TouchableOpacity>
                        <Image style={{width:10,height:10,backgroundColor:'black'}}/>
                    </TouchableOpacity>
                    <Text>Ma Reponse A</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image style={{width:10,height:10,backgroundColor:'black'}}/>
                    </TouchableOpacity>
                    <Text>Ma Reponse B</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image style={{width:10,height:10,backgroundColor:'black'}}/>
                    </TouchableOpacity>
                    <Text>
                        Ma Reponse C
                    </Text>
                </View>
                
            </View>
        )
    }
}

export default PersonnalityScreen