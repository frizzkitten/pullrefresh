import React from "react";

import { StyleSheet } from "react-native";
import RefreshableList from "./RefreshableList";
import Card from "./Card";

// length of time to wait before adding a card
const WAIT_TIME = 2000;

// a scrollable list that holds only cards and refreshes on pulldown
export default class CardList extends React.Component {
    constructor(props) {
        super(props);

        // start out with 2 and 1 just to show what they look like
        this.state = { cards: [2, 1] };
    }

    // tells component that refresh has started, calls data retriever,
    // tells itself it's done refreshing
    _on_refresh = () => {
        this.setState({ refreshing: true });

        this._wait_then_add_card()
            .then(() => this.setState({ refreshing: false }))
            .catch(error => console.log(error));
    };

    // waits two seconds then adds a card
    _wait_then_add_card = async () =>
        new Promise((resolve, reject) => {
            setTimeout(() => this._add_card().then(resolve), WAIT_TIME);
        });

    // adds a card to the beginning of the cards array
    _add_card = async () =>
        new Promise((resolve, reject) => {
            // make a copy of the cards array
            let cards = this.state.cards.slice(0);
            // put the new card at the beginning
            cards.unshift(cards.length + 1);
            // save the new cards and resolve successfully
            this.setState({ cards }, () => resolve());
        });

    render() {
        return (
            <RefreshableList
                style={styles.container}
                contentContainerStyle={content_container_styles.container}
                refreshing={this.state.refreshing}
                on_refresh={this._on_refresh}
            >
                {this.state.cards.map(card_num => (
                    <Card text={`Tile ${card_num}`} key={card_num} />
                ))}
            </RefreshableList>
        );
    }
}

const styles = StyleSheet.create({
    container: { width: "100%" }
});

const content_container_styles = StyleSheet.create({
    container: { alignItems: "center" }
});
