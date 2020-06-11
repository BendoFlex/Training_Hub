import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import BeastScreen from './Components/BeastScreen'
import GreetingScreen from './Components/GreetingScreen'
import SubscribeScreen from './Components/SubscribeScreen'
import ConnectScreen from './Components/ConnnectScreen'
import ForgetInfo from './Components/ForgetInfo'
import PersonnalityScreen from './Components/PersonnalityScreen'
//import MainFlow from '../MainFlow/MainFlow'

const ConnexionStack = createStackNavigator();

class ConnexionFlow extends React.Component {
    render(){
        return(
            <ConnexionStack.Navigator
            headerMode='none'>
                <ConnexionStack.Screen name='Beast' component={BeastScreen}/>
                <ConnexionStack.Screen name='Greeting' component={GreetingScreen}/>
                <ConnexionStack.Screen name='Subscribe' component={SubscribeScreen}/>
                <ConnexionStack.Screen name='Connect' component={ConnectScreen}/>
                <ConnexionStack.Screen name='ForgetInfo' component={ForgetInfo}/>
                <ConnexionStack.Screen name='Personnality' component={PersonnalityScreen}/>
                
            </ConnexionStack.Navigator>
        )
    }
}
//<ConnexionFlowStack.Screen name={'Main'} component={MainFlow}/>
export default ConnexionFlow;