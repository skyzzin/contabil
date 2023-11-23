import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ButtonBack from './ButtonBack';
import StatusLine from '../StatusLine';

const Cadastrar = () => {
  const navigate = useNavigation();
  const setNavigate = (route) => {
    navigate.navigate(route);
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const user = { username, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setNavigate('login');
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };

  return (
    <View style={styles.display}>
      <Image style={styles.bg} source={require('../../assets/BG.png')} />
      <ButtonBack route={"index"} />

      <View>
        <StatusLine steps={2} />
        <Text style={styles.label}>Nome De Usuario</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
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
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.anc} onPress={() => { setNavigate('login') }}>
            Já tenho uma conta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableButton} onPress={handleRegister}>
          <Text style={styles.textTouchable}>Cadastrar</Text>
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
    width:300,
    padding:10,
    height:60,
    borderRadius:15,
    backgroundColor:'#fafafa',
  },
  label:{
    color:'#754afc',
    marginLeft:5,
    marginBottom:5,
    fontSize:16
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

export default Cadastrar;
