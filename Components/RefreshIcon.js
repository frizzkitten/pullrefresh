import React from "react";

import { View, Text, Animated } from "react-native";
import DownArrow from "./SVG/DownArrow";
import RotateCW from "./SVG/RotateCW";

const MAX_FONT_SIZE = 16;
const ICON_COLOR = "black";

// refreshing: whether should show a "currently updating" icon
// visibility: how close you are to starting a refresh. anything
// above 1 indicates that you are at a max
export default class RefreshIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { marginTop: new Animated.Value(-24) };
    }

    componentDidUpdate(prevProps) {
        // when refreshing stops, smoothly transition out the spinning arrow
        if (prevProps.refreshing && !this.props.refreshing)
            this._start_disappear_animation();
        else if (!prevProps.refreshing && this.props.refreshing)
            this.setState({ marginTop: new Animated.Value(30) });
    }

    // initiate the animation the removes the spinning arrow
    _start_disappear_animation = () => {
        Animated.timing(this.state.marginTop, {
            toValue: -24,
            duration: 300
        }).start();
    };

    render() {
        const { refreshing, visibility } = this.props;

        const scale = visibility < 0 ? 0 : visibility > 1 ? 1 : visibility;
        const marginTop = this.state.marginTop || -24;

        return (
            <Animated.View style={{ marginTop, height: 24 }}>
                {refreshing ? (
                    <RotateCW stroke={ICON_COLOR} />
                ) : (
                    <DownArrow
                        stroke={ICON_COLOR}
                        style={{ transform: [{ scale }], opacity: scale }}
                    />
                )}
            </Animated.View>
        );
    }
}
