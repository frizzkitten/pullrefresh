import React from "react";

import { View, Text, StyleSheet, Animated } from "react-native";
import DownArrow from "./SVG/DownArrow";
import RotateCW from "./SVG/RotateCW";

const MAX_FONT_SIZE = 16;
const ICON_COLOR = "black";

// refreshing: whether should show a "currently updating" icon
// visibility: how close you are to starting a refresh. anything
// above 1 indicates that you are at a max
export default ({ refreshing, visibility }) => {
    const scale = visibility < 0 ? 0 : visibility > 1 ? 1 : visibility;

    return (
        <View>
            {refreshing ? (
                <Animated.View style={styles.refreshing}>
                    <RotateCW stroke={ICON_COLOR} />
                </Animated.View>
            ) : (
                <View
                    style={
                        visibility <= 0
                            ? styles.invisible
                            : styles.not_refreshing
                    }
                >
                    <DownArrow
                        stroke={ICON_COLOR}
                        style={{ transform: [{ scale }], opacity: scale }}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    refreshing: { height: 24, marginTop: 30 },
    not_refreshing: { height: 24, marginTop: -24 },
    invisible: { display: "none" }
});
