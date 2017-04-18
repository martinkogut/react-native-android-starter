import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';

export default class Root extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false })),
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('starter', () => Root);