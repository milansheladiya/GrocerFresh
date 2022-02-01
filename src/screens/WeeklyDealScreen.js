import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, FlatList,ScrollView } from "react-native";
import WeeklyDealProduct from "../components/WeeklyDealProduct";
import {ReadByQuelryHandler} from '../Firebase/read';
import { getFirestore,collection,query, where } from "firebase/firestore";

const WeeklyDealScreen = () => {
    //console.log(dairy);
    const db = getFirestore();
    const [fruits,setFruits] = useState([]);
    const [bakery,setBakery] = useState([]);
    const [dairy,setDairy] = useState([]);
    const [frozen,setFrozen] = useState([]);
    const [meat,setMeat] = useState([]);
    const [vegetables,setVegetables] = useState([]);

    useEffect(async () => {
      //---------------- fruits
      setFruits([]);
      setBakery([]);
      setDairy([]);

      const  q1 = query(collection(db, "grocery","Fruits","Fruits"), where("hasOffer", "==", true));
      const _fruits = await ReadByQuelryHandler(q1);
      _fruits.forEach((doc) => {
        setFruits(fruits => [...fruits,{...doc.data(),"id":doc.id}]);
      });

      //-------------------bakery
       const q2 = query(collection(db, "grocery","bakeryFood","bakeryFood"), where("hasOffer", "==", true));
      const _bakery = await ReadByQuelryHandler(q2);
      _bakery.forEach((doc) => {
        console.log(doc.data());
        setBakery(bakery => [...bakery,{...doc.data(),"id":doc.id}]);
        console.log(bakery);
      });
      //console.log(bakery);

    },[]);
  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/GrocerFreshLogo.jpeg")}
        style={styles.img}
      />

      <Text style={{fontWeight:'bold', fontSize:30, marginBottom:10}}> Weekly Fresh Deals </Text>

<Text style={{fontWeight:'bold'}}> Deal in Dairy </Text>
        <FlatList 
        data={fruits}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={(item) => <WeeklyDealProduct item={item}/>}
        />


<Text style={{fontWeight:'bold'}}> Deal in fruits </Text>
        <FlatList 
        data={bakery}
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
