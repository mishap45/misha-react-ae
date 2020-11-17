import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import App from './App'
import { StatusBar } from 'expo-status-bar'

const App_Container = () => {
    return (
        <NavigationContainer>
            <App/>

            <StatusBar style={'dark'} />
        </NavigationContainer>
    )
};

export default App_Container