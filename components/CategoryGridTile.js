import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTile = ({item, style, onPress}) => {
  return (
    <View style={[styles.gridItem, style]}>
        <Pressable style={{flex: 1}} android_ripple={{color: "#cccccc"}} onPress={onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        // backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {width: 0, height:2},
        shadowOpacity: .25,
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : null
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 8,
    },
    title:{
        fontWeight: "bold",
        fontSize: 18
    }

});
