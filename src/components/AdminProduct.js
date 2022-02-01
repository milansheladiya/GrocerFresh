import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {deleteDocument} from "../Firebase/delete";

const AdminProduct = (props) => {
  const {id, name, price, quantity, url,category} = props.item.item;

  const itemDeleteHandler = async () => {

    console.log(category,"  ======= " , id);
    await deleteDocument(["grocery",category,category,id]);


  };

  const itemModifyHandler = () => {
       props.navigation.navigate("NewProductScreen",{item:props.item.item});
  };




  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: url,
        }}
      />
      <Text style={styles.txt}> {name} </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 5,
        }}
      >
        <TouchableOpacity style={styles.deleteButton} onPress={itemDeleteHandler}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modifyButton} onPress={itemModifyHandler}>
          <Text style={styles.modifyText}>Modify</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({

  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    // borderWidth: 1,
    width: 160,
    margin: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    backgroundColor:'white',
    borderRadius:10
  },
  img: {
    width: 150,
    height: 130,
    //borderWidth:1
  },
  txt: {
    padding: 3,
    margin: 10,
    color: "#064635",
    fontSize: 20,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#FF1700",
    padding: 3,
    width: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  deleteText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  modifyButton: {
    backgroundColor: "#ECB365",
    padding: 3,
    width: 60,
    borderRadius: 10,
  },
  modifyText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});

export default AdminProduct;
