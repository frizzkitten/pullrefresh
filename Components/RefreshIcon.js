import React from "react";

import { Animated } from "react-native";
import DownArrow from "./SVG/DownArrow";
import RotateCW from "./SVG/RotateCW";

const MAX_FONT_SIZE = 16;
const ICON_COLOR = "black";

// icon that goes from one appearance when leading up to
// refreshing to another when actually refreshing
class RefreshIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { marginTop: new Animated.Value(-this.props.icon_height) };
    }

    componentDidUpdate(prevProps) {
        // when refreshing stops, smoothly transition out the spinning arrow
        if (prevProps.refreshing && !this.props.refreshing)
            this._start_disappear_animation();
        else if (!prevProps.refreshing && this.props.refreshing)
            this.setState({
                marginTop: new Animated.Value(this.props.margin_top)
            });
    }

    // initiate the animation the removes the spinning arrow
    _start_disappear_animation = () => {
        Animated.timing(this.state.marginTop, {
            toValue: -this.props.icon_height,
            duration: 300
        }).start();
    };

    render() {
        const { refreshing, visibility, icon_height, margin_top } = this.props;

        // make sure scale is a number between 0 and 1
        const scale = visibility < 0 ? 0 : visibility > 1 ? 1 : visibility;
        // -icon_height will ensure it is just out of sight
        const marginTop = this.state.marginTop || -icon_height;

        return (
            <Animated.View style={{ marginTop, height: icon_height }}>
                {refreshing ? (
                    <RotateCW stroke={ICON_COLOR} height={icon_height} />
                ) : (
                    <DownArrow
                        stroke={ICON_COLOR}
                        style={{ transform: [{ scale }], opacity: scale }}
                        height={icon_height}
                    />
                )}
            </Animated.View>
        );
    }
}

RefreshIcon.defaultProps = {
    icon_height: 24,
    margin_top: 30
};

export default RefreshIcon;
