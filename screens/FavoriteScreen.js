import { StyleSheet, Text, View } from "react-native";
import React, {useContext} from "react";
import MealList from "../components/MealList";
import {FavoritesContext} from "../store/contexts/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavouriteScreen = () => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state)=>state.favoriteMeals.ids);
    
    
    const favoriteMeals = MEALS.filter((meal)=>favoriteMealIds.includes(meal.id));
    if (favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>No Favorites Yet</Text>
        </View>
    }
    return <MealList item={favoriteMeals}/>
};

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    }
});
