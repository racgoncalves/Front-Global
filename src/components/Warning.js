import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Warning(props) {
    if ('setWarning' in props && 'warning' in props) {
        setTimeout(() => {
            props.setWarning(undefined);
            
        }, 5000);

    } 


    return(
        <View style={styles.warningContainer}>
            <Text style={styles.warningText}>{props.warning}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    warningContainer: {
        width: '100%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    warningText: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    },
});