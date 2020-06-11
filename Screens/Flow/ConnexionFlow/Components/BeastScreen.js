import React from 'react'
import {View, Image, Text} from 'react-native'

class BeastScreen extends React.Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'green'}}>
                <TouchableOpacity style={{backgroundColor:'grey',height:30,justifyContent:'center',alignItems:'center'}} onPress={()=> {this.props.navigation.goBack()}} >
                        <Text>GoBack</Text>  
                    </TouchableOpacity> 
                <View>
                    <Image style={{width:200, height:200,backgroundColor:'grey'}}/>
                </View>
                <View>
                    <Text style={{fontSize:23,color:'black',fontWeight:'bold'}}>Go to Be(a)st Mode</Text>
                </View>
            </View>
        )
    }
}


export default BeastScreen;