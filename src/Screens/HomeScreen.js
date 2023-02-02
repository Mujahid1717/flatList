import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
    <View style={styles.mainText}>

      <Button
        title="Go To Screen List"
        onPress={()=>{}}
      />
    </View>

    );
}
const styles = StyleSheet.create({
    mainText:{
      
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

});
export default HomeScreen;