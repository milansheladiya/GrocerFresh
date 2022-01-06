import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeeklyDealProduct = ({item}) => {
    const {id, name, price, quantity, url} = item.item;
  return (
      <View
        style={{
          width: 150,
          height: 210,
          borderWidth: 3,
          padding: 10,
          alignItems: "center",
          borderColor: "#548CA8",
          borderRadius: 30,
          justifyContent: "space-between",
          margin:10
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
        //   source={{
        //     uri: "https://i5.walmartimages.ca/images/Enlarge/676/806/6000196676806.jpg",
        //   }}
        source={{uri:url}}
        />
        <Text style={{ fontWeight: "bold", color: "#000957" }}>
          {/* Hellmann's Real Mayonnaise */}
          {name}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>${price}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  img: {
    marginBottom: 5,
    width: 200,
    height: 200,
  },
});

export default WeeklyDealProduct;
