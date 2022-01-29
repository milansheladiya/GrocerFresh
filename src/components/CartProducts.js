import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { UpdateDocuments } from "../Firebase/update";
import { auth } from "../Firebase/auth";

const CartProducts = ({ item, cartProd, setcartProd,CartPriceReducer }) => {
  const { id, name, price, quantity, url, category } = item.item;

  const deleteFromCart = async () => {
    console.log("------------------------------------");
    //console.log(cartProd);
    cartProd = cartProd.filter((prod) => prod.id != id);
    const tmpProd = cartProd;
    tmpProd.forEach((element) => {
      delete element["description"];
      delete element["description"];
      delete element["name"];
      delete element["hasOffer"];
      delete element["isAddedToCart"];
      delete element["isFavorite"];
      delete element["price"];
      delete element["ratings"];
      delete element["type"];
      delete element["url"];
    });
    CartPriceReducer(parseFloat(price * quantity));
    await UpdateDocuments(["customers",auth.currentUser.uid],{cart:tmpProd});
    setcartProd(cartProd);
  };

  return (
    <View style={styles.outer}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.prodName}> {name} </Text>
        <Text style={styles.prodPrice}> ${price} </Text>
        <Text> Quantity : {quantity} </Text>
      </View>
      <View>
        <TouchableOpacity onPress={deleteFromCart}>
          <AntDesign
            name="closecircle"
            size={24}
            color="red"
            style={{ padding: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 65,
    //borderWidth:1
  },
  txt: {
    padding: 10,
  },
  container: { flexDirection: "column", justifyContent: "space-between" },
  prodName: { color: "#0096c7", fontSize: 20 },
  prodPrice: { fontWeight: "bold" },
  outer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    height: 100,
    borderTopWidth: 5,
    borderTopColor: "#caf0f8",
    marginTop: 20,
  },
});

export default CartProducts;
