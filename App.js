import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Splash from './components/Splash';
import Index from './components/Index';
import Login from './components/Login-Cadastrar/Login'
import Cadastrar from './components/Login-Cadastrar/Cadastrar';
import Home from './components/Home/Home';
import BalanceScreen from './components/Home/BalanceScreen/BalanceScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen name="index" component={Index} options={{headerShown:false}} />
        <Stack.Screen name="splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="cadastrar" component={Cadastrar} options={{headerShown:false}} />
        <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="balance_screen" component={BalanceScreen} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;