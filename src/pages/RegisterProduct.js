import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView ,SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import SmallLoading from '../components/SmallLoading';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../components/CustomInput';
import { postProduct } from '../api/postProduct';
import { putProduct } from '../api/putProduct';


export default function RegisterProduct({ route, navigation }) {
    const marketObject = route.params.marketObject;
    const isEdit = route.params.isEdit;
    const productObject = route.params.productObject;

    Icon.loadFont();

    const [productName, setProductName] = useState();
    const [productBrand, setProductBrand] = useState();
    const [productLocation, setProductLocation] = useState();
    const [isProductSubmit, setProductSubmit] = useState(false);

    useEffect(() => {
        if (typeof window != undefined) {
            if (isEdit){
                setProductName(productObject.name);
                setProductBrand(productObject.brand);
                setProductLocation(productObject.location);
            }
        }

    }, []);

    async function handleSubmit() {
        if (productName && productBrand && productLocation){

            setProductSubmit(true);

            const productObject = {
                "mercadoId": marketObject.id,
                "name": productName,
                "brand": productBrand,
                "location": productLocation,
                "donating":true
            }
            const postProductContent = await postProduct(productObject);

            navigation.navigate('Products', { 'marketObject': marketObject })

            setProductSubmit(false);
        }
    }

    async function handlePutProduct() {

        const productEditObject = {
            "id": productObject.id,
            "mercadoId": marketObject.id,
            "name": productName,
            "brand": productBrand,
            "location": productLocation,
            "donating":true
        }

        const putProductContent = await putProduct(productEditObject);

        navigation.navigate('Products', { 'marketObject': marketObject })
    }

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader navigation={navigation} 
                headerText="Registrar Produto" 
                pageRedirect="Products" 
                redirectObject={marketObject}
            />
            <View style={styles.mainContent}>
               <CustomInput 
                    placeholderText="Nome do produto" 
                    handleSetState={setProductName}
                    isPassword={false} 
                    inputValue={productName}
                />
                <CustomInput 
                    placeholderText="Nome da marca" 
                    handleSetState={setProductBrand}
                    isPassword={false} 
                    inputValue={productBrand}
                />
                <CustomInput 
                    placeholderText="Localização" 
                    handleSetState={setProductLocation}
                    isPassword={false} 
                    inputValue={productLocation}
                />
     
            </View>

            <View style={styles.buttonsContainer}>
                {
                    isProductSubmit
                    ?
                    <SmallLoading />
                    :
                    <TouchableOpacity style={styles.button} onPress={() => isEdit ? handlePutProduct() : handleSubmit()}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                }
                
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white'
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
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100
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
});
