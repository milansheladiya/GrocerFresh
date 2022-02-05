import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card, Icon, CheckBox } from "react-native-elements";
import { insertHandler } from "../Firebase/insert";
import { auth } from "../Firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import { deleteFields } from "../Firebase/delete";
import emailjs from "@emailjs/browser";
import Icons from "react-native-vector-icons/Ionicons";

const CheckoutScreen = ({ navigation }) => {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [value, setValue] = useState(null);

  const [totalCartPrice, setTotalCartPrice] = useState(
    navigation.getParam("totalCartPrice")
  );

  const [cartProd, setCartProd] = useState(navigation.getParam("cartProd"));

  //console.log(navigation.getParam("totalCartPrice"));

  const [address, setAddress] = useState(
    "5143 Queen Avenue Montreal QC H3W2V3"
  );
  const [editing, setEditing] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [iconi, setIconi] = useState("create-outline");

  const placeOrderHandler = () => {
    let prodData = [];
    let tax = 0;

    cartProd.forEach((obj) => {
      prodData.push({
        id: obj.id,
        name: obj.name,
        price: obj.price,
        quantity: obj.quantity,
        url: obj.url,
      });
    });

    const data = {
      uid: auth.currentUser.uid,
      address: address,
      product: prodData,
      total: totalCartPrice,
      tax: (totalCartPrice * 0.15).toFixed(2),
      timestamp: serverTimestamp(),
      deliveryMode: check1 ? "Home Delivery" : "Pickup",
    };

    let res = insertHandler(["orders"], data);

    const resDelete = deleteFields(["customers", auth.currentUser.uid], "cart");

    emailjs.init("user_eIChdvdhBmQ4eCww3BlyX");

    emailjs.send("service_u5you67", "template_33rhgj7", {
      to_name: "milan",
      from_name: "grocerfresh",
      deliveryMode: data.deliveryMode,
      address: data.address,
      total: data.total,
      tax: data.tax,
      grand_total: parseFloat(data.total) + parseFloat(data.tax),
      reply_to: "grocerfresh@mailinator.com",
      url: prodData.url,
      name: prodData.name,
      price: prodData.price,
      quantity: prodData.quantity,
    });

    console.log(data);

    console.log(" ~~~~~~~~~~~~ Email has been sent ~~~~~~~~~~~~~~");

    navigation.navigate("DeliveryTimeScreen");
  };

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
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <Icons
            name="arrow-back"
            size={30}
            color={"black"}
            style={{ marginTop: 35, margin: 10 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Check out</Text>
      </View>

      <Card containerStyle={{ marginTop: 15, width: "90%" }}>
        <Card.Title style={{ fontSize: 20, fontStyle: "italic" }}>
          Bill
        </Card.Title>
        <Card.Divider />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={styles.styl}>Cart Total </Text>
            <Text style={styles.styl}>Tax (15%) </Text>
          </View>
          <View
            style={{ flexDirection: "column", flex: 1, alignItems: "flex-end" }}
          >
            <Text style={styles.styl}>${totalCartPrice} </Text>
            <Text style={styles.styl}>
              ${(totalCartPrice * 0.15).toFixed(2)}{" "}
            </Text>
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row" }}>
          <Text style={(styles.styl, { flex: 1 })}>Grand Total </Text>
          <Text
            style={
              (styles.styl,
              { flex: 1, textAlign: "right", fontWeight: "bold", fontSize: 20 })
            }
          >
            $
            {(
              parseFloat(totalCartPrice) + parseFloat(totalCartPrice * 0.15)
            ).toFixed(2)}
          </Text>
        </View>
      </Card>

      {/* Order Type */}

      <Card containerStyle={{ marginTop: 15, width: "90%" }}>
        <Card.Title style={{ fontSize: 20, fontStyle: "italic" }}>
          Order Type
        </Card.Title>
        <Card.Divider />

        <CheckBox
          center
          title="Delivery"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={check1}
          onPress={() => {
            setCheck1(true);
            setCheck2(false);
            setValue("Delivery");
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={address}
            editable={editing}
            autoComplete="street-address"
            clearButtonMode="always"
            style={{ flex: 6 }}
            onChangeText={setAddress}
          />
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setEditing(!editing);
              iconi === "create-outline"
                ? setIconi("checkmark-done-outline")
                : setIconi("create-outline");
            }}
          >
            <Icon
              reverse
              name={iconi}
              type="ionicon"
              color="#517fa4"
              size={18}
            />
          </TouchableOpacity>
        </View>

        <CheckBox
          center
          title="Pickup"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={check2}
          onPress={() => {
            setCheck1(false);
            setCheck2(true);
            setValue("Pickup");
          }}
        />
      </Card>

      <TouchableOpacity style={styles.btn} onPress={placeOrderHandler}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Place Order</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginVertical: 30,
    marginHorizontal: "20%",
  },
  styl: {
    marginVertical: 10,
  },
  btn: {
    marginVertical: "40%",
    borderWidth: 1,
    width: "90%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#35589A",
    shadowColor: "#171717",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
});

export default CheckoutScreen;
