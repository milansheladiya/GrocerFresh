import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, FlatList,ScrollView } from "react-native";
import WeeklyDealProduct from "../components/WeeklyDealProduct";
import {dairy} from '../Data/data';
import {frozenFood} from '../Data/data';

const WeeklyDealScreen = () => {
    console.log(dairy);
  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/GrocerFreshLogo.jpeg")}
        style={styles.img}
      />

      <Text style={{fontWeight:'bold', fontSize:30, marginBottom:10}}> Weekly Fresh Deals </Text>

<Text style={{fontWeight:'bold'}}> Deal in Dairy </Text>
        <FlatList 
        data={dairy}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={(item) => <WeeklyDealProduct item={item}/>}
        />


<Text style={{fontWeight:'bold'}}> Deal in frozen Food </Text>
        <FlatList 
        data={frozenFood}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={(item) => <WeeklyDealProduct item={item}/>}
        />
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
    width: 200,
    height: 150,
    
  },
});

export default WeeklyDealScreen;
