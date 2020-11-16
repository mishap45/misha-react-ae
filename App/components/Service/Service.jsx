import React from 'react'
import { Text, View, StyleSheet, Pressable, ImageBackground, ScrollView, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

const image = {
    uri: 'https://thumbs.dreamstime.com/z/concept-eletric-car-icon-background-electric-flat-symbol-electricity-sign-blue-colored-92696662.jpg'
};

const Service = () => {
    return (
        <View>
            <View style={styles.header}><Text style={styles.headerText}>Послуги</Text></View>
            <ScrollView style={styles.main}>
                <View><Text style={styles.availableText}>Доступні послуги</Text></View>

                <View>
                    <View style={styles.first}>
                        <ImageBackground source={image} style={styles.image}>
                            <Pressable style={styles.availableBtn}>
                                <Text style={styles.availableBtnText}>Available</Text>
                            </Pressable>

                            <View><Text style={styles.auto}>AutoEnterprise Car Sharing</Text></View>

                            <View><Text style={styles.autoUkr}>Прокат комфортного авто</Text></View>
                        </ImageBackground>
                    </View>

                    <View style={styles.second}>
                        <Ionicons name="ios-copy" size={14} color="#4A4A4A"/>
                        <Text style={styles.secondText}>Читати договір</Text>
                    </View>
                </View>
            </ScrollView>

            <StatusBar style={'dark'}/>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        paddingLeft: 8,
        paddingRight: 8,
        height: Dimensions.get("window").height
    },

    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#D7D7D7'
    },

    headerText: {
        textAlign: 'center',
        paddingTop: 25,
        paddingBottom: 15,
        fontSize: 18,
        fontWeight: '500'
    },

    availableText: {
        paddingVertical: 15,
        paddingLeft: 15,
        color: '#ABABAB',
        textTransform: 'uppercase'
    },

    availableBtn: {
        backgroundColor: '#43A047',
        width: '40%',
        marginLeft: 15,
        marginTop: 15,
        borderRadius: 10
    },

    availableBtnText: {
        textAlign: 'center',
        paddingVertical: 10,
        color: '#fff'
    },

    auto: {
        color: '#fff',
        paddingLeft: 15,
        fontSize: 20,
        marginTop: '15%'
    },

    autoUkr: {
        color: '#fff',
        paddingLeft: 15,
        marginTop: '10%',
        marginBottom: '5%',
        fontSize: 16
    },

    second: {
        backgroundColor: '#D8D8D8',
        paddingLeft: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        paddingTop: 18,
        paddingBottom: 8,
        marginTop: -10,
        alignItems: 'center'
    },

    secondText: {
        paddingLeft: 5,
        fontSize: 14,
        color: '#4A4A4A'
    },

    first: {
        backgroundColor: 'red',
        borderRadius: 10,
        zIndex: 2000,
        overflow: 'hidden'
    },

    image: {
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius: 10,
    }
});

export default Service