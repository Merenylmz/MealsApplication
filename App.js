import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavoriteScreen";
import {Ionicons} from "@expo/vector-icons";
import FavoritesContextProvider from "./store/contexts/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
  return <Drawer.Navigator screenOptions={{
    headerStyle: {backgroundColor: "#351401"},
    headerTintColor: "white",
    sceneContainerStyle: {backgroundColor: "#3f2f25"},
    drawerStyle: {backgroundColor: "#351401"},
    drawerInactiveTintColor: "white",
    drawerActiveBackgroundColor: "#614336",
    drawerActiveTintColor: "white"
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{drawerIcon: ({size, color})=><Ionicons name="list" size={size} color={color}/>}}/>
    <Drawer.Screen name="Favorites" component={FavouriteScreen} options={{drawerIcon: ({size, color})=><Ionicons name="heart" size={size} color={color}/>}}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="MealsOverview" component={MealsOverview} />
            <Stack.Screen name="MealsDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style="light" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
