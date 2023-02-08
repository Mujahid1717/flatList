import React from 'react';
import {View, StyleSheet, ScrollView,TouchableOpacity, Dimensions,Image} from 'react-native';
import Images from '../Images';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Home = (props) => {
    return(
        <ScrollView>
            <View style = {styles.imageContainer} >
            {
            Images.map((image,index) => (
                <TouchableOpacity key ={index} onPress=
                    {()=>props.navigation.navigate('Image',{url: image.url})}>
                    <Image source ={image.url} style = {styles.imageStyle}/>

                </TouchableOpacity> 
                ))
            }
            </View>
        </ScrollView>

    );


};
const styles = StyleSheet.create({
imageContainer:{
    display:'flex', 
    flexDirection:'row',
    flexWrap:'wrap'
},
imageStyle:{
    height:deviceHeight / 3,
    width: deviceWidth / 3 -6, 
    borderRadius:10,
    margin:2

},


});
export default Home;