import React, { useState } from "react";
import { Image, Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import ButtonBack from "../../Login-Cadastrar/ButtonBack";
import BG from '../../../assets/BG.png';
import Add from '../../../assets/Vector.png';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const BalanceScreen = () => {
    const heightScreen = Dimensions.get('screen').height;

    const [saldo, setSaldo] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigation()

    const saveSaldo = async () => {
        try {
            await AsyncStorage.setItem('saldo', saldo.toString());
        } catch (error) {
            console.error('Erro ao salvar saldo: ', error);
        }
    };

    const handleAddDigit = (digit) => {
        setInputValue(prev => prev + digit);
        setSaldo(prev => prev * 10 + digit); // Adiciona o dígito no final do saldo
    };

    const handleAdd = () => {
        const valor = parseInt(inputValue, 10);
        if (!isNaN(valor)) {
            setSaldo(prev => prev + valor);
            setInputValue('');
        }
    };

    const handleDelete = () => {
        setInputValue(prev => prev.slice(0, -1));
        setSaldo(prev => Math.floor(prev / 10)); // Remove o último dígito do saldo
    };

    const handleSaveSaldo = async () => {
        try {
            await AsyncStorage.setItem('saldo', saldo.toFixed(2));
            console.log('Saldo salvo com sucesso:', saldo.toFixed(2));
            navigate.navigate('home')
            // Adicione aqui a navegação de volta para a tela anterior ou para outra tela desejada
        } catch (error) {
            console.error('Erro ao salvar saldo: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={BG} style={styles.backgroundImage}>
                <ButtonBack route="home" />

                <View style={styles.infosContainer}>
                    <Image style={styles.avatar} />
                    <Text style={styles.infoText}>Username</Text>
                    <Text style={styles.infoText}>Quando De Salvo Você Que Adicionar?</Text>
                    <Text style={styles.infoText}>R$ {saldo.toFixed(2)}</Text>
                </View>

                <View style={styles.view_keyboard}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                        <TouchableOpacity
                            key={number}
                            style={styles.button}
                            onPress={() => handleAddDigit(number)}
                        >
                            <Text style={styles.buttonText}>{number}</Text>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={styles.button} onPress={handleSaveSaldo}>
                        <Image source={Add} />
                    </TouchableOpacity>

                    <TouchableOpacity
                            key={0}
                            style={styles.button}
                            onPress={() => handleAddDigit(0)}
                        >
                            <Text style={styles.buttonText}>0</Text>
                        </TouchableOpacity>

                    

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleDelete}
                    >
                        <Text style={styles.buttonText}>Del</Text>
                    </TouchableOpacity>

                
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    infosContainer: {
        alignItems: 'center',
        marginTop: 200,
        paddingBottom: 100
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: "#222",
        borderRadius: 100 / 2,
        marginBottom: 10,
    },
    view_keyboard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 5,
        padding: 10,
    },
    button: {
        width: '30%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDF1F4',
        marginVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#764CFC',
        fontSize: 24,
    },
    infoText: {
        color: '#fafafa',
    },
});

export default BalanceScreen;
