import React from "react";

import { View, Text, StyleSheet, Animated } from "react-native";

const height = 194;

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.solidness = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.solidness, {
            toValue: 1,
            duration: 1000
        }).start();
    }

    render() {
        const marginTop = this.solidness.interpolate({
            inputRange: [0, 1],
            outputRange: [-height, 30]
        });

        return (
            <Animated.View
                style={{
                    ...styles.container,
                    marginTop: marginTop || 30,
                    opacity: this.solidness || 1
                }}
            >
                <Text style={styles.text}>{this.props.text}</Text>
            </Animated.View>
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
