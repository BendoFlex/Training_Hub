import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Menu from './Components/Menu'
import TrainingFlow from '../TrainingFlow/TrainingFlow'
import ProfileFlow from '../ProfileFlow/ProfileFlow'
import CommunityFlow from '../CommunityFlow/CommunityFlow'


const MainStack = createStackNavigator();

class MainFlow extends React.Component {
    render(){
        return(
                <MainStack.Navigator
                headerMode='none'>
                    <MainStack.Screen name='Menu' component={Menu}/>
                    <MainStack.Screen name='Training' component={TrainingFlow}/>
                    <MainStack.Screen name='Profile' component={ProfileFlow}/>
                    <MainStack.Screen name='Community' component={CommunityFlow}/>
                </MainStack.Navigator>
           
        )
    }
}

export default MainFlow;