import { FlatList, StyleSheet, Text, View } from "react-native";
import {useLayoutEffect} from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";


const MealsOverview = ({route, navigation}) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })
    
    
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find(category=>category.id == catId).title; 
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);
    
    
    return (
        <MealList item={displayedMeals}/>
    );
};

export default MealsOverview;

const styles = StyleSheet.create({});
