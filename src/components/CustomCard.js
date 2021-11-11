import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CustomCard({picture, name, navigation, marketObject}) {

    return (
        <TouchableOpacity style={[styles.card, styles.shadow]} onPress={() => navigation.navigate('Market', { 'marketObject': marketObject })}>
            <View>
                <Image source={{uri: picture}} style={styles.image} />
            </View>
            <View style={styles.marketInfo}>
                <Text style={styles.marketName}>{name}</Text>
                {/* <Text>A 5kms de distância</Text> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    card: {
        height: 200,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: 150,
        height: 130,
    },
    marketInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    marketName: {
        fontWeight: 'bold',
        fontSize: 20
    }
});