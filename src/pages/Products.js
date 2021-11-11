import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import { getMarkets } from '../api/getMarkets';
import SmallLoading from '../components/SmallLoading';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProducts } from '../api/getProducts';


export default function Products({ route, navigation }) {
    const marketObject = route.params.marketObject;

    Icon.loadFont();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (typeof window != undefined) {
            async function getProductsItems() {
                const getProductsContent = await getProducts(marketObject.id);
                setProducts(getProductsContent);

            }

            getProductsItems();

        }

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader navigation={navigation} headerText="Meus Produtos" />
            <View style={styles.mainContent}>
                <View style={styles.buttonContent}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>+ Adicionar Novo Produto</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.productsContent}>
                    {
                        products != undefined && products.length >= 0
                            ?
                            <FlatList
                                data={products}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={[styles.productsCard, styles.shadow]}>
                                            <View style={styles.productInfo}>
                                                <View>
                                                    <Text>Nome do produto: <Text style={styles.textBold}>{item.name}</Text></Text>
                                                </View>
                                                <View>
                                                    <Text>Marca: <Text style={styles.textBold}>{item.brand}</Text></Text>
                                                </View>
                                                <View>
                                                    <Text>Localização: <Text style={styles.textBold}>{item.location}</Text></Text>
                                                </View>
                                            </View>
                                            <View style={styles.iconsContainer}>
                                                <TouchableOpacity>
                                                    <Icon name="pencil" size={30} style={styles.icon} />
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Icon name="trash" size={30} style={styles.icon} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    );
                                }}
                            />
                            :
                            <SmallLoading />
                    }
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    mainContent: {
        flex: 1,
        alignItems: 'center'
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
    buttonContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    button: {
        width: '80%',
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
        fontSize: 20
    },
    productsContent: {
        flex: 4,
        width: '100%',
        alignItems: 'center'
    },
    productsCard: {
        width: '85%',
        height: 150,
        backgroundColor: '#9FD7DD',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 3,
        padding: 15,
        flexDirection: 'row'
    },
    productInfo: {
        width: '70%',
        height: '100%',
        justifyContent: 'space-between',
    },
    iconsContainer: {
        width: '30%',
        flexDirection: 'row',
    },
    icon: {
        margin: 10,
        fontSize: 25,
    },
    textBold: {
        fontWeight: 'bold',
        color: '#fff'
    }
});
