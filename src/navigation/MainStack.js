import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pedido } from '../pantallas/Pedido'
import { Home } from '../pantallas/Home'
import { Login } from '../pantallas/Login'


const Stack = createNativeStackNavigator();



export const MainStack = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name='Login'
                    component={Login}
                />

                <Stack.Screen
                    name='Home'
                    component={Home}
                />

                <Stack.Screen
                    name='Pedido'
                    component={Pedido}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )

}