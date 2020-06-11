import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import images from '../Flow/images/index'
class MenuNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menu_active : false,
        }
    }

    _toggleMenu(){
        this.setState({
            menu_active : true ? false : true,
        })
        this._displayMenu();
    }

    _goToCart(){
        navigation.navigate('Shopping');
    }

    _goToProfile(){
        navigation.navigate('Profile');
    }

    _displayMenu(){
        return(
            <View style={{position:"absolute",top:10,left:10}}>
                <Text style={{backgroundColor:'green'}}>Menu Appears</Text>
            </View>
        )
    }

    render(){
        return(
            <View style={{backgroundColor:'#054A29',padding:5}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this._toggleMenu()}>
                         <Image source={require("../Flow/images/common/hamburger.png")} style={{height:40,width:40}}/>
                    </TouchableOpacity>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:70}}>
                        <TouchableOpacity onPress={()=>this._goToProfile()}>
                            <Image source={require("../Flow/images/common/profile.png")} style={{height:30,width:30}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this._goToCart()}>    
                            <Image source={require("../Flow/images/common/cart.png")} style={{height:30,width:30}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default function (props){
    const navigation = useNavigation();
    return <MenuNav {...props} navigation={navigation}/>
}