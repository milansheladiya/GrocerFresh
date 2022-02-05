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
import AdminHomeScreen from "./src/screens/Admin/AdminHomeScreen";
import NewProductScreen from "./src/screens/Admin/NewProductScreen";
import CategoryScreen from "./src/screens/Admin/CategoryScreen";
import AdminProductScreen from "./src/screens/Admin/AdminProductScreen";
import AccountScreen from "./src/screens/AccountScreen";
import AdminOrderList from "./src/screens/Admin/AdminOrderList";

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
    CheckoutScreen: CheckoutScreen,
    DeliveryTimeScreen: DeliveryTimeScreen,
    AdminHomeScreen: AdminHomeScreen,
    NewProductScreen: NewProductScreen,
    CategoryScreen: CategoryScreen,
    AdminProductScreen: AdminProductScreen,
    Personal: Personal,
    AccountScreen: AccountScreen,
    AdminOrderList:AdminOrderList
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
