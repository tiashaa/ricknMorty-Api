import React from 'react';
import Welcome from '../screen/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Characters from '../screen/CharacterScreen';

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={Characters} />
      <Stack.Screen name='Base' component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
