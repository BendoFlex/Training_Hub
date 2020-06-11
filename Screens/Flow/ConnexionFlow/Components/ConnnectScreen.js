import React from 'react'
import {View, Image, Text,TextInput} from 'react-native'

class ConnectScreen extends React.Component {
    render(){
        return(
            <View>
                <View>
                    <Text>Be(a)st</Text>
                </View>

                <View>
                    <View>
                        <Text>E-mail</Text><Textinput placeholder="e mail ou pseudo"/>
                    </View>
                    <View>
                        <Text>Mot de Passe</Text><Textinput placeholder="e mail ou pseudo"/>
                    </View>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>Mot de passe oublié</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Nom d'utilisateur oublié</Text>
                    </TouchableOpacity>></View>  
                </View>
        )
    }
}

export default ConnectScreen