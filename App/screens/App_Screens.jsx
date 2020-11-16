import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import Map from '../components/Map/Map'
import Home from '../components/Home/Home'
import Service from '../components/Service/Service'

const Tab = createBottomTabNavigator();

const App_Screens = () => {
    return (
        <Tab.Navigator
            initialRouteName="Map"
            tabBarOptions={{
                activeTintColor: '#43A047',
                inactiveTintColor: '#8F8F8F',
                backgroundColor: '#000'
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home'
                    } else if (route.name === 'Map') {
                        iconName = focused
                            ? 'map'
                            : 'map'
                    } else if (route.name === 'Service') {
                        iconName = focused
                            ? 'car'
                            : 'car'
                    }

                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Профіль',
                    title: 'Home'
                }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarLabel: 'Мапа',
                    title: 'Map'
                }}
            />
            <Tab.Screen
                name="Service"
                component={Service}
                options={{
                    tabBarLabel: 'Послуги',
                    title: 'Service'
                }}
            />
        </Tab.Navigator>
    );
};

export default App_Screens