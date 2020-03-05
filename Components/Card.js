import React from "react";

import { View, Text, StyleSheet, Animated } from "react-native";

const height = 194;

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { marginTop: new Animated.Value(30) };
    }

    // componentDidMount() {
    //     // Animated.timing(this.state.marginTop, {
    //     //     toValue: 30,
    //     //     duration: 500
    //     // }).start();
    // }

    render() {
        return (
            <View
                style={{
                    ...styles.container,
                    marginTop: this.state.marginTop
                }}
            >
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 12.5,
        height,
        width: 315,
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 30
    },
    text: {
        fontSize: 17
    }
};
