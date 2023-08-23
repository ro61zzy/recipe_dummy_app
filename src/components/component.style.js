import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../constants";

const styles = StyleSheet.create({
    menu_card: {
        padding: 8,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        flex: 1, // Take up equal space within the row
        margin: 8, // Add some spacing between cards
    },
    menucontainer: {
        flexDirection: "row", // Arrange items in a row
        flexWrap: "wrap", // Wrap items to the next row when necessary
        justifyContent: "space-between", // Space evenly between cards
    },
    menu_image: {
        height: 200, 
        resizeMode: "cover", 
        borderRadius: 10, 
    },
    menu_name: {
        color: COLORS.tertiary,
        fontSize: 20,
    }
});

export default styles;
