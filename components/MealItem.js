import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MealItem = ({item}) => {
  return (
    <View style={styles.mealContainer}>
        <Pressable android_ripple={{color: "#ccc"}}>
            <View>
                <Image source={{uri: item.imageUrl}} style={styles.image}/>
                <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailText}>{item.duration}m</Text>
                <Text style={styles.detailText}>{item.complexity}</Text>
                <Text style={styles.detailText}>{item.affordability}</Text>
            </View>
        </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
    mealContainer: {
        backgroundColor: "#fff",
        // padding: 12,
        margin: 6,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .25,
        shadowRadius: 8,
        overflow: "hidden"
    },
    titleText:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 8
    },  
    image:{
        width: "100%",
        height: 200,
        borderRadius: 8
    },
    detailsContainer: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    detailText: {
        fontSize: 18
    }

});
