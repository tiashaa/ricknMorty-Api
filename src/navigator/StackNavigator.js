import React from 'react';
import Welcome from '../screen/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Characters from '../screen/CharacterScreen';
import AppDrawer from './AppDrawer';
import Base from '../screen/BaseScreen';
import AppDrawerNav from './AppDrawer';

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Rick & Morty' component={TabNavigator} />
     
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
