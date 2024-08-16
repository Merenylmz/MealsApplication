import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({title}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitleContainer: {
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
        padding: 6,
        margin: 4,
        marginHorizontal: 24,
        marginVertical: 4
    },
});
