import React, { Component } from 'react';
import * as Color from './constants/colors';
import Home from './pages/containers/HomeContainer';
import Map from './pages/containers/MapContainer';
import Login from './pages/containers/LoginContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppRegistry, StyleSheet, Text, DrawerLayoutAndroid, ToolbarAndroid, TouchableHighlight, Navigator, View, Image } from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    render() {

        let drawerListItems = [{
            name: 'Home',
            title: 'This is the Home page!',
            icon: 'md-list'
        },{
            name: 'Map',
            title: 'This is the Map page!',
            icon: 'md-pin'
        },{
            name: 'Login',
            title: 'This is the Login page!',
            icon: 'md-log-in'
        }];

        const drawerItems = drawerListItems.map((key, val) => {
            return (
                <TouchableHighlight key={val} onPress={ () => onItemSelected(key.name, key.title) }>
                    <View style={styles.drawerItem}>
                        <Ionicons style={styles.drawerIcon} name={key.icon} size={32} color={Color.md_grey_500} />
                        <Text style={styles.drawerText}>{key.name}</Text>
                    </View>
                </TouchableHighlight>
            )
        });

        const drawerHeaderContent = (
            <View>
                <Image
                    style={{width: 75, height: 75, borderRadius: 50, margin: 15}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
                <Text style={{color: Color.md_white_1000, fontSize: 16, fontWeight: 'bold', marginBottom: 15, alignSelf: 'flex-end'}}>Martin Kogut</Text>
            </View>
        );

        const drawerHeader = (
            <View>
                <View style={styles.drawerHeader} loggedIn={this.state.loggedIn}>
                    { this.state.loggedIn ? drawerHeaderContent : null }
                </View>
                {drawerItems}
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

        let onItemSelected = (id, title) => {
            this.props.navigator.push({
                component: id,
                id: id,
                name: id,
                title: title
            });
            this.refs['DRAWER_REF'].closeDrawer();
        };

        let renderScene = (route, navigator) => {
            this.props = {navigator};
            switch (route.id) {
                case 'Home':
                    return (<Home />);
                case 'Map':
                    return (<Map />);
                case 'Login':
                    return (<Login />);
                default:
                    return(<Text>PAGE NOT FOUND</Text>);
            }
        };

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => drawerHeader}
                ref={'DRAWER_REF'}>
                <Ionicons.ToolbarAndroid
                    style={styles.toolbar}
                    navIconName="md-menu"
                    titleColor="white"
                    onIconClicked={onIconClicked}
                    onActionSelected={onActionSelected}
                    actions={[
                    { title: 'More', iconName: 'md-more', iconSize: 30, show: 'always' }
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
        flex: 1,
    },
    drawerHeader: {
        height: 'auto',
        flexDirection: 'row',
        backgroundColor: Color.md_teal_500
    },
    drawerItem: {
        flexDirection: 'row',
        padding: 16
    },
    drawerText: {
        fontSize: 20,
        marginLeft: 42,
        fontWeight: 'bold',
        paddingTop: 6
    },
    drawerIcon: {
        marginLeft: 8,
    },
    toolbar: {
        backgroundColor: Color.md_blue_grey_500,
        height: 56,
    },
});

AppRegistry.registerComponent('starter', () => App);