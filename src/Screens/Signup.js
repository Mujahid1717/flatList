import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
 

const Signup = () => {
    return (
        <View>
            <Text style ={styles.textStyle}>Sign Up</Text>
        
        <TextInput placeholder='First Name' style = {styles.input}
            placeholderTextColor={'#79aeaf'}      
        >
        </TextInput>

        <TextInput placeholder='Last Name' style = {styles.input}
            placeholderTextColor={'#79aeaf'}    
        >
        </TextInput>
        <TextInput placeholder='Enter Password' style = {styles.input}
            placeholderTextColor={'#79aeaf'}    
        >
        </TextInput>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        textAlign:'center',
        fontSize:20,
        color:'#79aeaf',
        fontWeight:'bold'
    },
    input:{
        borderBottomColor:'#79aeaf',
        borderBottomWidth:2,
        margin: 14,
        padding:8,
        fontSize:20
    },
    buttonContainer:{
        height:40,
        marginHorizontal:50,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        borderWidth:4,
        borderColor:'#79aeaf'
    },
    buttonText:{
        textTransform:'uppercase',
        color:'#79aeaf',
        fontSize:16,
        fontWeight:'bold',
    }, 
});

export default Signup;