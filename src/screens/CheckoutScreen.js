import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card, Icon, CheckBox } from "react-native-elements";

const CheckoutScreen = ({ navigation }) => {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [value, setValue] = useState(null);

  const [address, setAddress] = useState(
    "5143 Queen Avenue Montreal QC H3W2V3"
  );
  const [editing, setEditing] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [iconi, setIconi] = useState("create-outline");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check out</Text>

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
            <Text style={styles.styl}>$100.00 </Text>
            <Text style={styles.styl}>$15.00 </Text>
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
            $115.00
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
              size={10}
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

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("DeliveryTimeScreen")}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          
          Place Order
        </Text>
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
    color: "#1A5F7A",
    marginVertical: 30,
  },
  styl: {
    marginVertical: 10,
  },
  btn: {
    marginVertical: 30,
    borderWidth: 1,
    width: "90%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#35589A",
    shadowColor: '#171717',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
});

export default CheckoutScreen;
