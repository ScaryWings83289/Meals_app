// Packages Imports
import { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

// Components Import
import MealItem from "../components/MealItem";

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

  // Get Individual Meal Item
  const renderMealItem = (itemData) => {
    const { id, title, imageUrl, duration, complexity, affordability } =
      itemData.item;

    const mealItemProps = {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
