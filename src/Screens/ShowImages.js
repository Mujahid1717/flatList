import React from 'react';
import {View, ImageBackground, StyleSheet,Dimensions} from 'react-native';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ShowImages = props => {
  return(
    <View>
      <ImageBackground style = {styles.imageShow}
        source={props.route.params.url}
      />
        
    </View>


  );  

};
const styles = StyleSheet.create({
  imageShow:{
    height: deviceHeight,
    width:deviceWidth
  }
});
export default ShowImages;