
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import StatusLine from './StatusLine';
import { useNavigation } from '@react-navigation/native';


const Index = () => {
  const navigate = useNavigation();
  const setNavigate = (route)=>{
    return navigate.navigate(String(route))
  }
  return (
    <View style={styles.display}>
      <Image style={styles.bg} source={require('../assets/BG.png')} />
      <Image style={styles.loginBG} source={require('../assets/LoginBG.png')} />

      <StatusLine steps={1} />

      <View style={styles.textView}>
        <Text style={styles.text}>Gerenciar Seu Dinheiro</Text>
        <Text style={styles.text}>Está Prestes a Ficar</Text>
        <Text style={styles.text}>Muito Melhor.</Text>
      </View>
      <View style={styles.touchableDisplay}>
        <TouchableOpacity onPress={()=>{setNavigate('login')}} style={styles.touchableButton}><Text style={styles.textTouchable}>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setNavigate('cadastrar')}} style={styles.touchableButton} ><Text style={styles.textTouchable} >Cadastro</Text></TouchableOpacity>
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
  loginBG: {
    width: 300,
    height: 250
  },
  textView: {
    
    alignItems: 'center'
  },
  text: {
    color: '#fafafa',
    fontSize: 20,
    textAlign: 'center'
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
    backgroundColor:'#754afc'
  },
  touchableDisplay:{
    display:'flex',
    flexDirection:'column',
    gap:10,
    marginTop:40
  }
});

export default Index;
