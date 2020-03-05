import React from "react";

import { ScrollView, Text, StyleSheet } from "react-native";
import RefreshIcon from "./RefreshIcon";

const START_REFRESH_AT = -80;

export default class RefreshableList extends React.Component {
    constructor(props) {
        super(props);

        // TODO: potentially shouldn't start this at 0
        // will be set at 0 if scrolled past 0
        this.state = { scroll_y: 0 };
    }

    // TODO: on scroll, check if already refreshing, and if not,
    // check if it's high enough to refresh,
    _handle_scroll = event => {
        const { y } = event.nativeEvent.contentOffset;
        if (y < 0) {
            // if not already refreshing but should be based on y position,
            // start refresh
            if (y <= START_REFRESH_AT && !this.props.refreshing) {
                this.props.on_refresh();
                // scroll down so that the page doesn't jump
                // this._scroll_down(y);
            }
            // update y in state
            this.setState({ scroll_y: y });
        }

        // if scroll_y is negative, set it to 0
        else if (this.state.scroll_y < 0) this.setState({ scroll_y: 0 });
    };

    // _scroll_down = y => {
    //     let { scroll_view } = this;
    //     console.log("scroll_view: ", scroll_view);
    //     scroll_view.scrollTo({ y: -24, animated: false });
    // };

    render() {
        const {
            style,
            children,
            contentContainerStyle,
            refreshing,
            on_refresh
        } = this.props;
        const { scroll_y } = this.state;

        const scroll_style = refreshing
            ? styles.refreshing
            : styles.not_refreshing;

        return (
            <ScrollView
                style={{ ...style, ...scroll_style }}
                contentContainerStyle={contentContainerStyle}
                onScroll={this._handle_scroll}
                scrollEventThrottle={16}
                ref={scroll_view => (this.scroll_view = scroll_view)}
            >
                <RefreshIcon
                    refreshing={refreshing}
                    visibility={scroll_y / START_REFRESH_AT}
                />
                {children}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    refreshing: {},
    not_refreshing: {}
});
