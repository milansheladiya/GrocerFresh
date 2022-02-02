import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox, Icon } from "react-native-elements";

const SortingScreen = ({ navigation,route }) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [value, setValue] = useState(null);
  // const [prodData, setProdData] = useState(navigation.getParam("pData"));
  
  const prodData = navigation.getParam("pData");

  useEffect(() => {
    sortScreen();
  },[check1,check2]);

  const sortScreen = () => {
    if (check1 && !check2) {
      // console.log("l to h");
      prodData.sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
    } else if (!check1 && check2) {
      // console.log("h to l");
      prodData.sort((a, b) => {
        return a.price > b.price ? -1 : 1;
      });
    }
    
    //setProdData(prodData);
    console.log(prodData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sorting By Price </Text>
      <CheckBox
        center
        title="Low To High"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check1}
        onPress={() => {
          setCheck1(true);
          setCheck2(false);
          setValue("Low To High");
        }}
      />
      <CheckBox
        center
        title="High To Low"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check2}
        onPress={() => {
          setCheck1(false);
          setCheck2(true);
          setValue("High To Low");
        }}
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F5A962",
    marginVertical: 30,
  },
});

export default SortingScreen;