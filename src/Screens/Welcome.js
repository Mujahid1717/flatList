import React from 'react';
import { Alert } from 'react-native';
import {Text, View, StyleSheet,TouchableOpacity,Button} from 'react-native';

const Welcome = () => {
    return(
        <View>
        <TouchableOpacity onPress={()=> 
        console.log('button pressed')}
        style = {styles.buttonContainer}
        >
        <Text style = {styles.buttonText2}>Custom Button</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> 
        console.log('button pressed')}
        style = {styles.buttonContainer2}
        >
        <Text style = {styles.buttonText}>Custom Button</Text>
        </TouchableOpacity>
        </View>    
        
    );

};
const styles = StyleSheet.create({
    buttonContainer:{
        height:30,
        marginHorizontal:40,
        marginVertical:25,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
           
    },
    buttonText:{
        textTransform:'uppercase',
        color:'#fff',
        fontSize:18
    } ,  
    buttonContainer2:{
        height:30,
        marginHorizontal:50,
        marginVertical:20,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
        
           
    },
    buttonText2:{
        textTransform:'uppercase',
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',

    }   
        
});
export default Welcome;