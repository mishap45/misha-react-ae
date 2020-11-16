import React from 'react'
import { View, StyleSheet, Image, Pressable, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/img/Logo_350.png')} />

            <Pressable  style={styles.btn} onPress={() => {alert('Ви натиснули на увійти')}}>
                <Text style={styles.btnText}>Увійти</Text>
            </Pressable>

            <StatusBar style={'light'} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43A047',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    img: {
        marginTop: 35
    },

    btn: {
        backgroundColor: '#FAFAFA',
        paddingVertical: 10,
        borderRadius: 15,
        marginBottom: 15,
        width: '80%'
    },

    btnText: {
        textAlign: 'center',
        color: '#43A047',
        fontSize: 18
    }
});

export default Home