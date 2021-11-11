import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import { getMarkets } from '../api/getMarkets';
import SmallLoading from '../components/SmallLoading';


export default function Home({ navigation }) {
    const [markets, setMarkets] = useState([]);

    useEffect(() => {
        if (typeof window != undefined) {
            async function getMarketsItems() {
                const getMarketsContent = await getMarkets();
                setMarkets(getMarketsContent);

            }

            getMarketsItems();

        }

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader navigation={navigation} headerText="Mercados doando perto de você" />
            <View style={styles.mainContent}>
                {
                    markets != undefined && markets.length > 0
                        ?
                        <FlatList
                            data={markets}
                            numColumns={2}
                            renderItem={({ item }) => {
                                return (
                                    <CustomCard picture={item.picture} name={item.name} navigation={navigation} marketObject={item} />
                                );
                            }}
                        />
                        :
                        <SmallLoading />
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    genericContainer: {
        flex: 1,
    },
    mainContent: {
        flex: 1,
        alignItems: 'center'
    },

});
