import React from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';

const DetailScreen = ({navigation}) => {
    return(
    <View style={styles.mainText}>
        <Button
        title="Detail Screen"
        onPress={() => navigation.navigate('Detail')}
        />
        

    </View>

    );
}
const styles = StyleSheet.create({
    mainText:{
        backgroundColor:'#6b999c',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

});
export default DetailScreen;