// Packages Imports
import { StyleSheet, FlatList } from "react-native";

// Components Imports
import CategoryGridTile from "../components/CategoryGridTile";

// Data Imports
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  // Create Individual Category
  const renderCategoryItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handlePress}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
