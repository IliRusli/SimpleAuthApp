import React, {Component} from 'React';
import {StyleSheet, View, Platform, TouchableOpacity, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, logout, facebookLogin, googleLogin} from '../../actions/action';
import {google, facebook} from 'react-native-simple-auth';


class SimpleAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            pw: null
        };
    }

    onGoogleLogin() {

        console.log('onGoogleLogin');

        let appId = "";
        let callback = "";

        if (Platform.OS === 'ios') {
            appId = '522281535724-olgqhofbmvi41n06uk2ntnqkipeacggv.apps.googleusercontent.com';
            callback = 'com.googleusercontent.apps.522281535724-olgqhofbmvi41n06uk2ntnqkipeacggv:/oauth2redirect';
        }
        else if (Platform.OS === 'android') {
            appId = '522281535724-6tcunlm86eoef8g2thcbtnq5mgkqmn1e.apps.googleusercontent.com';
            callback = 'com.simpleauthapp:/oauth2redirect';
        }

        if (appId) {
        google({

            appId: appId,
            callback: callback,
        }).then((info) => {


            // info.user - user details from the provider
            // info.credentials - tokens from the provider
            console.log('info : ', info);

            const socialUserInfo = {
                email: info.user.email,
                firstname: info.user.given_name,
                lastname: info.user.family_name
            };

            this.props.googleLogin(info.credentials.access_token, socialUserInfo);

            console.log('after googleLogin');
        }).catch((error) => {
            // error.code
            // error.description
            console.log('Error');
        });

    }}

    onFacebookLogin() {
        facebook({
            appId: '331156983978582',
            callback: 'fb331156983978582://authorize',
        }).then((info) => {
            // info.user - user details from the provider
            // info.credentials - tokens from the provider

            const socialUserInfo = {
                email: info.user.email,
                firstname: info.user.first_name,
                lastname: info.user.last_name
            };

            this.props.facebookLogin(info.credentials.access_token, socialUserInfo);
        }).catch((error) => {
            // error.code
            // error.description

            console.log('Error');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"
                />
                <TouchableOpacity style={styles.buttonContainerG} onPress={() => this.onGoogleLogin()}>
                    <Text style={styles.buttonText}>
                        Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerF} onPress={() => this.onFacebookLogin()}>
                    <Text style={styles.buttonText}>
                        Facebook
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

function mapStateToProps(state) {
    return {
        loginAuth: state.loginAuth
    };
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        logout: logout,
        facebookLogin: facebookLogin,
        googleLogin: googleLogin
    }, dispatch);
}

export default connect(mapStateToProps, dispatchToProps)(SimpleAuth)

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },

    buttonContainerG: {
        backgroundColor: '#b94227',
        paddingVertical: 15
    },

    buttonContainerF: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },

    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        color: "#FFF"
    }


});
