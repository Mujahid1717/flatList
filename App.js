import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/Screens/HomeScreen';
import DetailScreen from "./src/Screens/DetailScreen";
import ListScreen from "./src/Screens/ListScreen";
import LogoScreen from "./src/Screens/logoScreen";

const Stack = createNativeStackNavigator();
const navigator = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name ='Home' component={LogoScreen} />
      <Stack.Screen name ="List Screen" component={ListScreen} />
     <Stack.Screen name= 'Detail' component={DetailScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
  );
};
const style = StyleSheet.create({



});
export default navigator;