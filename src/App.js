import React, { Component } from 'react';
import * as Color from './constants/colors';
import Map from './pages/containers/MapContainer';
import Home from './pages/containers/HomeContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppRegistry, StyleSheet, Text, DrawerLayoutAndroid, ToolbarAndroid, TouchableHighlight, Navigator, View } from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let drawerListItems = (
            <View style={styles.drawer}>
                <TouchableHighlight onPress={ () => onItemSelected('Home', 'This is the about page!') }>
                    <Text style={styles.drawerItem}>Home</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={ () => onItemSelected('Map', 'This is the about page!') }>
                    <Text style={styles.drawerItem}>Map</Text>
                </TouchableHighlight>
            </View>
        );

        let onActionSelected = (position) => {
            if (position === 0) {
                // index of 'Settings'
            }
        };

        let onIconClicked = () => {
            this.refs['DRAWER_REF'].openDrawer();
        };

        let onItemSelected = (id, message) => {
            this.props.navigator.push({
                component: id,
                id: id,
                name: id
            });
            this.refs['DRAWER_REF'].closeDrawer();
        };

        let renderScene = (route, navigator) => {
            this.props = {navigator};
            switch (route.id) {
                case 'Home':
                    return (<Home navigator={navigator} />);
                case 'Map':
                    return (<Map navigator={navigator} />);
                default:
                    return(<Text>PAGE NOT FOUND</Text>);
            }
        };

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => drawerListItems}
                ref={'DRAWER_REF'}>
                <Ionicons.ToolbarAndroid
                    style={styles.toolbar}
                    navIconName="md-menu"
                    titleColor="white"
                    onIconClicked={onIconClicked}
                    onActionSelected={onActionSelected}
                    actions={[
                    { title: 'Settings', iconName: 'md-settings', iconSize: 30, show: 'ifRoom' }
                    ]}
                />
                <Navigator
                    ref="navigator"
                    initialRoute={{ id:'Home', name: 'Home', component: Home }}
                    renderScene={(route, navigator) => renderScene(route, navigator)} />
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    drawer: {
        flex: 1
    },
    drawerItem: {
        padding: 12,
        fontSize: 16,
        textAlign: 'left',
        width: '100%',
        color: Color.md_white_1000,
        backgroundColor: Color.md_blue_grey_500
    },
    toolbar: {
        backgroundColor: '#a9a9a9',
        height: 56,
    },
});

AppRegistry.registerComponent('starter', () => App);