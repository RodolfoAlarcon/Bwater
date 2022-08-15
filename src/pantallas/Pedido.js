import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export const Pedido = () => {

    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor: '#f8f8f8', flex: 1 }}>

                <View style={styles.Body}>

                    <View style={styles.NombreNumero}>
                        <View>
                            <Text style={styles.Nombre}>
                                Rodolfo Alarcon
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.NumeroPedido}>
                                N° Pedido: #5135
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.Direccion}>
                        Direccion: Lorem ipsum dolor sit amet consectetur.
                    </Text>

                    <View style={styles.Pedidos}>
                        <Text style={{
                            marginRight: 10,
                            color: '#000',
                            fontSize: 16
                        }}>
                            Pedido:
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={styles.Bmodificar}
                            >
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontSize: 16
                                    }}
                                >
                                    Modificar
                                </Text>
                            </View>
                            <View
                                style={styles.Bdevoluciones}
                            >
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 16
                                    }}
                                >
                                    Devolucion
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#9494943a', width: '100%' }}>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Refil
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row' }}
                            >
                                <View
                                    style={{ width: '25%' }}
                                >
                                    <Button
                                        title={'+'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ width: '46%', marginHorizontal: '2%', backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ fontSize: 18, color: '#000' }}>
                                        0
                                    </Text>
                                </View>
                                <View
                                    style={{ width: '25%', justifyContent: 'center' }}
                                >
                                    <Button
                                        title={'-'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Canje
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row' }}
                            >
                                <View
                                    style={{ width: '25%' }}
                                >
                                    <Button
                                        title={'+'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ width: '46%', marginHorizontal: '2%', backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ fontSize: 18, color: '#000' }}>
                                        0
                                    </Text>
                                </View>
                                <View
                                    style={{ width: '25%', justifyContent: 'center' }}
                                >
                                    <Button
                                        title={'-'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Envase Nuevo
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row' }}
                            >
                                <View
                                    style={{ width: '25%' }}
                                >
                                    <Button
                                        title={'+'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ width: '46%', marginHorizontal: '2%', backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ fontSize: 18, color: '#000' }}>
                                        0
                                    </Text>
                                </View>
                                <View
                                    style={{ width: '25%', justifyContent: 'center' }}
                                >
                                    <Button
                                        title={'-'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Envase Prestado
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row' }}
                            >
                                <View
                                    style={{ width: '25%' }}
                                >
                                    <Button
                                        title={'+'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ width: '46%', marginHorizontal: '2%', backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ fontSize: 18, color: '#000' }}>
                                        0
                                    </Text>
                                </View>
                                <View
                                    style={{ width: '25%', justifyContent: 'center' }}
                                >
                                    <Button
                                        title={'-'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Obsequi solo liquido
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row' }}
                            >
                                <View
                                    style={{ width: '25%' }}
                                >
                                    <Button
                                        title={'+'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ width: '46%', marginHorizontal: '2%', backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ fontSize: 18, color: '#000' }}>
                                        0
                                    </Text>
                                </View>
                                <View
                                    style={{ width: '25%', justifyContent: 'center' }}
                                >
                                    <Button
                                        title={'-'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Garantia
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row' }}
                            >
                                <View
                                    style={{ width: '25%' }}
                                >
                                    <Button
                                        title={'+'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ width: '46%', marginHorizontal: '2%', backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ fontSize: 18, color: '#000' }}>
                                        0
                                    </Text>
                                </View>
                                <View
                                    style={{ width: '25%', justifyContent: 'center' }}
                                >
                                    <Button
                                        title={'-'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Obsequi todo
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row' }}
                            >
                                <View
                                    style={{ width: '25%' }}
                                >
                                    <Button
                                        title={'+'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ width: '46%', marginHorizontal: '2%', backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ fontSize: 18, color: '#000' }}>
                                        0
                                    </Text>
                                </View>
                                <View
                                    style={{ width: '25%', justifyContent: 'center' }}
                                >
                                    <Button
                                        title={'-'}
                                        buttonStyle={{
                                            backgroundColor: '#001871'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Adeudo Anterior
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#d76364'
                                    }}
                                >
                                    -$24
                                </Text>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Envases prestado
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#001871'
                                    }}
                                >
                                    -$24
                                </Text>
                            </View>
                        </View>
                        <View style={styles.Lista}>
                            <View
                                style={{ width: '50%', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#6e6b7b'
                                    }}
                                >
                                    Metodo de pago
                                </Text>
                            </View>
                            <View
                                style={{ width: '50%', flexDirection: 'row' }}
                            >
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '90%', marginHorizontal: '5%', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderWidth: 1, padding: 5, borderColor: '#22292f20' }}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: '#6e6b7b'
                                        }}
                                    >
                                        efectivo
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{alignItems:'flex-end'}}
                    >
                        <Button
                            buttonStyle={styles.BotonFormulario}
                            title={'Entregado'}
                        />
                    </View>

                    <View
                        style={styles.Totalpago}
                    >
                        <View style={{backgroundColor:'#dfdbfd',padding:5,borderTopLeftRadius: 20,borderTopRightRadius: 20,borderBottomLeftRadius: 20,borderBottomRightRadius: 20,}}>
                            <Text style={{color:'#001871',fontSize:16,fontWeight:'500'}}>
                                Total a pagar
                            </Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Text style={{fontSize:25,color:'#001871'}}>
                                $ 9,800
                            </Text>
                        </View>
                    </View>

                </View>

            </SafeAreaView>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    Body: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 30,
        padding: 15
    },
    NombreNumero: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    Nombre: {
        fontSize: 18,
        color: '#5e5873'
    },
    NumeroPedido: {
        fontSize: 18,
        color: '#001871',
        fontWeight: '500'
    },
    Direccion: {
        fontSize: 18,
        color: '#5e5873'
    },
    Bdevoluciones: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 5,
        borderColor: '#001871',
        borderWidth: 1,
        padding: 10
    },
    Bmodificar: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
        backgroundColor: '#001871',
        padding: 10,
    },
    Pedidos: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    Lista: {
        borderBottomColor: '#22292f20',
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: 10
    },
    BotonFormulario: {
        backgroundColor: '#001871',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        width: 120,
        marginVertical: 15
    },
    Totalpago:{
        backgroundColor:'#eeecfe',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        padding:15,
        justifyContent:'space-between',
        flexDirection:'row'
    }
});