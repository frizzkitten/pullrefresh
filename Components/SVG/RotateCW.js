import React from "react";
import { Animated, Easing } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class RotateCW extends React.Component {
    constructor() {
        super();
        this.rotation = new Animated.Value(0);
    }

    componentDidMount() {
        this._start_rotating();
    }

    _start_rotating() {
        this.animation = Animated.loop(
            Animated.timing(this.rotation, {
                toValue: 1,
                duration: 1500,
                easing: Easing.bezier(0.455, 0.03, 0.515, 0.955)
            })
        );
        this.animation.start();
    }

    componentWillUnmount() {
        this.animation.stop();
    }

    render() {
        const rotate = this.rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
        });

        return (
            <Animated.View style={{ transform: [{ rotate }] }}>
                <Svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    {...this.props}
                >
                    <Path d="M23 4v6h-6" />
                    <Path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                </Svg>
            </Animated.View>
        );
    }
}
