import React from "react";

import { ScrollView } from "react-native";
import RefreshIcon from "./RefreshIcon";

const START_REFRESH_AT = -54;

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
            if (y <= START_REFRESH_AT && !this.props.refreshing)
                this.props.on_refresh();
            // update y in state
            this.setState({ scroll_y: y });
        }

        // if scroll_y is negative, set it to 0
        else if (this.state.scroll_y < 0) this.setState({ scroll_y: 0 });
    };

    render() {
        const {
            style,
            children,
            contentContainerStyle,
            refreshing,
            on_refresh
        } = this.props;
        const { scroll_y } = this.state;

        return (
            <ScrollView
                style={style}
                contentContainerStyle={contentContainerStyle}
                onScroll={this._handle_scroll}
                scrollEventThrottle={16}
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
