import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { CheckBox, Icon } from 'react-native-elements';

const SortingScreen = () => {
    const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [value,setValue] = useState(null);

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
            setValue("High To High");
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
  title:{
      fontSize:30,
      fontWeight:'bold',
      color:'#F5A962',
      marginVertical:30
  }
});

export default SortingScreen;
