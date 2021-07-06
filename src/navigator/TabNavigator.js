import React from 'react'
import Base from '../screen/BaseScreen'
import Character from '../screen/CharacterScreen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import Episodes from '../screen/EpisodesScreen';
import Location from '../screen/LocationScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Rick & Morty" component={Base} 
      options={{
        tabBarLabel: "Home",
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
    

    <Tab.Screen name="Episodes" component={Episodes}
      options={{
        tabBarLabel: "Episodes",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="tv" color="white" size={26} />
          ) : (
            <AntDesign name="tv" color="white" size={22} />
          ),
      }}
      />

      <Tab.Screen name="Location" component={Location}
      options={{
        tabBarLabel: "Location",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="hill" color="white" size={26} />
          ) : (
            <AntDesign name="hill" color="white" size={22} />
          ),
      }}
      />

      </Tab.Navigator>
    
  );
};
export default TabNavigator;
