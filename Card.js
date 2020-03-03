import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default ({ text }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

const styles = {
    container: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 12.5,
        height: 194,
        width: 315,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginTop: 30,
        padding: 30
    },
    text: {
        fontSize: 17
    }
};
