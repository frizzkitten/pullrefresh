import React from "react";
import { Animated, Easing } from "react-native";
import Svg, { Path } from "react-native-svg";

class RotateCW extends React.Component {
    constructor(props) {
        super(props);
        // value that will change with rotation animation from 0 to 1
        this.rotation = new Animated.Value(0);
    }

    // start animation on mount
    componentDidMount() {
        this._start_rotating();
    }

    // create rotation animation and start it
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

    // stop the animation on unmount
    componentWillUnmount() {
        this.animation.stop();
    }

    render() {
        // map 0 to 1 values to "0deg" to "360deg" values
        const rotate = this.rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
        });

        return (
            <Animated.View style={{ transform: [{ rotate }] }}>
                <Svg
                    width={this.props.height}
                    height={this.props.height}
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

RotateCW.defaultProps = {
    height: 24
};

export default RotateCW;
