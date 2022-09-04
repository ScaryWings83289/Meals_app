// Packages Imports
import { useLayoutEffect } from "react";

// Components Import
import MealsList from "../components/MealsList";

// Data Imports
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  // To get all Meals of a particular category
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // Setting different title for each page
  useLayoutEffect(() => {
    // Get Individual category title
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displayMeals} />;
};

export default MealsOverviewScreen;
