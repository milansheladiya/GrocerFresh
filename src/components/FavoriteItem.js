import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavoriteItem = ({ item }) => {
  console.log("--------", item.item);
  const { id, name, price, quantity, url } = item.item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        height: 100,
        borderTopWidth: 5,
        borderTopColor: "#DB6B97",
        marginTop: 20,
        width:'100%',
        borderRadius:30,
      }}
      key={id}
    >
      <View>
        <Image
          style={styles.img}
          source={{
            uri: url,
          }}
        />
      </View>
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <Text style={{ color: "#0096c7", fontSize: 20 }}> {name} </Text>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}> ${price} </Text>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 90,
    // borderWidth: 1,
  },
  txt: {
    padding: 10,
  },
});

export default FavoriteItem;
