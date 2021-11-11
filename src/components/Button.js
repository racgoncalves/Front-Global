import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SmallLoading from './SmallLoading';

export default function Button(props) {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => props.handleExecuteFunction()}>
                {
                    props.isLoginLoading
                        ?
                        <SmallLoading />
                        :
                        <Text style={styles.buttonText}>{props.buttonText}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        marginTop: 10,
        marginBottom: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: "#4EB791",
        height: 60,
        width: '70%',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 25
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