import React,{useEffect, useState} from "react";
import { View,Text,Button, StyleSheet,Alert ,ScrollView} from "react-native";
import CartProducts from "../components/CartProducts";

const CartScreen = () => {


    return(
         <View style = {styles.container}>
             <ScrollView style= {styles.scrollview}>

             </ScrollView>
         <Text>Welcome to cart screen</Text>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <CartProducts/>
           <View style={{ flexDirection:'row',marginTop:30, backgroundColor: "blue" }} >
           <View style = {{flex:1, alignSelf:"flex-start"}}>
           <Text style= {styles.text}>Sub Total: </Text>
           <Text style= {styles.text}>Tax(15%): </Text>
           <Text style= {styles.text}>Grand Total: </Text>
           </View>

           <View style = {{ alignSelf:"flex-end"}}>
               <Text style = {styles.text}>1000</Text>
               <Text style = {styles.text}>150</Text>
               <Text style = {styles.text}>1500</Text>
           </View>
           </View>  
           <View>
              <Button
        title="Check Out"
        onPress={() => Alert.alert('Simple Button pressed')}
             />
           </View>
        </View>

    );
};
const styles = StyleSheet.create({
    scrollview:{
    marginHorizontal: 20,
        },
    container: {
          padding: 20,
      },
  text:{
      fontSize:20,
      fontFamily: "Bold",
      
  },  
  button:{
      justifyContent:"center",
      height: 10,
      position:"absolute",
      bottom: 0,

  },
});

export default CartScreen;