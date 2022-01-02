import React,{useEffect, useState} from "react";
import { View,Text, Image,StyleSheet } from "react-native";

const CartProducts = () => {
    

 return(

    <View style={styles.container}>
    <Text>Welcome to cart products</Text>
    <View style={{flexDirection:'row',borderWidth:1}}>
        <View style={{flex:1, alignSelf:'flex-start'}}>
            <Image style = {styles.image} source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHUUZtOYQgAenD7fdJ95ugw9wsYu1G3H5pA&usqp=CAU'}} />
        </View>

        <View style={{flex:2,marginLeft:50}}>
            <Text style = {styles.name}>Product Name:</Text>
            <Text style = {styles.name}>Product price:</Text>
            <Text style = {styles.name}>Product quantity:</Text>
        </View>
    </View>
   
  </View>

    );

};
const styles = StyleSheet.create({
  text:{
      fontSize:30,
      fontFamily: "Italian",
      fontHeight: 20,
  },  
  container: {
    marginLeft: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default CartProducts;