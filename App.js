import React from "react";

import { StyleSheet, View } from "react-native";
import CardList from "./Components/CardList";
import HeaderBox from "./Components/HeaderBox";

export default () => (
    <View style={styles.container}>
        <HeaderBox />
        <CardList />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    }
});
