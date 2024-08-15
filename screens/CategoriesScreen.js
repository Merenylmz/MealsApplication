import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {
  const CategoryRenderItem = (itemData) => {
    const pressHandler = () => {
        return navigation.navigate("MealsOverview", {
            categoryId: itemData.item.id
        });
    };
    return (
      <CategoryGridTile
        item={itemData.item}
        style={{ backgroundColor: itemData.item.color }}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={CategoryRenderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
