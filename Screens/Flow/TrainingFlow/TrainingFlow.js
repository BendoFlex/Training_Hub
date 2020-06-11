import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import BeastControl from './Components/BeastControl'
import MainFlow from '../MainFlow/MainFlow'

const TrainingStack = createStackNavigator();

class TrainingFlow extends React.Component {
    render(){
        return(
            <TrainingStack.Navigator
                headerMode='none'>
                <TrainingStack.Screen name='BeastTools' component={BeastControl}/>
                <TrainingStack.Screen name='Main' component={MainFlow}/>
            </TrainingStack.Navigator>
        )
    }
}

export default TrainingFlow;