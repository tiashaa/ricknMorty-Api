import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Base from '../screen/BaseScreen';
import Character from '../screen/CharacterScreen';
import Episodes from '../screen/EpisodesScreen'
import Location from '../screen/LocationScreen'
import TabNavigator from './TabNavigator';

const AppDrawer = createDrawerNavigator();

function AppDrawerNav() {
    return (
        <AppDrawer.Navigator initialRouteName="Home">
          <AppDrawer.Screen name="Home" component={TabNavigator} />
          <AppDrawer.Screen name="character" component={Character} />
          <AppDrawer.Screen name="episodes" component={Episodes} />
          <AppDrawer.Screen name="Location" component={Location} />
        </AppDrawer.Navigator>
      );
}

export default AppDrawerNav
