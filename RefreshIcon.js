import React from "react";

import { View, Text, StyleSheet } from "react-native";
import SvgExample from "./SvgExample";

const MAX_FONT_SIZE = 16;

// refreshing: whether should show a "currently updating" icon
// visibility: how close you are to starting a refresh. anything
// above 1 indicates that you are at a max
export default ({ refreshing, visibility }) => (
    <View
        style={
            refreshing
                ? styles.refreshing
                : visibility <= 0
                ? styles.invisible
                : styles.not_refreshing
        }
    >
        {refreshing ? (
            <SvgExample />
        ) : (
            <Text
                style={{
                    fontSize: MAX_FONT_SIZE * (visibility >= 1 ? 1 : visibility)
                }}
            >
                getting ready...
            </Text>
        )}
    </View>
);

const styles = StyleSheet.create({
    refreshing: { marginTop: 0 },
    not_refreshing: { height: 20, marginTop: -20 },
    invisible: { display: "none" }
});
