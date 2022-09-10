import React from "react";
import {View, Text, Button} from "react-native";

//import styles from "./styles";

const Body = () => {
    return (
        <View style={{backgroundColor: "pink", width: "100%", height: "80%", alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 30, marginBottom: "30%"}}>Translate Word </Text>
            <Text style={{fontSize: 30, marginBottom: "40%"}}>English Word </Text>
            <Button title="press" style={{}}/>
        </View>
    );
}

export default Body;