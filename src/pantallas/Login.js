import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { Button, Input, CheckBox, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export const Login = ({navigation}) => {
    const [check1, setCheck1] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: '#f8f8f8', flex:1 }}>

            <View style={styles.VistaLogos}>
                <Image
                    source={require('../img/logo.png')}
                    style={{ width: 170, height: 235 }}
                />
                <Image
                    source={require('../img/logo-letras.png')}
                    style={{ width: 300, height: 95 }}
                />
            </View>

            <View style={styles.VistaFormulario}>
                <Input
                    inputContainerStyle={styles.Inputs}
                    placeholder='ale.campero@bwater.mx'
                />
                <Input
                    inputContainerStyle={styles.Inputs}
                    placeholder='********'
                    rightIcon={
                        <Icon name="eye-slash" size={25} color="#d8d6de" />
                    }
                />
                <CheckBox
                    uncheckedColor='#d8d6de'
                    containerStyle={styles.Check}
                    title="Recuerdame"
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                />
                <Button
                    title={'Ingresar'}
                    containerStyle={{
                        width: '100%',
                        marginVertical: 10,
                    }}
                    buttonStyle={styles.BotonFormulario}
                    onPress={
                        () => {
                            navigation.navigate('Home')
                        }
                    }
                />
            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    VistaLogos: {
        marginVertical: 30,
        alignItems: 'center'
    },
    VistaFormulario: {
        width: '90%',
        marginHorizontal: '5%'
    },
    Inputs: {
        borderWidth: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: '#d8d6de',
        backgroundColor: 'white',
        paddingHorizontal: 15
    },
    Check:{
        borderColor:'transparent',
        backgroundColor:'transparent',
        padding:0
    },
    BotonFormulario:{
        backgroundColor:'#001871',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    }
});