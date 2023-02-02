import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';


const Products= ({products}) => {

    const {name, brand, price} = products
    return(
        <View style = {styles.container}>
           <Image style ={styles.imageStyle}  source = {require('../../assets/logo.png')}/>
           <Text>{name}</Text>
           <Text>{brand}</Text> 
           <Text>{price}</Text>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container:{
            width: "48%",
            alignItems: 'center',
            margin:"1%",
            

    },
    imageStyle :{
        height:150,
        width: 150
    }

});
export default Products;