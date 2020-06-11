import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import PanelScreen from './Components/PanelScreen'
import MainFlow from '../MainFlow/MainFlow'

const ProfileStack = createStackNavigator();

class ProfileFlow extends React.Component {
    render(){
        return(
            <ProfileStack.Navigator
            headerMode='none'>
                <ProfileStack.Screen name='Panel' component={PanelScreen}/>
                <ProfileStack.Screen name='Main' component={MainFlow}/>
            </ProfileStack.Navigator>
        )
    }
}

export default ProfileFlow;