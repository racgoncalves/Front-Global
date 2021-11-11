import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';


export default function CustomInput(props) {

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.shadow} placeholder={props.placeholderText} style={[styles.input, styles.shadow]} onChangeText={(text) => props.handleSetState(text)} secureTextEntry={props.isPassword} />
            <Icon name={props.iconType} size={30} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 350,
        height: 55,
        borderRadius: 5,
        backgroundColor: '#F0F0F0',
        paddingLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize: 20,
        width: '80%',
    },
    icon: {
        color: "#000",
        padding: 10,
    },
    shadow: {
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
        // elevation: 3,
    },
});