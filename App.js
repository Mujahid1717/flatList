import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/Screens/HomeScreen';
import DetailScreen from "./src/Screens/DetailScreen";
import ListScreen from "./src/Screens/ListScreen";
import LogoScreen from "./src/Screens/logoScreen";
import GridView from "./src/Screens/GridView";
import Welcome from "./src/Screens/Welcome";
import Signup from "./src/Screens/Signup";
import Hooks from "./src/Screens/Hooks";
import ShowImages from "./src/Screens/ShowImages";
import Home from "./src/Screens/Home";

const Stack = createNativeStackNavigator();
const navigator = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name ='Home' component={Home} options = {{title:'Gallery'}}/>
    <Stack.Screen name ='Image' component={ShowImages} options = {{headerShown: false}} />
    <Stack.Screen name ='grid' component={GridView} />
    <Stack.Screen name ="List Screen" component={ListScreen} />
    <Stack.Screen name= 'Detail' component={DetailScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
  );
};
const style = StyleSheet.create({



});
export default navigator;