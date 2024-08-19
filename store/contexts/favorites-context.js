import {createContext, useState} from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: () => {},
    deleteFavorite: () => {}
});

const FavoritesContextProvider = ({children}) => {
    const [favoriteMealIds, setFavoriteMeals] = useState([]);
    
    const addFavorite = (id) =>{
        setFavoriteMeals((currentFavIds)=>[...currentFavIds, id]);
    }

    const deleteFavorite = (id) =>{
        setFavoriteMeals((currentFavIds)=>currentFavIds.filter(mealId=>mealId !== id))
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        deleteFavorite: deleteFavorite
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;