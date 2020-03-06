import React from "react";
import Svg, { Path } from "react-native-svg";

// just a nice little arrow that points down
function DownArrow(props) {
    return (
        <Svg
            width={props.height}
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
