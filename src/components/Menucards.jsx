import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './component.style.js';

const Menu = ({ meal }) => {
  return (
    <View style={styles.menucontainer}>
      <View style={styles.menu_card}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.menu_image} />
        <Text style={styles.menu_name}>{meal.strMeal}</Text>
        <Text style={styles.menu_area}>Area: {meal.strArea}</Text>
      </View>
    </View>
  );
};

export default Menu;