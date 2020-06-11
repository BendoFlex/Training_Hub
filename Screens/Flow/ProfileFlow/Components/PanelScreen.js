import React from 'react'
import {View, Image, Text,StyleSheet,TouchableOpacity} from 'react-native'


class PanelScreen extends React.Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#5BBA6F'}}>
                <TouchableOpacity style={{backgroundColor:'grey',height:30,justifyContent:'center',alignItems:'center'}} onPress={()=> {this.props.navigation.goBack()}} >
                        <Text>GoBack</Text>  
                    </TouchableOpacity> 
                
                <View style={{flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:500,marginTop:30}}>
                    <View style={{padding:10,height:320,width:300,alignItems:'center'}}>
                        <Text style={{marginBottom:20}}>Joan Zafiarison</Text>
                        <Image source={require("../../images/menu/profile.png")} style={{width:100, height:100}}/>
                        <View style={{width:300,alignItems:'center'}}>
                            <View style={{flexDirection:'row',width:200,justifyContent:"space-between",alignItems:'center'}}>
                                <View style={{width:10,height:10,backgroundColor:'grey'}}></View>
                                <Text>Sport</Text>
                            </View>
                            <View style={{flexDirection:'row',width:200,justifyContent:"space-between",alignItems:'center'}}>
                                <View style={{width:10,height:10,backgroundColor:'grey'}}></View>
                                <Text>Trophées</Text>
                            </View>
                            <View style={{flexDirection:'row',width:200,justifyContent:"space-between",alignItems:'center'}}>
                                <View style={{width:10,height:10,backgroundColor:'grey'}}></View>
                                <Text>Abonnés</Text>
                            </View>
                            <View style={{flexDirection:'row',width:200,justifyContent:"space-between",alignItems:'center'}}>
                                <View style={{width:10,height:10,backgroundColor:'grey'}}></View>
                                <Text>Abonnement</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View style={{width:200,height:300,justifyContent:'space-between'}}>
                        <View>
                            <Text style={{backgroundColor:'#054A29',borderRadius:10,padding:5,color:'white',fontSize:17}}>Mes Objectifs</Text>
                        </View>

                        <View>
                            <Text style={{backgroundColor:'#054A29',borderRadius:5,color:'white',fontSize:17,padding:5}}>Mes Informations</Text>
                        </View>

                        <View>
                            <Text style={{backgroundColor:'#054A29',borderRadius:5,color:'white',fontSize:17,padding:5}}>Ma Progression</Text>
                        </View>
                        
                    </View>
                </View>

            
            </View>
        )
    }
}

export default PanelScreen;
