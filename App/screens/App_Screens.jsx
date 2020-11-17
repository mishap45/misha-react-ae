import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Image } from 'react-native'

import Map from '../components/Map/Map'
import Home from '../components/Home/Home'
import Service from '../components/Service/Service'
import Contract from '../components/Contract/Contract'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ServicesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: { backgroundColor: 'white' },
            }}
            headerMode="screen"
        >
            <Stack.Screen
                name="Service"
                component={Service}
                options={{
                    title: 'Послуги'
                }}
            />

            <Stack.Screen
                name="Contract"
                component={Contract}
                options={{
                    title: ''
                }}
            />
        </Stack.Navigator>
    );
};

const App_Screens = () => {
    return (
        <Tab.Navigator
            initialRouteName="Map"
            tabBarOptions={{
                activeTintColor: '#43A047',
                inactiveTintColor: '#8F8F8F'
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? require('../../assets/icons/homeSelected.png')
                            : require('../../assets/icons/home.png')
                    } else if (route.name === 'Map') {
                        iconName = focused
                            ? require('../../assets/icons/mapSelected.png')
                            : require('../../assets/icons/map.png')
                    } else if (route.name === 'Service') {
                        iconName = focused
                            ? require('../../assets/icons/serviceSelected.png')
                            : require('../../assets/icons/service.png')
                    }

                    return <Image style={{ width: 24, height: 24 }} source={iconName} />;
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
                component={ServicesStack}
                options={{
                    tabBarLabel: 'Послуги',
                    title: 'Service'
                }}
            />

        </Tab.Navigator>
    );
};

export default App_Screens