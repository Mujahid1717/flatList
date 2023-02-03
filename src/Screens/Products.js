import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';


const Products= ({products}) => {

    const {name, brand, price} = products
    return(
        <View style = {styles.container}>
           <Image style ={styles.imageStyle}  source = {require('../../assets/logo.png')}/>
           <Text style= {styles.nameText}>{name}</Text>
           <Text>Brand:{brand}</Text> 
           <Text>Price:{price}</Text>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container:{
        width: "48%",
        alignItems: 'center',
        margin:"1%",
        padding:15,
        borderWidth:1

    },
    imageStyle :{
        height:150,
        width: 150
    },
    nameText:{
        fontWeight:"bold",
        textAlign:'center',
        padding:10
    },

});
export default Products;