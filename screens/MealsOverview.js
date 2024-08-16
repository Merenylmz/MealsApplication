import { FlatList, StyleSheet, Text, View } from "react-native";
import {useLayoutEffect} from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";


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
