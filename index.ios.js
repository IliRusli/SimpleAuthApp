/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
//import Login from './src/components/login/login';
import store from './src/store/configureStore';
import Routes from './src/routes/Routes';
import {
    AppRegistry,
    Linking
} from 'react-native';

//import MainPage from "./src/components/login/mainPage";

class simpleAuthApp extends Component {

    componentDidMount() {
        Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('Initial url is: ' + url);
            }
        }).catch(err => console.error('An error occurred', err));
    }
    render() {
        return (
            <Provider store={store}>
              <Routes/>
            </Provider>
        );
    };
}
;


AppRegistry.registerComponent('simpleAuthApp', () => simpleAuthApp);
