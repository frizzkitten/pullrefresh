import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

class PullToRefresh extends React.Component {
    componentDidMount() {
        // TODO: set up listener for scrolling to top and above
    }

    componentWillUnmount() {
        // TODO: remove listeners
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.on_refresh}>
                    <Text>Yo</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default PullToRefresh;
