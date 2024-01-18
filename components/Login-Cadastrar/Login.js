import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import ButtonBack from './ButtonBack';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StatusLine from '../StatusLine';

const Login = () => {
  const navigate = useNavigation();
  const setNavigate = (route) => {
    navigate.navigate(route);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
     
      const userData = await AsyncStorage.getItem('user');
      if (userData !== null) {
        const user = JSON.parse(userData);
        if (user.email === email && user.password === password) {
          console.log('Login bem-sucedido!');
          setNavigate("home")
  
        } else {
          console.log('Credenciais inválidas. Tente novamente.');
        }
      } else {
        console.log('Nenhum usuário encontrado. Por favor, cadastre-se primeiro.');
      }
    } catch (error) {
      console.error('Erro ao realizar o login: ', error);
    }
  };

  return (
    <View style={styles.display}>
      
      <Image style={styles.iconlogin} source={require('../assets/iconlogin')} />     
      <Image style={styles.bg} source={require('../../assets/BG.png')} />
      <ButtonBack route={"index"} />
      <StatusLine steps={2} />
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          placeholder=''
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.anc} onPress={() => { setNavigate('cadastrar') }}>
            Não tenho Conta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableButton} onPress={handleLogin}>
          <Text style={styles.textTouchable}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  bg: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  input:{
    width:350,
    padding:10,
    height:60,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  label:{
    color:'white',
    marginLeft:5,
    marginBottom:5,
    fontSize:16,
    paddingTop: 20,
  },
  textTouchable:{
    color:"#fafafa",
    fontSize:20,
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:12
  },
  touchableButton:{
    width:300,
    height:60,
    borderRadius:15,
    backgroundColor:'#754afc',
    marginTop:40
  },
  anc:{
    color:'#754afc',
    marginTop:20,
    marginLeft:10
  }
});

export default Login;
