import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { Slider, Divider, CheckBox, Icon } from "react-native-elements";

const FilterScreen = ({ navigation }) => {
  const [minValue, setMinValue] = useState(2);
  const [maxValue, setMaxValue] = useState(10);

  // list of categories
  const [CatCheck1, setCatCheck1] = useState(false);
  const [CatCheck2, setCatCheck2] = useState(false);
  const [CatCheck3, setCatCheck3] = useState(false);
  const [CatCheck4, setCatCheck4] = useState(false);
  const [CatCheck5, setCatCheck5] = useState(false);
  const [CatCheck6, setCatCheck6] = useState(false);
  const pageType = navigation.state?.params?.type || "Personal";

  const [filteredData, setFilteredData] = useState(
    navigation.getParam("fData")
  );

  const prodData = navigation.getParam("pData");

  useEffect(() => {
    console.log("filter ", filteredData);
  }, [filteredData]);

  const filterHandler = () => {
    const tmp = prodData.filter((data) => {
      return minValue <= data.price && maxValue >= data.price;
    });
    //console.log(tmp);
    setFilteredData(tmp);
  };

  return (
    <View style={(styles.container, styles.contentView)}>
      <View style={{ flexDirection: "row", margin: 2, marginHorizontal: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Personal", { type: pageType })}
        >
          <Icon
            name="arrow-back"
            size={30}
            color={"black"}
            style={{ marginTop: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}> Filter </Text>
      </View>
      <Text style={{ fontWeight: "bold", marginVertical: 10 }}>
        {" "}
        Min Value : {minValue} $
      </Text>
      <Slider
        value={minValue}
        onValueChange={setMinValue}
        maximumValue={100}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5 }}
        thumbStyle={{ height: 20, width: 20 }}
        thumbProps={{
          children: (
            <Icon
              name="usd"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#557C55"
            />
          ),
        }}
      />

      <Text style={{ fontWeight: "bold", marginVertical: 10 }}>
        {" "}
        Max Value : {maxValue} $
      </Text>
      <Slider
        value={maxValue}
        onValueChange={setMaxValue}
        maximumValue={100}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5 }}
        thumbStyle={{ height: 20, width: 20 }}
        thumbProps={{
          children: (
            <Icon
              name="usd"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#557C55"
            />
          ),
        }}
      />

      <Divider
        width={5}
        color="#292C6D"
        style={{ width: "100%", marginVertical: 20, borderRadius: 30 }}
      />

      <Text
        style={{ fontWeight: "bold", alignSelf: "center", marginBottom: 10 }}
      >
        {" "}
        Category{" "}
      </Text>
      <ScrollView>
        <CheckBox
          checked={CatCheck1}
          title="With Offer"
          onPress={() => setCatCheck1(!CatCheck1)}
          checked={CatCheck1}
        />

        {/* <CheckBox
          checked={CatCheck2}
          title="Fruits"
          onPress={() => setCatCheck2(!CatCheck2)}
          checked={CatCheck2}
        />

        <CheckBox
          checked={CatCheck3}
          title="meat"
          onPress={() => setCatCheck3(!CatCheck3)}
          checked={CatCheck3}
        />

        <CheckBox
          checked={CatCheck4}
          title="frozenFood"
          onPress={() => setCatCheck4(!CatCheck4)}
          checked={CatCheck4}
        />

        <CheckBox
          checked={CatCheck5}
          title="bakeryFood"
          onPress={() => setCatCheck5(!CatCheck5)}
          checked={CatCheck5}
        />

        <CheckBox
          checked={CatCheck6}
          title="dairy"
          onPress={() => setCatCheck6(!CatCheck6)}
          checked={CatCheck6}
        /> */}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={filterHandler}
      >
        <Text>Apply </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  contentView: {
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1C6DD0",
    marginVertical: 10,
    alignSelf: "center",
    marginLeft: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#D3DEDC",
    padding: 10,
    marginTop: 10,
  },
});

export default FilterScreen;
