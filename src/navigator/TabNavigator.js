import React from 'react'
import Base from '../screen/BaseScreen'
import Character from '../screen/CharacterScreen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import {ApolloProvider} from '@apollo/client';

import apolloClient from './../api/apollo-client';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Base" component={Base} 
      options={{
        tabBarLabel: "Base",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="home" color="white" size={26} />
          ) : (
            <AntDesign name="home" color="white" size={22} />
          ),
      }}
      />
     
      <Tab.Screen name="Character" component={Character}
      options={{
        tabBarLabel: "Character",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="people" color="white" size={26} />
          ) : (
            <AntDesign name="people" color="white" size={22} />
          ),
      }}
      />
    </Tab.Navigator>
    
  );
};
export default TabNavigator;
