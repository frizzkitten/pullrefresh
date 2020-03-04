import React from "react";

import { StyleSheet, View } from "react-native";

export default function HeaderBox() {
    return <View style={styles.container} />;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        height: 50,
        width: "100%"
    }
});
