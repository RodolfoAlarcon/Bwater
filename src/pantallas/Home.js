import React, { useState } from "react";
import { View, SafeAreaView, Image, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Modal, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker'
import { StackNavigator } from "react-navigation";
import { Button, Input, CheckBox, } from 'react-native-elements';
import { Modalpedido } from "../componente/Modalpedido";
import { Modalcliente } from "../componente/Modalcliente";
import DatePicker from 'react-native-datepicker'
import { NavigationContainer } from '@react-navigation/native';




export const Home = ({navigation}) => {
    const [pedido, setPedido] = React.useState(false);
    const [cliente, setCliente] = React.useState(false);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'A',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'B',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'C',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e2957',
            title: 'D',
        },
        {
            id: '58694a0f-3da1-4wef-bd96-145571e2957',
            title: 'E',
        },
        {
            id: '12344a0f-3da1-471f-bd96-145571e2957',
            title: 'F',
        },
    ];

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };


    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <TouchableOpacity style={[styles.CajaLetras, { backgroundColor: generateColor() }]}>
                <View style={styles.Badge}>
                    <Text style={{ color: '#fff' }}>
                        9
                    </Text>
                </View>
                <Text style={{ color: '#fff', fontSize: 30, fontWeight: '500', }}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )

    }


    return (

        <SafeAreaView style={{ backgroundColor: '#f8f8f8', flex: 1 }}>


            <ScrollView>
                {/* imagen head */}
                <View style={styles.HeadImg}>

                    <Image
                        source={require('../img/email.png')}
                        style={{ width: 200, height: 100 }}
                    />

                </View>

                {/* Header */}
                <View style={styles.Head}>

                    <View style={styles.HijoHead}>
                        <View style={styles.NumeroHijo}>
                            <Text style={{ color: '#0833a2', fontSize: 16, fontWeight: '500' }}>
                                15
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#5e5873', fontSize: 16, fontWeight: '500' }}>
                                Carga Inicial
                            </Text>
                        </View>
                    </View>

                    <View style={styles.HijoHead}>
                        <View style={styles.NumeroHijo}>
                            <Text style={{ color: '#0833a2', fontSize: 16, fontWeight: '500' }}>
                                15
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#5e5873', fontSize: 16, fontWeight: '500' }}>
                                Garrafones
                            </Text>
                        </View>
                    </View>

                    <View style={styles.HijoHead}>
                        <View style={styles.NumeroHijo}>
                            <Text style={{ color: '#0833a2', fontSize: 16, fontWeight: '500' }}>
                                15
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#5e5873', fontSize: 16, fontWeight: '500' }}>
                                Carga Final
                            </Text>
                        </View>
                    </View>

                    <View style={styles.HijoHead}>
                        <View style={styles.NumeroHijo}>
                            <Text style={{ color: '#0833a2', fontSize: 16, fontWeight: '500' }}>
                                15
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#5e5873', fontSize: 16, fontWeight: '500' }}>
                                Pedidos
                            </Text>
                        </View>
                    </View>


                    {/* Pedido y cliente */}
                    <TouchableOpacity
                        style={{ width: '50%', borderTopWidth: 1, borderRightWidth: 1, borderColor: '#ebe9f1' }}
                        onPress={() => setPedido(!pedido)}
                    >
                        <Text style={{ textAlign: 'center', color: '#5e5873', fontSize: 16, marginVertical: 10, fontWeight: '500' }}>
                            Pedido
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{ width: '50%', borderTopWidth: 1, borderColor: '#ebe9f1' }}
                        onPress={() => setCliente(!cliente)}
                    >
                        <Text style={{ textAlign: 'center', color: '#5e5873', fontSize: 16, marginVertical: 10, fontWeight: '500' }}>
                            Cliente
                        </Text>
                    </TouchableOpacity>



                </View>

                {/* flast list de las letras */}
                <View style={{ width: '100%' }}>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        data={DATA}
                        numColumns={3}
                        renderItem={renderItem}
                        style={{
                            width: '100%',
                            paddingHorizontal: '5%',
                            marginVertical: 10
                        }}
                    />
                </View>

                {/* disel */}
                <View style={{ width: '90%', marginHorizontal: '5%', marginBottom: 20 }}>
                    <Text style={{ color: '#000' }}>
                        DISEL
                    </Text>
                </View>

                <View style={styles.BodyDiselMeta}>

                    <View style={styles.CajaDiselMeta}>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            Fecha
                        </Text>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            12, Apr, 21
                        </Text>
                    </View>

                    <View style={styles.CajaDiselMeta}>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            Catidad
                        </Text>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            52
                        </Text>
                    </View>

                    <View style={styles.CajaDiselMeta}>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            Kilometraje
                        </Text>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            50
                        </Text>
                    </View>

                </View>

                {/* meta */}
                <View style={{ width: '90%', marginHorizontal: '5%', marginVertical: 20 }}>
                    <Text style={{ color: '#000' }}>
                        META
                    </Text>
                </View>

                <View style={styles.BodyDiselMeta}>

                    <View style={styles.CajaDiselMeta}>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            Fecha
                        </Text>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            12, Apr, 21
                        </Text>
                    </View>

                    <View style={styles.CajaDiselMeta}>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            Catidad
                        </Text>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            52
                        </Text>
                    </View>

                    <View style={styles.CajaDiselMeta}>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            Dinero
                        </Text>
                        <Text style={{ color: '#6e6b7b', textAlign: 'center', fontSize: 16 }}>
                            50
                        </Text>
                    </View>

                </View>


                {/* Footer */}
                <TouchableOpacity style={{ width: '90%', marginHorizontal: '5%', marginVertical: 20 }}
                    onPress={
                        () => {
                            navigation.navigate('Pedido')
                        }
                    }
                >
                    <Text style={{ color: '#000' }}>
                        MOSQUEDA CORDOVA © 2021
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            {/* modal pedido*/}
            {pedido ? (
                <View style={styles.Modal}>
                    <View style={styles.VistaModal}>
                        <TouchableOpacity
                            style={styles.CerrarModal}
                            onPress={() => setPedido(!pedido)}
                        >
                            <Text style={{ color: '#000', fontSize: 17, fontWeight: '500' }}>
                                x
                            </Text>
                        </TouchableOpacity>
                        <Modalpedido />
                    </View>
                </View>
            ) : null}
            {/* modal cliente*/}
            {cliente ? (
                <View style={styles.Modal}>
                    <View style={styles.VistaModal}>
                        <TouchableOpacity
                            style={styles.CerrarModal}
                            onPress={() => setCliente(!cliente)}
                        >
                            <Text style={{ color: '#000', fontSize: 17, fontWeight: '500' }}>
                                x
                            </Text>
                        </TouchableOpacity>
                        <Modalcliente/>
                    </View>
                </View>
            ) : null}

        </SafeAreaView>

    )

}


const styles = StyleSheet.create({
    HeadImg: {
        width: '90%',
        paddingTop: 10,
        marginHorizontal: '5%',
        alignItems: 'center',
        backgroundColor: '#7367f01a',
        marginTop: 20,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    Head: {
        backgroundColor: '#fff',
        width: '90%',
        marginHorizontal: '5%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    HijoHead: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    NumeroHijo: {
        backgroundColor: '#eeedfd',
        padding: 10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginRight: 10
    },
    BodyDiselMeta: {
        width: '90%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    CajaDiselMeta: {
        backgroundColor: '#fff',
        width: '30%',
        height: 100,
        justifyContent: 'center',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    CajaLetras: {
        width: '30%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    Badge: {
        backgroundColor: '#001871',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 8,
        position: 'absolute',
        top: -10,
        right: 0
    },
    CerrarModal: {
        backgroundColor: '#fff',
        color: '#000',
        position: 'absolute',
        top: -10,
        right: -10,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: "center",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        zIndex: 9
    },
    TituloModal: {
        backgroundColor: '#f8f8f8',
        paddingVertical: 15,
        paddingLeft: 15,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    Modificar: {
        backgroundColor: '#001871',
        width: 200,
        paddingVertical: 10,
        alignItems: 'center',
        marginVertical: 15,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    Modal: {
        backgroundColor: '#00000061',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',

    },
    VistaModal: {
        width: '90%',
        height: '95%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    CerrarModal: {
        backgroundColor: '#fff',
        color: '#000',
        position: 'absolute',
        top: -10,
        right: -10,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: "center",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        zIndex: 9
    },
});