import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Products from '../Screens/Products';
import logo from "../../assets/logo.png";

const StaticProductImage = logo;

const products = [
{brand: "sardar" ,type: "human being", name:"Sard Jalil khan",price:"50",productImage:StaticProductImage},
{brand: "sardar" ,type: "human being", name:"Sard Jalil khan",price:"100",productImage:StaticProductImage},
{brand: "sardar" ,type: "human being", name:"Sard Jalil khan",price:"200",productImage:StaticProductImage},
{brand: "Jalil" ,type: "human being", name:"Sard Jalil khan",price:"70",productImage:StaticProductImage},
{brand: "Jalil" ,type: "human being", name:"Sard Jalil khan",price:"110",productImage:StaticProductImage},
{brand: "Jalil" ,type: "human being", name:"Sard Jalil khan",price:"210",productImage:StaticProductImage},
{brand: "vincet" ,type: "human being", name:"Sard Jalil khan",price:"80",productImage:StaticProductImage},
{brand: "vincet" ,type: "human being", name:"Sard Jalil khan",price:"220",productImage:StaticProductImage},
];

const GridView = () => {
 return(
    <SafeAreaView>
        <FlatList
        showsHorizontalScrollIndicator = {false}
        numColumns = {2}
        data = {products}
        keyExtractor = {(item,index)=>index.toString()}
        renderItem = {({item})=>(<Products products={item} />)}
        />
    </SafeAreaView>
 );
};
const styles = StyleSheet.create({


});
export default GridView;