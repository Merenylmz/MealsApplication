import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverview = ({route}) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })
    
    
    const renderMealItem = (itemData) =>{
        return <MealItem item={itemData.item}/>
    }
    return (
        <View>
            <FlatList
                data={displayedMeals}
                keyExractor={(item)=>item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealsOverview;

const styles = StyleSheet.create({});
