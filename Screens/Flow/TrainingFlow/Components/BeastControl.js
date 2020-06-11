import React from 'react'
import {View,Image,TouchableOpacity,Text} from 'react-native'
import Filler from '../../../Element/Filler'

import MenuNav from '../../../Element/MenuNav'

class BeastControl extends React.Component {
    render(){
        const size=300;
        return(
            <View style={{backgroundColor:'#5BBA6F'}}>
                <TouchableOpacity style={{backgroundColor:'grey',height:30,justifyContent:'center',alignItems:'center'}} onPress={()=> {this.props.navigation.goBack()}} >
                        <Text>GoBack</Text>  
                    </TouchableOpacity> 
                <MenuNav/>
                <TouchableOpacity style={{height:200,justifyContent:'center',alignItems:'center',borderWidth:1.3,borderColor:'black'}}>
                    <Image source={require("../../images/menu/training.png")}/>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Entraînement</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:200,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require("../../images/training/eat.png")}/>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Nutrition</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:200,justifyContent:'center',alignItems:'center',borderWidth:1.3,borderColor:'black'}}>
                    <Image source={require("../../images/training/think.png")} style={{height:100,width:100}}/>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Developpement Personnel</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default BeastControl