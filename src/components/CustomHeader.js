import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';


export default function CustomHeader(props) {

    return (
        <View style={styles.header}>
            {
                'pageRedirect' in props
                    ?
                    <TouchableOpacity>
                        <Icon name="arrow-left" size={30} style={styles.icon} onPress={() => props.navigation.navigate(props.pageRedirect)} />
                    </TouchableOpacity>
                    :
                    null
            }
            <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 55,
        backgroundColor: '#9FD7DD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 18,
        // marginRight: 75
    },
    icon: {
        color: "#FFF",
        padding: 10,
        position: 'absolute',
        top: -25,
        right: 20
    },
});