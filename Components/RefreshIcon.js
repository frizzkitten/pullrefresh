import React from "react";

import { View, Text, StyleSheet } from "react-native";
import DownArrow from "./SVG/DownArrow";
import RotateCW from "./SVG/RotateCW";

const MAX_FONT_SIZE = 16;
const ICON_COLOR = "black";

// refreshing: whether should show a "currently updating" icon
// visibility: how close you are to starting a refresh. anything
// above 1 indicates that you are at a max
export default ({ refreshing, visibility }) => {
    const scale = visibility < 0 ? 0 : visibility > 1 ? 1 : visibility;

    if (refreshing)
        return <RotateCW stroke={ICON_COLOR} style={styles.refreshing} />;
    else
        return (
            <DownArrow
                stroke={ICON_COLOR}
                style={{
                    transform: [{ scale }],
                    opacity: scale,
                    ...(visibility <= 0
                        ? styles.invisible
                        : styles.not_refreshing)
                }}
            />
        );
};

const styles = StyleSheet.create({
    refreshing: { marginTop: 0 },
    not_refreshing: { height: 20, marginTop: -20 },
    invisible: { display: "none" }
});
