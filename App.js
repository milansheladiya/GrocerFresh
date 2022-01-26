import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import CartScreen from "./src/screens/CartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OtherLoginScreen from "./src/screens/OtherLoginsScreen";
import WeeklyDealScreen from "./src/screens/WeeklyDealScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import SortingScreen from "./src/screens/SortingScreen";
import FilterScreen from "./src/screens/FilterScreen";
import Personal from "./src/screens/Personal";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import DeliveryTimeScreen from "./src/screens/DeliveryTimeScreen";
import AccountScreen from "./src/screens/AccountScreen";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    LoginScreen: LoginScreen,
    OtherLoginScreen: OtherLoginScreen,
    WeeklyDealScreen: WeeklyDealScreen,
    CartScreen: CartScreen,
    SignupScreen: SignupScreen,
    FavouriteScreen: FavouriteScreen,
    SortingScreen: SortingScreen,
    FilterScreen: FilterScreen,
    Personal: Personal,
    CheckoutScreen: CheckoutScreen,
    DeliveryTimeScreen: DeliveryTimeScreen,
    AccountScreen: AccountScreen,
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      title: "Grocer Fresh",
      header: false,
    },
  }
);

export default createAppContainer(navigator);
