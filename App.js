import React from "react";

import { StyleSheet, Text, View } from "react-native";
// import CardList from "./CardListBasic";
import CardList from "./CardList";
import HeaderBox from "./HeaderBox";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderBox />
                <CardList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
        // justifyContent: "center"
    }
});
