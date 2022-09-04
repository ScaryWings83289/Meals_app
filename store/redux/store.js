// Packages Imports
import { configureStore } from "@reduxjs/toolkit";

// Reducer Imports
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
