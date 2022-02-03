import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { UpdateDocuments } from "../../Firebase/update";
import { insertHandler } from "../../Firebase/insert";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

// Dropdown manu :  https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage

const NewProductScreen = (props) => {
  const [pageTitle, setPageTitle] = useState(
    props.navigation.getParam("item") == null ? "New" : "Modify"
  );
  const [taskButton, setTaskButton] = useState(
    props.navigation.getParam("item") == null ? "Add" : "Modify"
  );

  // textinput field
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [rating, setRating] = useState();
  const [typeOfProduct, setTypeOfProduct] = useState("");
  const [url, setUrl] = useState("");

  // for dropdown menu
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(
    props.navigation.getParam("item") == null
      ? "Fruits"
      : props.navigation.getParam("item").category
  );
  const [items, setItems] = useState([
    { label: "Fruits", value: "Fruits" },
    { label: "bakeryFood", value: "bakeryFood" },
    { label: "dairy", value: "dairy" },
    { label: "frozenFood", value: "frozenFood" },
    { label: "meat", value: "meat" },
    { label: "vegetables", value: "vegetables" },
  ]);

  useEffect(() => {
    if (pageTitle === "Modify") {
      fillProductDataHandler();
    }
  }, []);

  const fillProductDataHandler = () => {
    setName(props.navigation.getParam("item").name);
    setPrice(props.navigation.getParam("item").price.toString());
    setQuantity(props.navigation.getParam("item").quantity.toString());
    setRating(props.navigation.getParam("item").ratings.toString());
    setTypeOfProduct(props.navigation.getParam("item").type);
    setUrl(props.navigation.getParam("item").url);
  };

  const taskHandler = async () => {
    if (pageTitle === "New") {
      if (validateHandler()) {
        console.log("new");
        const res = await insertHandler(
          ["grocery", value, value],
          collectHandler()
        );
        if (res) {
          Alert.alert("Product added successfully!");
          clearFieldHandler();
        } else {
          Alert.alert("Something went wrong!");
        }
      }
    } else {
      const category = props.navigation.getParam("item").category;
      const NewData = {
        description: props.navigation.getParam("item").description,
        hasOffer: props.navigation.getParam("item").hasOffer,
        isAddedToCart: props.navigation.getParam("item").isAddedToCart,
        isFavorite: props.navigation.getParam("item").isFavorite,
        name: name,
        price: price,
        quantity: quantity,
        ratings: rating,
        type: typeOfProduct,
        url: url,
      };

      props.navigation.getParam("item").name = name;
      props.navigation.getParam("item").price = price;
      props.navigation.getParam("item").quantity = quantity;
      props.navigation.getParam("item").ratings = rating;
      props.navigation.getParam("item").type = typeOfProduct;
      props.navigation.getParam("item").url = url;

      await UpdateDocuments(
        ["grocery", category, category, props.navigation.getParam("item").id],
        NewData
      );
      console.log("Update Done");
      props.navigation.goBack();
    }
  };

  const validateHandler = () => {
    if (
      name === null ||
      name === "" ||
      price === null ||
      price === "" ||
      quantity === null ||
      quantity === "" ||
      rating === null ||
      rating === "" ||
      typeOfProduct === null ||
      typeOfProduct === "" ||
      url === null ||
      url === ""
    ) {
      Alert.alert("All Field mush be filled!");
      return false;
    }
    return true;
  };

  const collectHandler = () => {
    const NewData = {
      description: "Fresh item",
      hasOffer: false,
      isAddedToCart: false,
      isFavorite: false,
      name: name,
      price: price,
      quantity: quantity,
      ratings: rating,
      type: typeOfProduct,
      url: url,
    };
    return NewData;
  };

  const clearFieldHandler = () => {
    setName("");
    setPrice();
    setQuantity();
    setRating();
    setTypeOfProduct("");
    setUrl("");
  };

  return (
    <View style={{ paddingTop: 40, }}>
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
        <Text style={styles.title}>{pageTitle} Product </Text>
      </View>

      <View>
        <View style={styles.inputfieldOuter}>
          <Text style={styles.inputfieldText}> Name </Text>
          <TextInput
            style={styles.inputfield}
            placeholder="Product name"
            autoComplete={false}
            autoCorrect={false}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputfieldOuter}>
          <Text style={styles.inputfieldText}> Price </Text>
          <TextInput
            style={styles.inputfield}
            placeholder="Product price$"
            keyboardType="numeric"
            autoComplete={false}
            autoCorrect={false}
            value={price}
            onChangeText={setPrice}
          />
        </View>
        <View style={styles.inputfieldOuter}>
          <Text style={styles.inputfieldText}> Quantity </Text>
          <TextInput
            style={styles.inputfield}
            placeholder="Quantity"
            keyboardType="numeric"
            autoComplete={false}
            autoCorrect={false}
            value={quantity}
            onChangeText={setQuantity}
          />
        </View>
        <View style={styles.inputfieldOuter}>
          <Text style={styles.inputfieldText}> Rating </Text>
          <TextInput
            style={styles.inputfield}
            placeholder="Rating"
            keyboardType="numeric"
            autoComplete={false}
            autoCorrect={false}
            value={rating}
            onChangeText={setRating}
          />
        </View>
        <View style={styles.inputfieldOuter}>
          <Text style={styles.inputfieldText}> Type </Text>
          <TextInput
            style={styles.inputfield}
            placeholder="Type of Product"
            keyboardType="ascii-capable"
            autoComplete={false}
            autoCorrect={false}
            value={typeOfProduct}
            onChangeText={setTypeOfProduct}
          />
        </View>
        <View style={styles.inputfieldOuter}>
          <Text style={styles.inputfieldText}> URL </Text>
          <TextInput
            style={styles.inputfield}
            placeholder="Image Url"
            keyboardType="ascii-capable"
            autoComplete={false}
            autoCorrect={false}
            value={url}
            onChangeText={setUrl}
            selectTextOnFocus={true}
          />
        </View>
        {pageTitle == "Modify" ? null : (
          <View style={styles.inputfieldOuter}>
            <Text style={styles.inputfieldText}> Category </Text>
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
        )}
      </View>

      <TouchableOpacity style={styles.taskButton} onPress={taskHandler}>
        <Text style={styles.taskButtonText}> {taskButton} </Text>
      </TouchableOpacity>
    </View>
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
  inputfieldOuter: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  inputfieldText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14274E",
  },
  inputfield: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 2,
    width: 250,
    color: "#790C5A",
  },
  taskButton: {
    //borderWidth:1,
    width: 300,
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#206A5D",
    position: "absolute",
    bottom: -300,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    marginBottom: 50,
  },
  taskButtonText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    padding: 15,
    color: "white",
  },
  categoryMenu: {
    width: 240,
    height: 40,
    backgroundColor: "#fafafa",

    //   marginLeft:10,
  },
  categoryText: {
    textAlign: "center",
    fontSize: 20,
  },
  cetegoryContainer: {
    width: 240,
    marginLeft: 10,
    backgroundColor: "#dfdfdf",
  },
});

export default NewProductScreen;
