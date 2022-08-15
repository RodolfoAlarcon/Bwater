import React, { useState } from "react";
import { View, SafeAreaView, Image, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Modal, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker'
import { StackNavigator } from "react-navigation";
import { Button, Input, CheckBox, Tab, TabView } from 'react-native-elements';
import DatePicker from 'react-native-date-picker'


export const Modalpedido = (props) => {

    const [status, setStatus] = useState('Garrafon 19L')
    const setStatusFilter = status => {
        setStatus(status)
    }
    const listTab = [
        {
            status: 'Garrafon 19L'
        },
        {
            status: 'Botella 1L'
        },
        {
            status: 'Garrafon 11L'
        },
        {
            status: 'Botella 5L'
        }
    ]
    const [modificarCliente, setModificarCliente] = useState(false)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    const [selectedValue, setSelectedValue] = useState("java");

    const [index, setIndex] = React.useState(0);

    return (
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
            <View style={styles.TituloModal}>
                <Text style={{ fontSize: 18, color: '#5e5873', fontWeight: '500' }}>
                    Registrar Pedido
                </Text>
            </View>
            <ScrollView style={{ padding: 15, }}>
                <Text style={styles.LabelText}>
                    Cliente
                </Text>
                <View
                    style={{ height: 50, width: '100%', borderWidth: 1, borderColor: '#d8d6de', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, }}
                >
                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <TouchableOpacity
                    style={styles.Modificar}
                    onPress={() => setModificarCliente(!modificarCliente)}
                >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>
                        Modificar Cliente
                    </Text>
                </TouchableOpacity>
                {
                    modificarCliente ? (
                        <View>
                            <Text style={styles.LabelText}>
                                Nombre
                            </Text>
                            <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='Primer Nombre'
                                keyboardType="text"
                            />
                            <Text style={styles.LabelText}>
                                Apellido
                            </Text>
                            <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='Primer Apellido'
                                keyboardType="text"
                            />
                            <Text style={[styles.LabelText, { textAlign: 'center' }]}>
                                Dirección
                            </Text>
                            <Text style={styles.LabelText}>
                                Código Postal
                            </Text>
                            <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='cp'
                                keyboardType="numeric"
                            />
                            <Text style={styles.LabelText}>
                                Estado
                            </Text>
                            <View style={{ width: '100%', backgroundColor: '#efefef', height: 50, borderColor: '#d8d6de', borderWidth: 1, borderRadius: 4, justifyContent: 'center', paddingLeft: 15 }}>
                                <Text style={{ fontSize: 17, color: '#5e5873' }}>
                                    Jalisco
                                </Text>
                            </View>
                            <Text style={[styles.LabelText, { marginTop: 20 }]}>
                                Municipio
                            </Text>
                            <View style={{ width: '100%', backgroundColor: '#efefef', height: 50, borderColor: '#d8d6de', borderWidth: 1, borderRadius: 4, justifyContent: 'center', paddingLeft: 15 }}>
                                <Text style={{ fontSize: 17, color: '#5e5873' }}>
                                    Monicipio
                                </Text>
                            </View>
                            <Text style={[styles.LabelText, { marginTop: 20 }]}>
                                Asentamiento
                            </Text>
                            <View
                                style={{ height: 50, width: '100%', borderWidth: 1, borderColor: '#d8d6de', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, }}
                            >
                                <Picker
                                    mode="dropdown"
                                    selectedValue={selectedValue}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                            </View>
                            <Text style={[styles.LabelText, { marginTop: 20 }]}>
                                Zona
                            </Text>
                            <View
                                style={{ height: 50, width: '100%', borderWidth: 1, borderColor: '#d8d6de', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, }}
                            >
                                <Picker
                                    mode="dropdown"
                                    selectedValue={selectedValue}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                            </View>
                            <Text style={[styles.LabelText, { marginTop: 20 }]}>
                                Color
                            </Text>
                            <View
                                style={{ height: 50, width: '100%', borderWidth: 1, borderColor: '#d8d6de', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, }}
                            >
                                <Picker
                                    mode="dropdown"
                                    selectedValue={selectedValue}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                            </View>
                            <Text style={[styles.LabelText, { marginTop: 20 }]}>
                                Coto
                            </Text>
                            <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='coto'
                                keyboardType="text"
                            />
                            <Text style={styles.LabelText}>
                                Casa
                            </Text>
                            <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='casa'
                                keyboardType="text"
                            />
                            <Text style={styles.LabelText}>
                                Calle
                            </Text>
                            <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='calle'
                                keyboardType="text"
                            />
                            <Text style={styles.LabelText}>
                                Avenida
                            </Text>
                            <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='avenida'
                                keyboardType="text"
                            />
                            <Text style={styles.LabelText}>
                                Referencia
                            </Text>
                            <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='Referencia'
                                keyboardType="text"
                            />
                            <Text style={styles.LabelText}>
                                Teléfono
                            </Text>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'15%',height: 50, borderWidth: 1, borderColor: '#d8d6de',borderRadius:4,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={styles.LabelText}>
                                        +52
                                    </Text>
                                </View>
                                <View style={{width:'85%'}}>
                                <Input
                                inputContainerStyle={styles.Inputs}
                                placeholder='(760) 123 00 00'
                                keyboardType="numeric"
                            />
                                </View>
                            </View>
                        </View>
                    ) : null
                }
                <Text style={styles.LabelText}>
                    Chofer
                </Text>
                <View
                    style={{ height: 50, width: '100%', borderWidth: 1, borderColor: '#d8d6de', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, }}
                >
                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <Text style={[styles.LabelText, { marginTop: 20 }]}>
                    Fecha
                </Text>
                <TouchableOpacity
                    onPress={() => setOpen(true)}
                    style={{ borderRadius: 4, borderWidth: 1, borderColor: '#d8d6de', height: 50, width: '100%', justifyContent: 'center', paddingLeft: 15 }}
                >
                    <Text style={styles.LabelText}>
                        {JSON.stringify(date)}
                    </Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    mode='date'
                    open={open}
                    date={date}
                    display="default"
                    format={"YYYY-MM-DD"}
                    displayFormat={"DD MMM YYYY"}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                <Text style={[styles.LabelText, { marginTop: 20 }]}>
                    Productos
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        listTab.map(e => (
                            <TouchableOpacity
                                style={[styles.Tab, status === e.status && styles.TabActive]}
                                onPress={() => setStatusFilter(e.status)}
                            >
                                <Text style={[styles.TextTab, status === e.status && styles.TextTabActive]}>
                                    {e.status}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                    {
                        status === 'Garrafon 19L' ?
                            <View>
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
                                            Obsequi
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
                            </View> :
                            <>
                            </>
                    }
                    {
                        status === 'Botella 1L' ?
                            <View>
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
                                            Obsequi
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
                            </View> :
                            <>
                            </>
                    }
                    {
                        status === 'Garrafon 11L' ?
                            <View>
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
                                            Obsequi
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
                            </View> :
                            <>
                            </>
                    }
                    {
                        status === 'Botella 5L' ?
                            <View>
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
                                            Obsequi
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
                            </View> :
                            <>
                            </>
                    }
                </View>
                <Text style={styles.LabelText}>
                    Método de pago
                </Text>
                <View
                    style={{ height: 50, width: '100%', borderWidth: 1, borderColor: '#d8d6de', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, }}
                >
                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <Text style={[styles.LabelText, { marginTop: 20 }]}>
                    Status de pago
                </Text>
                <View style={{ width: '100%', backgroundColor: '#efefef', height: 50, borderColor: '#d8d6de', borderWidth: 1, borderRadius: 4, justifyContent: 'center', paddingLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>
                        Pagado
                    </Text>
                </View>
                <Text style={[styles.LabelText, { marginTop: 20 }]}>
                    Status del Pedido
                </Text>
                <View style={{ width: '100%', backgroundColor: '#efefef', height: 50, borderColor: '#d8d6de', borderWidth: 1, borderRadius: 4, justifyContent: 'center', paddingLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>
                        Por Entregar
                    </Text>
                </View>
                <Text style={[styles.LabelText, { marginTop: 20 }]}>
                    Garrafones prestados(S/R)
                </Text>
                <Input
                    inputContainerStyle={styles.Inputs}
                    placeholder='Garrafones Prestado'
                    keyboardType="numeric"
                />
                <Text style={[styles.LabelText, { marginTop: -10 }]}>
                    Garrafones dañados
                </Text>
                <Input
                    inputContainerStyle={styles.Inputs}
                    placeholder='Garrafones dañados'
                    keyboardType="numeric"
                />
                <Text style={[styles.LabelText, { marginTop: -10 }]}>
                    Observación
                </Text>
                <Input
                    inputContainerStyle={styles.Inputs}
                    placeholder='Observación'
                    keyboardType="numeric"
                />
            </ScrollView>
            <View style={{ paddingVertical: 15, paddingHorizontal: 15, borderTopWidth: 1, borderColor: '#22292f0d', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ backgroundColor: '#001871', width: 130, height: 40, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 19, color: '#fff', fontWeight: '500' }}>
                        Regístrate
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )


}


const styles = StyleSheet.create({
    Inputs: {
        borderWidth: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: '#d8d6de',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        width: '106%',
        marginLeft: -10
    },
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
    Tab: {
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: '5%',
        marginVertical: 5
    },
    TabActive: {
        backgroundColor: '#001871'
    },
    TextTab: {
        color: '#5e5873',
        fontWeight: '500',
        fontSize: 16
    },
    TextTabActive: {
        color: '#fff'
    },
    LabelText: {
        color: '#5e5873'
    },
    Lista: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#22292f20',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginBottom: 20
    },
});