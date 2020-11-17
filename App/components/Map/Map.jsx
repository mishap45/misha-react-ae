import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons'

const Map = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle}
                     provider={PROVIDER_GOOGLE}
                     showsUserLocation
                     initialRegion={{
                         latitude: 50.448944,
                         longitude: 30.529912,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}
            />

            <View style={styles.search}><FontAwesome5 name="search-location" size={25} color="black" /></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    search: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#F9F9F9',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#F9F9F9',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

export default Map