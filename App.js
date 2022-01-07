import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from "./src/screens/SignupScreen";
import CartScreen from "./src/screens/CartScreen";
import LoginScreen from './src/screens/LoginScreen';
import OtherLoginScreen from './src/screens/OtherLoginsScreen';
import WeeklyDealScreen from "./src/screens/WeeklyDealScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import SortingScreen from "./src/screens/SortingScreen";
import FilterScreen from "./src/screens/FilterScreen";
import Fruits from "./src/screens/Fruits";
import Frozen from './src/screens/Frozen';
import Meat from "./src/screens/Meat";
import Vegetables from "./src/screens/Vegetables";
import Bakery from "./src/screens/Bakery";
import Personal from "./src/screens/Personal";



const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    LoginScreen: LoginScreen,
    OtherLoginScreen: OtherLoginScreen,
    WeeklyDealScreen:WeeklyDealScreen,
    CartScreen:CartScreen,
    SignupScreen:SignupScreen,
    FavouriteScreen:FavouriteScreen,
    SortingScreen:SortingScreen,
    FilterScreen:FilterScreen,
    Vegetables : Vegetables,
    Fruits : Fruits,
    Meat: Meat,
    Frozen : Frozen,
    Bakery : Bakery,
    Personal : Personal,
  },
  {
    initialRouteName: "OtherLoginScreen",
    defaultNavigationOptions: {
      title: "Grocer Fresh",
      //header: false
    },
  }
);

export default createAppContainer(navigator);