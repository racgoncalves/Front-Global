import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { getProducts } from '../api/getProducts';
import SmallLoading from '../components/SmallLoading';


export default function Market({ route, navigation }) {
    const marketObject = route.params.marketObject;
    const [products, setProducts] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
 
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        if (typeof window != undefined) {
            async function getProductsItems() {
                const getProductsContent = await getProducts(marketObject.id);

                if (getProductsContent.status == 404){
                    setProducts([]);
                } else{
                    setProducts(getProductsContent);
                }
                

            }

            getProductsItems();

        }

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader navigation={navigation} pageRedirect="Home" headerText="Doação Disponível" />
            <View style={styles.marketInformation}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: marketObject.picture }} style={styles.image} />
                </View>
                <View style={styles.marketText}>
                    <Text style={styles.marketName}>{marketObject.name}</Text>
                    <Text>{marketObject.address}, {marketObject.number} - {marketObject.zipcode}</Text>
                </View>
                <View style={styles.productsInformation}>
                    <View style={styles.productContainer}>
                        <Text style={styles.productText}>Produtos Disponíveis:</Text>
                    </View>
                    <View style={styles.productsList}>
                        {
                            products != undefined && products.length >= 0
                                ?
                                <FlatList
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={refreshing}
                                            onRefresh={onRefresh}
                                        />
                                    }
                                    style={styles.list}
                                    data={products}
                                    renderItem={({ item }) => {
                                        return (
                                            <View style={[styles.productRow, styles.shadow]}>
                                                {/* adicionar brand */}
                                                <Text>Nome: <Text style={styles.productName}>{item.name}</Text></Text>
                                                <Text>Local: <Text style={styles.productName}>{item.location}</Text></Text>
                                            </View>
                                        );
                                    }}
                                />
                                :
                                <SmallLoading />
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        width: '100%',
        height: 200,
    },
    marketInformation: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
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
    imageContainer: {
        width: '100%'
    },
    marketText: {
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    marketName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    productsInformation: {
        flex: 1,
        width: '100%',
        padding: 30,
    },
    productContainer: {
        width: '100%',
    },
    productText: {
        fontWeight: 'bold',
        fontSize: 25
    },
    productsList: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: '100%',
    },
    productRow: {
        width: '100%',
        height: 40,
        backgroundColor: '#9FD7DD',
        borderRadius: 3,
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    list: {
        width: '100%',
        height: '100%'
    },
    productName: {
        fontSize: 13,
        fontWeight: 'bold'
    }
});
