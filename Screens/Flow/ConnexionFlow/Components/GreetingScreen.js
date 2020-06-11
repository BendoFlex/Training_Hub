import React from 'react'
import {View, Image, Text} from 'react-native'



class GreetingScreen extends React.Component {
    render(){
        return(
        <View style={{justifyContent:"space-around"}}>
            <TouchableOpacity style={{backgroundColor:'grey',height:30,justifyContent:'center',alignItems:'center'}} onPress={()=> {this.props.navigation.goBack()}} >
                        <Text>GoBack</Text>  
                    </TouchableOpacity> 
            <View>
                <Text style={{fontSize:23}}>Be(a)st</Text>
            </View>
            <Text>Deviens ta Be(a)st version </Text>

            <Text>Je suis déjà une Be(a)st</Text>
            <TouchableOpacity style={{justifyContent:'center',alignitems:'center',backgroundColor:'grey'}}>
                <Text>Se Connecter</Text>
            </TouchableOpacity>

            <View style={{display:'flex',justifyContent:'space-between'}}>
                <View style={{height:1,backgroundColor:'grey'}}></View>
                <Text>Ou</Text>
                <View style={{height:1,backgroundColor:'grey'}}></View>
            </View>

            <TouchableOpacity style={{justifyContent:'center',alignitems:'center',backgroundColor:'grey'}} >
                <Text>S'inscrire</Text>
            </TouchableOpacity>


        </View>
        )
    }
}

export default GreetingScreen