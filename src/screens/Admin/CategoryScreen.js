import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { readAllHandler } from "../../Firebase/read";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Ionicons";
// Dropdown manu :  https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage

const NewProductScreen = (props) => {
  const [pageTitle, setPageTitle] = useState("Modify Product by Category");
  const [firstRender, setFirstRender] = useState(false);

  // for dropdown menu
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Fruits");
  const [items, setItems] = useState([
    { label: "Fruits", value: "Fruits" },
    { label: "bakeryFood", value: "bakeryFood" },
    { label: "dairy", value: "dairy" },
    { label: "frozenFood", value: "frozenFood" },
    { label: "meat", value: "meat" },
    { label: "vegetables", value: "vegetables" },
  ]);

  const getCategoryHandler = async () => {
    const res = await readAllHandler(["grocery"]);
    res.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  // useEffect(async () => {
  //   // if(!firstRender)
  //   {
  //     await getCategoryHandler();
  //     setFirstRender(true);
  //   }
  // },[]);

  return (
    <View style={{ paddingTop: 60 }}>
      <View style={styles.titleOuter}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("AdminHomeScreen")}
        >
          <Icon
            name="arrow-back"
            size={30}
            color={"black"}
            style={{ margin: 10, padding: 11 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{pageTitle} </Text>
      </View>

      <View>
        <Text style={styles.inputfieldText}> Category </Text>
        <View style={styles.boxContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.categoryMenu}
            textStyle={styles.categoryText}
            containerStyle={styles.cetegoryContainer}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.taskButton}
        onPress={() =>
          props.navigation.navigate("AdminProductScreen", {
            category: value,
            navigation: props.navigation,
          })
        }
      >
        <Text style={styles.taskButtonText}> GO </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleOuter: {
    backgroundColor: "#3B6978",
    // margin: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    // borderRadius:20,
    marginBottom: 40,
    flexDirection: "row",
  },
  title: {
    textAlign: "center",
    padding: 25,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#FAEEE7",
  },
  inputfieldText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14274E",
    textAlign: "center",
    padding: 20,
  },
  categoryMenu: {
    width: 300,
    height: 40,
    backgroundColor: "#fafafa",

    //   marginLeft:10,
  },
  categoryText: {
    textAlign: "center",
    fontSize: 20,
  },
  cetegoryContainer: {
    width: 300,
    marginLeft: 10,
    backgroundColor: "#dfdfdf",
  },
  boxContainer: {
    alignItems: "center",
  },
  taskButton: {
    width: 300,
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#206A5D",
    position: "absolute",
    bottom: -500,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  taskButtonText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    padding: 15,
    color: "white",
  },
});

export default NewProductScreen;
