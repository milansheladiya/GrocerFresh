import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import CartProducts from "../components/CartProducts";
import { Fontisto } from "@expo/vector-icons";
import { getFirestore } from "firebase/firestore";
import { insertWithSetDocHandler } from "../Firebase/insert";
import { getUserIdHandler } from "../Firebase/auth";
import { readAllWithId } from "../Firebase/read";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const CartScreen = ({ navigation }) => {
  // const db = getFirestore();

  // const addData = async ()  => {
  //   const uid = await getUserIdHandler();
  //   console.log(uid);
  //   const res = await insertWithSetDocHandler(["customers",uid],{
  //     cart:[{id:"FgYvsRuUvT5ZNvVGCoCU",category:"Fruits",quantity:1},{id:"LZKCPfoFwiA4OFMiDfA3",category:"Fruits",quantity:1},{id:"5K6bDGLBCpqVBWd6jG0v",category:"bakeryFood",quantity:1}],
  //   });
  //   console.log(res , " -------- Cart ------ ");
  // }

  const [cartProdId, setcartProdId] = useState([]);
  const [cartProd, setcartProd] = useState([]);
  const [firstRender, setFirstRender] = useState(false);
  const [cartTotal, setCartTotal] = useState(0.0);

  const CartPriceReducer = (priceToLess) => {
    setCartTotal(parseFloat(cartTotal) - parseFloat(priceToLess));
  };

  const cartHandler = async () => {
    const uid = await getUserIdHandler();
    const carts = await readAllWithId(["customers", uid]);

    if (carts.data().cart !== undefined) {
      for (let i = 0; i < carts.data().cart.length; i++) {
        let res = await readAllWithId([
          "grocery",
          carts.data().cart[i].category,
          carts.data().cart[i].category,
          carts.data().cart[i].id,
        ]);

        setCartTotal(
          (cartTotal) =>
            parseFloat(cartTotal) +
            parseFloat(res.data().price) *
              parseFloat(carts.data().cart[i].quantity)
        );
        // console.log(res.data());
        setcartProd((cartProd) => [
          ...cartProd,
          {
            ...res.data(),
            id: carts.data().cart[i].id,
            quantity: carts.data().cart[i].quantity,
            category: carts.data().cart[i].category,
          },
        ]);
      }
    }
  };

  useEffect(async () => {
    if (!firstRender) {
      await cartHandler();
      setFirstRender(true);
    }
  }, [firstRender]);

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 0,
          width: Dimensions.get("window").width,
          backgroundColor: "lightblue",
          flexDirection: "row",
          // justifyContent: "flex-start",
          zIndex: -1,
          position: "relative",
          paddingTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} style={{ margin: 20 }} />
        </TouchableOpacity>
        <Fontisto
          name="opencart"
          size={40}
          color="black"
          style={{
            padding: 10,
            marginBottom: 10,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: "25%",
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: "white",
          width: Dimensions.get("window").width,
          height: height,
        }}
      >
        <FlatList
          data={cartProd}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <CartProducts
              item={item}
              cartProd={cartProd}
              setcartProd={setcartProd}
              CartPriceReducer={CartPriceReducer}
            />
          )}
        />
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CheckoutScreen", {
            totalCartPrice: cartTotal.toFixed(2),
            cartProd: cartProd,
          })
        }
        style={{
          backgroundColor: "lightblue",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ color: "black", fontSize: 20, bottom: 10 }}>
          Checkout : ${cartTotal.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {},
});

export default CartScreen;
