import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SmallLoading() {

    return(
        <View>
            <Image source={require('../../public/gifs/loading.gif')} style={styles.smallLoading} />
        </View>
    )
}

const styles = StyleSheet.create({
    smallLoading: {
        flex: 1,
        width: 40,
        height: 10,
        resizeMode: 'contain'
    }
});