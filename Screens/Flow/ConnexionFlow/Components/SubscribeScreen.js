import React from 'react'
import {View, Image, Text} from 'react-native'

class SubscribeScreen extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={{backgroundColor:'grey',height:30,justifyContent:'center',alignItems:'center'}} onPress={()=> {this.props.navigation.goBack()}} >
                        <Text>GoBack</Text>  
                    </TouchableOpacity> 
                <TextInput placeholder="Nom"/>
                <TextInput placeholder="Prénom"/>
                <TextInput placeholder="Date de Naissance"/>
                <View style={{height:20, backgroundColor:'black'}}></View>
                <TextInput placeholder="email"/>
                <TextInput placeholder="Mot de Passe"/>
                <TextInput placeholder="Confirmation"/>
                <Text>En Cochant cette case vous acceptez notre politique de confidentialité</Text>
                <TouchableOpacity style={{height:30,backgroundColor:'green'}}>
                    <Text style={{color:'black'}}>Je deviens une Be(a)st!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SubscribeScreen;