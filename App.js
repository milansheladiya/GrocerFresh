import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Fruits from "./src/screens/Fruits";
import Frozen from './src/screens/Frozen';
import HomeScreen from "./src/screens/HomeScreen";
import Meat from "./src/screens/Meat";
import Vegetables from "./src/screens/Vegetables";
import Bakery from "./src/screens/Bakery";
import Personal from "./src/screens/Personal";



const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    Vegetables : Vegetables,
    Fruits : Fruits,
    Meat: Meat,
    Frozen : Frozen,
    Bakery : Bakery,
    Personal : Personal,
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "Home",
      header: false
    },
  }
);

export default createAppContainer(navigator);