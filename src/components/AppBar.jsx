import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants';

const AppBar = ({ navigation, title }) => {
  return (
    <View style={styles.container}>
      {/* Left Icon */}
      <Ionicons
        name="menu-sharp"
        size={24}
        color="black"
        style={styles.icon}
        onPress={() => navigation.openDrawer()}
      />

      {/* Title */}
      <Text style={styles.title}>Recipe_App</Text>

      {/* Right Icon */}
      <FontAwesome
        name="user-circle-o"
        size={24}
        color="black"
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppBar;
