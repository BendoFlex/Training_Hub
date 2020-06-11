import React from 'react'
import {View, Image, Text,TouchableOpacity} from 'react-native'

import MapView , {Marker} from 'react-native-maps'
import MenuNav from '../../../Element/MenuNav'

class MapScreen extends React.Component {
    render(){
        return(
          
            
            <MapView style={{flex:1,marginTop:30}}>
                <View>
                  <TouchableOpacity style={{backgroundColor:'grey',height:30,justifyContent:'center',alignItems:'center'}} onPress={()=> {this.props.navigation.goBack()}} >
                        <Text>GoBack</Text>  
                    </TouchableOpacity>  
                </View>
                <Marker/>
            </MapView>
            
            
        )
    }
}

export default MapScreen;