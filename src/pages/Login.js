import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Warning from '../components/Warning';
import { getLogin } from '../api/getLogin';
import Icon from 'react-native-vector-icons/Fontisto';
import Button from '../components/Button';
import CustomInput from '../components/CustomInput';


export default function Login({ route, navigation }) {
    const isMarket = route.params.type == 'market' ? true : false;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [warning, setWarning] = useState(undefined);
    const [isLoginLoading, setIsLoginLoading] = useState(false);

    Icon.loadFont();

    async function handleLogin() {

        if (email && password) {
            setIsLoginLoading(true);
            const loginContent = await getLogin(email, password, isMarket ? 'mercado' : 'usuario');
  
            if (loginContent != 404) {
                if (isMarket){
                    navigation.navigate('Products',{'marketObject':loginContent});
                } else {
                    navigation.navigate('Home');
                }
                
                setIsLoginLoading(false);

            } else {
                setWarning('Usuário inválido!');

            }


        } else {
            setWarning('Informe login e senha antes de continuar!');

        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topLogoContainer}>
                <Image source={require('../../public/images/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.bottomContainer}>
                <CustomInput placeholderText="E-mail" handleSetState={setEmail} iconType="email" isPassword={false} />
                <CustomInput placeholderText="Senha" handleSetState={setPassword} iconType="key" isPassword={true} />
                <View style={styles.warningContainer}>
                    {
                        warning != undefined
                            ?
                            <Warning warning={warning} setWarning={setWarning} />
                            :
                            null
                    }
                </View>
                <Button buttonText={"Login"} handleExecuteFunction={handleLogin} isLoading={isLoginLoading} />
                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccount}>Não tem conta?</Text>
                    <TouchableOpacity>
                        <Text style={styles.registerNow} onPress={() => navigation.navigate('ChooseAccountType')}>Cadastre-se agora!</Text>
                    </TouchableOpacity>
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
    topLogoContainer: {
        backgroundColor: "#F2FCFD",
        flex: 2.8,
        alignItems: "center",
    },
    logo: {
        flex: 1,
        width: 350,
        resizeMode: 'contain'
    },
    bottomContainer: {
        flex: 4,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center'
    },
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
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize: 20,
    },
    icon: {
        color: "#000",
        padding: 10,
    },
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
    noAccountContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    noAccount: {
        marginRight: 5,
        fontSize: 18
    },
    registerNow: {
        fontWeight: 'bold',
        color: "#4EB791",
        fontSize: 18
    },
});
