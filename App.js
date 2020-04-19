import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import homeScreen from './src/screens/HomeScreen';
// import mainScreen from './src/screens/MainScreen';

const Stack = createStackNavigator();


import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
  // <HomeScreen/>
  // <MainScreen/>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}/>
      </Stack.Navigator> 
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
