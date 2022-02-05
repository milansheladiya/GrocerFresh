import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import WeeklyDealProduct from "../components/WeeklyDealProduct";
import { ReadByQuelryHandler } from "../Firebase/read";
import { getFirestore, collection, query, where } from "firebase/firestore";
import Icon from "react-native-vector-icons/Ionicons";

const WeeklyDealScreen = ({ navigation }) => {
  //console.log(dairy);
  const db = getFirestore();
  const [fruits, setFruits] = useState([]);
  const [bakery, setBakery] = useState([]);
  const [dairy, setDairy] = useState([]);
  const [frozen, setFrozen] = useState([]);
  const [meat, setMeat] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  useEffect(async () => {
    //---------------- fruits
    setFruits([]);
    setBakery([]);
    setDairy([]);

    const q1 = query(
      collection(db, "grocery", "Fruits", "Fruits"),
      where("hasOffer", "==", true)
    );
    const _fruits = await ReadByQuelryHandler(q1);
    _fruits.forEach((doc) => {
      setFruits((fruits) => [...fruits, { ...doc.data(), id: doc.id }]);
    });

    //-------------------bakery
    const q2 = query(
      collection(db, "grocery", "bakeryFood", "bakeryFood"),
      where("hasOffer", "==", true)
    );
    const _bakery = await ReadByQuelryHandler(q2);
    _bakery.forEach((doc) => {
      console.log(doc.data());
      setBakery((bakery) => [...bakery, { ...doc.data(), id: doc.id }]);
      console.log(bakery);
    });
    //console.log(bakery);
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 0,
          width: Dimensions.get("window").width,
          backgroundColor: "white",
          flexDirection: "row",
          // justifyContent: "flex-start",
          zIndex: -1,
          position: "relative",
          paddingTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon
            name="arrow-back"
            size={30}
            style={{ margin: 20, marginTop: 50 }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/GrocerFreshLogo.jpeg")}
          style={styles.img}
        />
      </View>

      <ScrollView>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          {" "}
          Weekly Fresh Deals{" "}
        </Text>
        <Text
          style={{
            fontWeight: "400",
            textAlign: "center",
            fontSize: 20,
            color: "red",
          }}
        >
          {" "}
          Deals in Fruits{" "}
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 50, margin: 10 }}
          data={fruits}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={(item) => <WeeklyDealProduct item={item} />}
        />

        <Text
          style={{
            fontWeight: "400",
            textAlign: "center",
            fontSize: 20,
            color: "red",
          }}
        >
          {" "}
          Deals in Baked Food{" "}
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 50, margin: 10 }}
          data={bakery}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={(item) => <WeeklyDealProduct item={item} />}
        />
      </ScrollView>
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
    marginHorizontal: 50,
  },
});

export default WeeklyDealScreen;
