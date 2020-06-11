import React from 'react'
import {View, Image, Text,TextInput} from 'react-native'



class ForgetInfo extends React.Component {
    render(){
        return(
            <View>
                <TouchableOpacity style={{backgroundColor:'grey',height:30,justifyContent:'center',alignItems:'center'}} onPress={()=> {this.props.navigation.goBack()}} >
                        <Text>GoBack</Text>  
                    </TouchableOpacity> 
                <Text>Information oubliée</Text>
                <TextInput placeholder="info oubliée"/>
            </View>
        )
    }
}


export default ForgetInfo;