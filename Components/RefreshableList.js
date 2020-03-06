import React from "react";

import { ScrollView } from "react-native";
import RefreshIcon from "./RefreshIcon";

const START_REFRESH_AT = -80;

const REFRESH_ICON_HEIGHT = 24;
const REFRESH_ICON_MARGIN_TOP = 30;
const TOTAL_REFRESH_ICON_HEIGHT = REFRESH_ICON_HEIGHT + REFRESH_ICON_MARGIN_TOP;

export default class RefreshableList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // the distance the user has scrolled
            scroll_y: 0,
            // true if the user started scrolling during a refresh
            // and is still scrolling
            holding_since_refresh: false,
            // the y coordinate when a refresh was initiated
            let_go_at: -TOTAL_REFRESH_ICON_HEIGHT
        };
    }

    // on scroll, check if already refreshing, and if not,
    // check if it's high enough to refresh,
    _handle_scroll = event => {
        const { y } = event.nativeEvent.contentOffset;
        // update y in state
        if (y < 0)
            this.setState({
                scroll_y: y,
                holding_since_refresh:
                    this.props.refreshing || this.state.holding_since_refresh
            });
        // if scroll_y is negative, set it to 0
        // ignore any positive y, no need to keep track of that
        else if (this.state.scroll_y < 0) this.setState({ scroll_y: 0 });
    };

    // when scrolling ends, refresh if needed
    _handle_scroll_end = event => {
        // y scroll position
        const { y } = event.nativeEvent.contentOffset;
        // check if should refresh
        if (
            // start if scrolled high enough
            y <= START_REFRESH_AT &&
            // don't refresh if already refreshing
            !this.props.refreshing &&
            // don't refresh if user is still holding scroll from last refresh
            !this.state.holding_since_refresh
        ) {
            this.props.on_refresh();
            this.setState({ let_go_at: y });
        }
    };

    // when scroll momentum ends the user can't be holding the scroll
    // anymore, so allow scroll refresh to happen again
    _handle_momentum_scroll_end = () =>
        this.setState({ holding_since_refresh: false });

    render() {
        const {
            style,
            children,
            contentContainerStyle,
            refreshing,
            on_refresh
        } = this.props;
        const { scroll_y, holding_since_refresh } = this.state;

        return (
            <ScrollView
                style={style}
                contentContainerStyle={contentContainerStyle}
                onScroll={this._handle_scroll}
                onScrollEndDrag={this._handle_scroll_end}
                onMomentumScrollEnd={this._handle_momentum_scroll_end}
                scrollEventThrottle={16}
                contentOffset={{
                    x: 0,
                    y: this.state.let_go_at + TOTAL_REFRESH_ICON_HEIGHT
                }}
            >
                <RefreshIcon
                    refreshing={refreshing}
                    visibility={
                        holding_since_refresh ? 0 : scroll_y / START_REFRESH_AT
                    }
                />
                {children}
            </ScrollView>
        );
    }
}
