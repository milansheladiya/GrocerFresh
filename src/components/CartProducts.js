import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const CartProducts = ({ item }) => {
  const {id, name, price, quantity, url} = item.item
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', padding:5, height:100 , borderTopWidth:5, borderTopColor:'#caf0f8', marginTop:20}}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={{flexDirection:'column',justifyContent:'space-between',}}>
        <Text style={{color:'#0096c7',fontSize:20}}> {name} </Text>
        <Text style={{fontWeight:'bold'}}> ${price} </Text>
        <Text> Quantity : {quantity} </Text>
      </View>
      <View>
        <TouchableOpacity>
          <AntDesign name="closecircle" size={24} color="red" style={{padding:20}}/>
        </TouchableOpacity>
      </View>
    </View>


  //   <View style={{flexDirection:'row', justifyContent:'space-between', padding:5, height:100 , borderTopWidth:5, borderTopColor:'#caf0f8', marginTop:20}}>
  //   <View>
  //     <Image
  //       style={styles.img}
  //       source={{
  //         uri: "https://i5.walmartimages.ca/images/Thumbnails/580/6_r/875806_R.jpg",
  //       }}
  //     />
  //   </View>
  //   <View style={{flexDirection:'column',justifyContent:'space-between',}}>
  //     <Text style={{color:'#0096c7',fontSize:20}}> Banana </Text>
  //     <Text style={{fontWeight:'bold'}}> $17 </Text>
  //     <Text> Quantity : 10 </Text>
  //   </View>
  //   <View>
  //     <TouchableOpacity>
  //       <AntDesign name="closecircle" size={24} color="red" style={{padding:20}}/>
  //     </TouchableOpacity>
  //   </View>
  // </View>

  );
};
const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 65,
    //borderWidth:1
  },
  txt:{
    padding:10
  }
});

export default CartProducts;
