import { configureStore } from "@reduxjs/toolkit";
import favoriteReducers from "./Features/favorite";

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducers
    }
});
