// Packages Imports
// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

// Components Imports
import MealsList from "../components/MealsList";

// Context Imports
// import { FavoritesContext } from "../store/context/context";

// Data Imports
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  // Get List of Favorites Meals
  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealsIds.includes(meal.id)
  );

  return (
    <>
      {favoriteMeals.length ? (
        <MealsList items={favoriteMeals} />
      ) : (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
      )}
    </>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
