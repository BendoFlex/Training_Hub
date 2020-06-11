import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import MapScreen from './Components/MapScreen'
import MainFlow from '../MainFlow/MainFlow'

const CommunityStack = createStackNavigator();


class CommunityFlow extends React.Component {
    render(){
        return(
            <CommunityStack.Navigator
            headerMode='none'>
                <CommunityStack.Screen name='MapScreen' component={MapScreen}/>
                <CommunityStack.Screen name='Main' component={MainFlow}/>
            </CommunityStack.Navigator>
        )
    }
}

export default CommunityFlow;