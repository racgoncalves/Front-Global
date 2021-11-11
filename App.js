import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../vytal/src/pages/Login';
import ChooseAccountType from '../vytal/src/pages/ChooseAccountType';
import Home from './src/pages/Home';
import Registration from './src/pages/Registration';
import Market from './src/pages/Market';
import Products from './src/pages/Products';
import ChooseLogin from './src/pages/ChooseLogin';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="ChooseLogin" component={ChooseLogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChooseAccountType" component={ChooseAccountType} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
