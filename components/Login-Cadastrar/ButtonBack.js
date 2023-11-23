import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ButtonBack = ({route}) => {
  const navigate = useNavigation();
  const setNavigate = (route) => {
    navigate.navigate(route);
  };
  return (
    <View style={styles.display}>
      <TouchableOpacity onPress={() => setNavigate(route) }>
        <Image
          style={{ width: 40, height: 40 }}
          source={require('./assets/arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    display:{
        position:'absolute',
        left:10,
        top:10
    }
})

export default ButtonBack;
