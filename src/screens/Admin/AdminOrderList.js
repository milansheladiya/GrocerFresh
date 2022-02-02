import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { readAllHandler } from "../../Firebase/read";
import { Card } from "react-native-elements";

const AdminOrderList = (props) => {
  const [orders, setOrders] = useState([]);
  const [pageTitle, setPageTitle] = useState("Order List");

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  const orderHandler = async () => {
    const res = await readAllHandler(["orders"]);
    const tmpArray = [];
    res.forEach((doc) => {
      tmpArray.push({
        orderId: doc.id,
        address: doc.data().address,
        total: doc.data().total,
        tax: doc.data().tax,
        uid: doc.data().uid,
        product: doc.data().product,
        deliveryMode: doc.data().deliveryMode,
      });
      console.log(doc.id, " => ", doc.data());
    });
    setOrders(tmpArray);
  };

  useEffect(() => {
    orderHandler();
    console.log("Order List : ", orders);
  }, []);

  return (
    <ScrollView style={{ marginVertical: 20 }}>
      <View style={styles.titleOuter}>
        <Text style={styles.title}>{pageTitle}</Text>
      </View>

      {orders.map((obj) => {
        return (
          <View key={obj.orderId}>
            <Card>
              <Card.Title>ORDER ID : {obj.orderId} </Card.Title>
              <Card.Divider />
              <View
                style={styles.TopBills}
              >
                <Text>Address : </Text>
                <Text style={{width:'70%'}}>{obj.address}</Text>
              </View>
              <View
                style={styles.TopBills}
              >
                <Text>Total :</Text>
                <Text>${obj.total}</Text>
              </View>
              <View
                style={styles.TopBills}
              >
                <Text>tax :</Text>
                <Text>${obj.tax}</Text>
              </View>
              <View
                style={styles.TopBills}
              >
                <Text>Grand total :</Text>
                <Text>
                  ${(parseFloat(obj.total) + parseFloat(obj.tax)).toFixed(2)}
                </Text>
              </View>
              <Card.Divider />
              {obj.product.map((prod) => {
                return (
                  <View style={styles.cardStyle} key={prod.id}>
                    <Image
                      source={{
                        // uri: "https://i5.walmartimages.ca/images/Thumbnails/507/980/625280507980.jpg",
                        uri: prod.url,
                      }}
                      style={{
                        // flex: 1,
                        width: 130,
                        height: 130,
                        // borderWidth: 1,
                        borderRadius: 90,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-around",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "#1572A1" }}>
                        {prod.name}
                      </Text>
                      <Text style={{ fontWeight: "bold", color: "#FC4F4Fs" }}>
                        ${prod.price}
                      </Text>
                      <Text style={{ fontWeight: "bold", color: "#270082" }}>
                        Qty : {prod.quantity}
                      </Text>
                    </View>
                  </View>
                );
              })}

              <Card.Divider />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Delivery Mode : </Text>
                <Text style={{ fontWeight: "bold" }}>{obj.deliveryMode}</Text>
              </View>
            </Card>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleOuter: {
    backgroundColor: "#EE6F57",
    // margin: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    // borderRadius:20,
    marginBottom: 40,
  },
  title: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#FAEEE7",
  },
  cardStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomStartRadius:30,
    paddingVertical: 5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  TopBills:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  }
});

export default AdminOrderList;
