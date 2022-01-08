import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import CartProducts from "../components/CartProducts";
import { Fontisto } from "@expo/vector-icons";
import {Fruits} from '../Data/data';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Fontisto
        name="opencart"
        size={40}
        color="blue"
        style={{ alignSelf: "center", padding: 10 }}
      />


        <FlatList
        data={Fruits}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <CartProducts item={item}/>}
        />

{/*         
        <CartProducts />
        <CartProducts />
        <CartProducts /> */}



      
          <TouchableOpacity onPress={() => navigation.navigate("CheckoutScreen")} style={{backgroundColor:'#548CFF',position:'absolute', bottom:10, width:'100%', height:60, justifyContent:'center', alignItems:'center'}}>
              <Text style={{color:'black',fontSize:20}}>
                Checkout : 100$
              </Text>
              </TouchableOpacity>
        

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex:1
  },
  text:{

  }
});

export default CartScreen;
