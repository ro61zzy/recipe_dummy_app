import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Menu from '../../components/Menucards';
import { useGetMealsQuery } from '../../../api/server'
import styles from './homepage.style'

import { SIZES } from '../../constants';
import AppBar from '../../components/AppBar';

const Homepage = () => {
  const { data: meals } = useGetMealsQuery(); // Fetch meals data using the API query

  const renderMenuCards = () => {
    return meals.map((meal, index) => (
      <Menu key={index} meal={meal} />
    ));
  };

  return (
    <SafeAreaView>
      <AppBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.menuCardContainer}>
          {renderMenuCards()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;