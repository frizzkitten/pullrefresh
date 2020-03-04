import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default props => (
    <Svg
        width={24}
        height={24}
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
