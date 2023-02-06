import React from 'react';
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
        <Text style = {styles.buttonText2}>Custom Button</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={()=> 
            console.log('button pressed')}
            style = {styles.buttonContainer3}
            >
            <Text style = {styles.buttonText3}>Custom Button</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> 
            console.log('button pressed')}
            style = {styles.buttonContainer4}
            >
            <Text style = {styles.buttonText4}>Custom Button</Text>
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

    }, 
    buttonContainer3:{
        height:40,
        marginHorizontal:50,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        borderWidth:4,
        borderColor:'blue'
              
    },
    buttonText3:{
        textTransform:'uppercase',
        color:'blue',
        fontSize:16,
        fontWeight:'bold',

    },  
    buttonContainer4:{
        height:120,
        width:120,
        marginHorizontal:50,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
        borderWidth:4,
        borderColor:'blue'
              
    },
    buttonText4:{
        textTransform:'uppercase',
        color:'blue',
        fontSize:16,
        fontWeight:'bold',

    }  
        
});
export default Welcome;