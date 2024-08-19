import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealList = ({item}) => {
    const navigation = useNavigation();
    const mealItem = (id) =>{
        navigation.navigate("MealsDetail", {
            mealId: id
        });
    }
    
    const renderMealItem = (itemData) =>{
        return <MealItem item={itemData.item} onPress={mealItem}/>
    }
    return (
        <View style={{marginBottom: 30}}>
            <FlatList
                data={item}
                keyExractor={(item)=>item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealList;

const styles = StyleSheet.create({});
