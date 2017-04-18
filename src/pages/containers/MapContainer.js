import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator } from 'react-native';
import MapView from 'react-native-maps';

export default class MapContaienr extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MapView
                style={styles.map}
                // other props
            />
        );
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

AppRegistry.registerComponent('starter', () => MapContaienr);