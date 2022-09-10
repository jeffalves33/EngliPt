import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9d6bf5", 
        width: "100%", 
        height: "10%", 
        flexDirection: "row"
    },

    containerAux: {
        width: "33%"
    },

    logo:{
        fontSize: 40
    },

    containerMenu: {
        width: "33%", 
        alignSelf: "center"
    },

    menuImage: {
        width: 27, 
        height: 27, 
        alignSelf: "flex-end"
    }
});

export default styles;