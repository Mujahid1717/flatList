import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

    const Books = [
        {name: 'chemistry', section: 1},
        {name: 'Biology', section: 2},
        {name: 'Math', section: 3},
        {name: 'Physics', section: 4},
        {name: 'Urdu', section: 5},
        {name: 'Pakistan Study', section: 6},
        {name: 'English', section: 7},
        {name: 'Islamic Study', section: 8},
    ];  
    return(
    <View>
        <FlatList
        keyExtractor={ Books => Books.name}  
        data={Books} 
        renderItem = {({ item })=>{
        return <Text style = {styles.headerText}>{item.name} - section {item.section}</Text>

        }}
        
        
        
        />
    </View>
    );

};
const styles = StyleSheet.create({
    headerText :{
        padding: 40
    }


});
export default ListScreen;