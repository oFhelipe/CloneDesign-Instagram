import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from '../screens/Inicio'

function HomeRoutes() {

    const { Navigator, Screen } = createStackNavigator();

  return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Inicio" component={Inicio} />
        </Navigator>
  );
}

export default HomeRoutes;