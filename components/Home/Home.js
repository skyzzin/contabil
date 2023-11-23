import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Card from './Card'

import add from './assets/add.png';
import sacola from './assets/sacola.png';
import extrato from './assets/extrato.png';

const Home = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigation();
    const [saldo, setSaldo] = useState(0);

    const getUserName = async () => {
        try {
            const userData = await AsyncStorage.getItem('user');
            if (userData !== null) {
                const user = JSON.parse(userData);
                setUsername(user.username);
            }
        } catch (error) {
            console.error('Erro ao recuperar o nome de usuário: ', error);
        }
    };

    const getSaldo = async () => {
        try {
            const saldoValue = await AsyncStorage.getItem('saldo');
            if (saldoValue !== null) {
                setSaldo(parseFloat(saldoValue));
            }
        } catch (error) {
            console.error('Erro ao recuperar o saldo: ', error);
        }
    };

    const onScreenFocus = useCallback(() => {
        getUserName();
        getSaldo();
    }, []);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress',()=>{return true})
        const unsubscribe = navigate.addListener('focus', onScreenFocus);
        return unsubscribe;
    }, [onScreenFocus]);

    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={require('../../assets/BG.png')} />
            <View style={styles.user}>
                <Text style={styles.title}>Olá {username} Seja Bem Vindo</Text>
                <Image style={styles.avatar} />
            </View>

            <Text style={styles.text}>Saldo R$ {saldo.toFixed(2)}</Text>


            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
                <View style={styles.cardsView}>
                    <Card color={"red"} type={"visa"} />
                    <Card color={"blue"} type={"master_card"} />
                    <Card color={"blue"} type={"visa"} />
                    <Card color={"blue"} type={"master_card"} />
                </View>
            </ScrollView>

            <View style={styles.line} />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>{navigate.navigate("balance_screen")}}>
                    <Image source={add} style={styles.buttonImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={sacola} style={styles.buttonImage}  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={extrato} style={styles.buttonImage}  />
                </TouchableOpacity>
              
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position: 'absolute'
    },
    title: {
        textAlign: 'center',
        color: '#fafafa',
        fontSize: 16,
        marginLeft: 60,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
        marginLeft: 'auto',
        marginRight: 20,
    },
    user: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
    },
    cardsView: {
        width: '100%',
        backgroundColor: '#fafafa',
        height: 400,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    text:{
        color:'#fafafa',
        marginLeft:"auto",
        marginRight:"auto"
    },
    line: {
        height: 1,
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 0,
        backgroundColor: '#fafafa',
        height: 100,
    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: '#ECF0F3',
        borderRadius: 10,
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
    },
    scrollView: {
        marginTop: -10,
    },
    buttonImage:{
        width:'80%',
        height:'80%',
        marginLeft:'auto',
        marginRight:'auto',
    }
});

export default Home;
