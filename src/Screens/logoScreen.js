import React from 'react';
import {Text, View, Image,  StyleSheet} from 'react-native';

const LogoScreen = () => {
    return(
    <View>
        <Image style= {styles.imagePos} source = {require('/Users/mujahidakhtar/Documents/listPro/assets/logo.png')} />
    </View>
    );

};
const styles= StyleSheet.create({
    imagePos:{
        height:300,
        width:300
    }

});
export default LogoScreen;