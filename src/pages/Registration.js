import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import { postMarket } from '../api/postMarket';
import { postUser } from '../api/postUser';


export default function Registration({ route, navigation }) {
    const isMarket = route.params.type == 'market' ? true : false;
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [zipcode, setZipcode] = useState();
    const [address, setAddress] = useState();
    const [number, setNumber] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [profilePicture, setProfilePicture] = useState();
    const [isRegistrationLoading, setIsRegistrationLoading] = useState(false);
    const [warning, setWarning] = useState(undefined);

    async function handleSubmit() {
        let submitObject = {
            "name": name,
            "email": email,
            "password": password,
            "address": address,
            "number": number,
            "city": city,
            "state": state,
            "zipcode": zipcode,
        }

        if (isMarket) {
            if (name && email && password && passwordConfirmation && zipcode && address && number && city && state && profilePicture) {
                setIsRegistrationLoading(true);

                submitObject['donating'] = true;
                submitObject['picture'] = profilePicture;

                const postMarketContent = await postMarket(submitObject);

                if (postMarketContent != null) {
                    navigation.navigate('Home');
                    setIsRegistrationLoading(false);

                } else {
                    setWarning('Já existe um usuário cadastrado com esse e-mail!');
                    setIsRegistrationLoading(false);

                }

            } else {
                setWarning('Preencha todas as informações antes de continuar!');

            }

        } else {
            if (name && email && password && passwordConfirmation && zipcode && address && number && city && state) {
                setIsRegistrationLoading(true);

                const postUserContent = await postUser(submitObject);

                if (postUserContent != null) {
                    navigation.navigate('Home');
                    setIsRegistrationLoading(false);

                } else {
                    setWarning('Já existe um usuário cadastrado com esse e-mail!');
                    setIsRegistrationLoading(false);

                }

            } else {
                setWarning('Preencha todas as informações antes de continuar!');

            }

        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader navigation={navigation} pageRedirect="ChooseAccountType" headerText="Registro de Usuário" />
            <ScrollView>
                <View style={styles.mainContainer}>
                    <CustomInput placeholderText={`Nome do ${isMarket ? `mercado` : `usuário`}`} handleSetState={setName} iconType={isMarket ? "shopping-store" : "person"} isPassword={false} />
                    <CustomInput placeholderText="E-mail" handleSetState={setEmail} iconType="email" isPassword={false} />
                    <CustomInput placeholderText="Senha" handleSetState={setPassword} iconType="key" isPassword={true} />
                    <CustomInput placeholderText="Confirmação da Senha" handleSetState={setPasswordConfirmation} iconType="key" isPassword={true} />
                    <CustomInput placeholderText="CEP" handleSetState={setZipcode} iconType="map-marker-alt" isPassword={false} />
                    <CustomInput placeholderText="Endereço" handleSetState={setAddress} iconType="home" isPassword={false} />
                    <CustomInput placeholderText="Número" handleSetState={setNumber} iconType="home" isPassword={false} />
                    <CustomInput placeholderText="Cidade" handleSetState={setCity} iconType="home" isPassword={false} />
                    <CustomInput placeholderText="Estado" handleSetState={setState} iconType="home" isPassword={false} />
                    {
                        isMarket
                            ?
                            <CustomInput placeholderText="URL da Foto de Perfil" handleSetState={setProfilePicture} iconType="picture" isPassword={false} />
                            :
                            null
                    }
                    <View style={styles.buttonContainer}>
                        <Button buttonText={"Registrar"} handleExecuteFunction={handleSubmit} isLoading={isRegistrationLoading} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    mainContainer: {
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%'
    }
});
