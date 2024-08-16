import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {useLayoutEffect} from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Detail/Subtitle";
import List from "../components/Detail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({route, navigation}) => {
    const selectedMeal = MEALS.find(meal => meal.id == route.params.mealId);

    const startButtonPressHandler = () =>{
        Alert.alert("asdasda");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: ()=>{
                return <IconButton icon={"star"} color={"#ff0"} onPress={startButtonPressHandler}/>
            }
        });
    }, [route.params.mealId, selectedMeal.title]);
    
    return (
        <ScrollView style={{marginBottom: 30}}>
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
