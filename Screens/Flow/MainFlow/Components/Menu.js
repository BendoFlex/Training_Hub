import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import MenuNav from '../../../Element/MenuNav'
import Filler from '../../../Element/Filler'
import images from '../../images'

class Menu extends React.Component{

_goTo(location){
    this.props.navigation.navigate(location);
}
    
    render(){
        const size = 130;
        const tabSize= 60

        return(
            <View style={{marginTop:40}}>
                <MenuNav/>
                <View style={{backgroundColor:'black',height:200,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View >
                        <Text style={{fontSize:30,letterSpacing:3,color:'white',fontWeight:'bold',margin:20}}>Be(a)st</Text>
                        <View>
                            <Text style={{fontSize:16,fontWeight:'bold',color:'orange',margin:20}}>Deviens une Be(a)st</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={{flexDirection:'row',borderWidth:1,borderColor:'black',justifyContent:'space-between',backgroundColor:'#5BBA6F',height:300}}>
                    
                    <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}} onPress={()=>this._goTo("Training")}>
                        <TouchableOpacity style={{height:155,width:180,justifyContent:'center',alignItems:'center',borderColor:'black',borderRightWidth:0.5,borderBottomWidth:0.5}}>
                            <Image source={require("../../images/menu/profile.png")} style={{height:100,width:100}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:150,width:180,justifyContent:'center',alignItems:'center',borderColor:'black',marginBottom:0}}>
                            <Image source={require("../../images/menu/nutrition.png")} style={{height:100,width:100}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:142,width:180,justifyContent:'center',alignItems:'center',borderColor:'black',borderRightWidth:0.5}}>
                            <Image source={require("../../images/menu/shop.png")} style={{height:100,width:100}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:143,width:192,justifyContent:'center',alignItems:'center',borderColor:'black',borderTopWidth:0.5}}>
                            <Image source={require("../../images/menu/performance.png")} style={{height:180,width:130}}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>

                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:400,borderColor:'black',borderWidth:1,paddingHorizontal:10}}>
                        <TouchableOpacity  style={{flexDirection:'row',alignItems:'center',width:80,height:80}}onPress={()=>this._goTo("Community")}>
                            <Image source={require("../../images/training/think.png")} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{flexDirection:'row',alignItems:'center',width:80,height:80}}onPress={()=>this._goTo("Training")}>
                            <Image source={require("../../images/menu/training.png")} style={{width:50,height:50}}/>
                        </TouchableOpacity >
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',width:80,height:80}} onPress={()=>this._goTo("Community")}>
                            <Image source={require("../../images/menu/nutrition.png")} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',width:80,height:80}}onPress={()=>this._goTo("Profile")}>
                        <Image source={require("../../images/menu/team.png")} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        )
    }
}

export default Menu