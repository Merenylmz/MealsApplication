import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({list}) => {
    return (
        <View>
            {
                list.map((item, index)=>(
                    <View key={index} style={styles.listContainer}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                ))
            }
        </View>
    );
};

export default List;

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: "#e2b497",
        marginVertical: 4,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 28,
        borderRadius: 15,
        padding: 2
    },
    text: {
        textAlign: "center",
        fontSize: 15
    }
});
