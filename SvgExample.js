import React from "react";
import Svg, { Path } from "react-native-svg";

export default () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <Path d="M23 4v6h-6" />
        <Path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </Svg>
);

// import React from "react";
// import { View, StyleSheet } from "react-native";
// import Svg, { Circle, Rect } from "react-native-svg";
//
// export default class SvgExample extends React.Component {
//     render() {
//         return (
//             <View
//                 style={[
//                     StyleSheet.absoluteFill,
//                     { alignItems: "center", justifyContent: "center" }
//                 ]}
//             >
//                 <Svg height="50%" width="50%" viewBox="0 0 100 100">
//                     <Circle
//                         cx="50"
//                         cy="50"
//                         r="45"
//                         stroke="blue"
//                         strokeWidth="2.5"
//                         fill="green"
//                     />
//                     <Rect
//                         x="15"
//                         y="15"
//                         width="70"
//                         height="70"
//                         stroke="red"
//                         strokeWidth="2"
//                         fill="yellow"
//                     />
//                 </Svg>
//             </View>
//         );
//     }
// }
