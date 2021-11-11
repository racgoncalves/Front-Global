import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../components/CustomHeader';

export default function ChooseLogin ({ navigation }) {
    Icon.loadFont();

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader navigation={navigation} headerText="Qual é o seu tipo de conta?" />
            <View style={styles.mainContent}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../public/images/logoSmall.png')} style={styles.logo} />
                </View>
                <TouchableOpacity style={[styles.optionContainer, styles.shadow]} onPress={() => navigation.navigate('Login', { 'type': 'market' })}>
                    <Text style={styles.optionText}>Eu sou um mercado</Text>
                    <Icon name="shopping-cart" size={30} style={styles.iconOption} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.optionContainer, styles.shadow]} onPress={() => navigation.navigate('Login', { 'type': 'user' })}>
                    <Text style={styles.optionText}>Eu sou uma pessoa</Text>
                    <Icon name="user" size={30} style={styles.iconOption} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    icon: {
        color: "#FFF",
        padding: 10,
        position: 'absolute',
        top: -25,
        right: 20
    },
    iconOption: {
        color: "#000",
        fontSize: 150
    },
    mainContent: {
        backgroundColor: "#F2FCFD",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logoContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    logo: {
        flex: 1,
        width: 120,
        resizeMode: 'contain'
    },
    optionContainer: {
        flex: 2,
        backgroundColor: "#fff",
        marginTop: 25,
        borderRadius: 10,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    optionText: {
        fontSize: 15,
        marginBottom: 20
    },
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
});
