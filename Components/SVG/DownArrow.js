import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

function DownArrow(props) {
    return (
        <Svg
            width={props.height}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <Path d="M12 5v14M19 12l-7 7-7-7" />
        </Svg>
    );
}

DownArrow.defaultProps = { height: 24 };

export default DownArrow;
