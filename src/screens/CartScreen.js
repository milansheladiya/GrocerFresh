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
import {insertWithSetDocHandler} from "../Firebase/insert";
import {getUserIdHandler} from "../Firebase/auth";
import {readAllWithId} from "../Firebase/read";

const CartScreen = ({navigation}) => {
// const db = getFirestore();

  // const addData = async ()  => {
  //   const uid = await getUserIdHandler();
  //   console.log(uid);
  //   const res = await insertWithSetDocHandler(["customers",uid],{
  //     cart:[{id:"FgYvsRuUvT5ZNvVGCoCU",category:"Fruits",quantity:1},{id:"LZKCPfoFwiA4OFMiDfA3",category:"Fruits",quantity:1},{id:"5K6bDGLBCpqVBWd6jG0v",category:"bakeryFood",quantity:1}],
  //   });
  //   console.log(res , " -------- Cart ------ ");
  // }

  const [cartProdId,setcartProdId] = useState([]);
  const [cartProd,setcartProd] = useState([]);

  const cartHandler = async () => {
    const uid = await getUserIdHandler();
    const carts = await readAllWithId(["customers",uid]);
  
    setcartProdId([...carts.data().cart]);
    // console.log(cartProd);

    for (let i = 0; i < cartProdId.length; i++) {
      //console.log(cartProdId[i].id);
      
      let res = await readAllWithId(["grocery",cartProdId[i].category,cartProdId[i].category,cartProdId[i].id]);    
        // console.log(res.data());
        setcartProd(cartProd => [...cartProd,{...res.data(),id:cartProdId[i].id,quantity:cartProdId[i].quantity}]);
    }
      //console.log(cartProd);
  }

  useEffect(async () => {
    await cartHandler();
  },[]);

  return (
    <View style={styles.container}>
      <Fontisto
        name="opencart"
        size={40}
        color="blue"
        style={{ alignSelf: "center", padding: 10 }}
      />


        <FlatList
        data={cartProd}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <CartProducts item={item}/>}
        />

{/*         
        <CartProducts />
        <CartProducts />
        <CartProducts /> */}



{/* () => navigation.navigate("CheckoutScreen") */}
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
