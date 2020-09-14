import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import HomeRoutes from './HomeRoutes';


const TabBottom = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator 
                tabBarOptions={{
                    showLabel:false,
                    activeTintColor:"#000",
                    inactiveTintColor:"#000",
                }}>
                <Tab.Screen 
                        name='HomeRoutes' 
                        component={HomeRoutes} 
                        options={{
                            tabBarIcon: ({color, size, focused}) => {
                                return(
                                    focused 
                                        ? <MaterialCommunityIcons size={32} color={color} name="home-variant"/>
                                        : <MaterialCommunityIcons size={32} color={color} name="home-variant-outline"/>
                                );
                            }
                        }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBottom
