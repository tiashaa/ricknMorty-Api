import React from 'react'
import Welcome from '../screen/WelcomeScreen';
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Base" component={TabNavigator}/>
  
        </Stack.Navigator>
       
  
        
     
    );
  };

export default MainStackNavigator
