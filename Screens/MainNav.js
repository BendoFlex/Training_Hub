import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import MainFlow from './Flow/MainFlow/MainFlow'
import ConnexionFlow from './Flow/ConnexionFlow/ConnexionFlow'
import BeastScreen from './Flow/ConnexionFlow/Components/BeastScreen'


const MainStack = createStackNavigator();

class MainNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            connected : true,
        }
    }

    _getRoute(){
        if(this.state.connected === true){
            return <MainFlow/>;
        }
        else {
            return <ConnexionFlow/>
        }
    }

    render(){
        return(
           
            <NavigationContainer>
                <MainStack.Navigator
                headerMode='none'>
                    <MainStack.Screen name="Main" component={MainFlow}/>
                    <MainStack.Screen name="Connexion" component={ConnexionFlow}/>
                </MainStack.Navigator>
            </NavigationContainer>
            
        )
    }
}
//<MainStack.Screen name="Connexion" component={MainFlow}/>
//component en attribut de Component ça ne donne pas
export default MainNav;