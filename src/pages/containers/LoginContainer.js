import React, { Component } from 'react';
import * as COLOR from '../../constants/colors';
import { AppRegistry, StyleSheet, Navigator, View, Text, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let provider = [{
            name: 'facebook',
            text: 'Sign In with Facebook'
        },{
            name: 'twitter',
            text: 'Sign In with Twitter'
        }];

        let connectProvider = (authProvider) => {
            // TODO: Implement authentication provider
            alert(`connect ${authProvider}`);
        };

        return (
            <View style={styles.container}>
                {
                    provider.map((key, val) => {
                        return (
                            <TouchableHighlight key={val} onPress={ () => connectProvider(key.name) } style={styles.btnLayout}>
                                <View style={styles.btnContainer}>
                                    <Icon name={key.name} size={25} color={'#fff'} />
                                    <Text style={styles.btnText}>{key.text}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })
                }
            </View>
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
    btnLayout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        backgroundColor: COLOR.md_blue_grey_500,
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnText: {
        fontSize: 18,
        color: '#FAFAFA',
        marginLeft: 10,
        marginTop: 2,
        minWidth: 200
    }
});

AppRegistry.registerComponent('starter', () => LoginContainer);