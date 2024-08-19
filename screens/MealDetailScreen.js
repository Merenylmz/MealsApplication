import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {useLayoutEffect, useContext} from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Detail/Subtitle";
import List from "../components/Detail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/contexts/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/Features/favorite";
import { useDispatch, useSelector } from "react-redux";

const MealDetailScreen = ({route, navigation}) => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state)=>state.favoriteMeals.ids);

    const selectedMeal = MEALS.find(meal => meal.id == route.params.mealId);
    const mealIsFavorite = favoriteMealIds.includes(selectedMeal.id);
    const dispatch = useDispatch();

    const changeFavoriteHandler = () =>{
        console.log(favoriteMealIds);
        
        if (mealIsFavorite) {
            dispatch(removeFavorite(selectedMeal.id));
        } else {
            dispatch(addFavorite(selectedMeal.id));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: ()=>{
                return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color={"#f27"} onPress={changeFavoriteHandler}/>
            }
        });
    }, [navigation, changeFavoriteHandler]);
    
    return (
        <ScrollView style={{marginBottom: 30, backgroundColor: "#3f2f25"}}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails item={selectedMeal} textStyle={{color: "#fff"}} />
            <Subtitle title={"Ingredients"}/>
            <List list={selectedMeal.ingredients}/>
            <Subtitle title={"Steps"}/>
            <List list={selectedMeal.steps}/>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "#fff"
    },
});
