import React ,{useState} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

const Hooks = ()=> {
    const [count,setCount] = useState(1)
return(
    <View>
        <Button 
        title ='- STATE'
        onPress={()=>setCount(count-1)}
        
        />
        <Text style = {styles.textStyle}>
            {count}
        </Text>
        <Button 
        title ='+ STATE'
        onPress={()=>setCount(count+1)}
        
        />
    </View>


);
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize:40
    }
});
export default Hooks;
