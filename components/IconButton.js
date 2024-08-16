import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

const IconButton = ({icon, color, onPress}) => {
    return (
        <View>
            <Pressable onPress={onPress}>
                <Ionicons name={icon} color={color} size={25}/>
            </Pressable>
        </View>
    );
};

export default IconButton;

const styles = StyleSheet.create({});
