import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button} from 'react-native';
import LoginForm from './loginForm';
import SimpleAuth from './simpleAuth';



export default class Login extends Component{
    render (){
        return (
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
                <View style = {styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.png')}
                    />
                    <Text style={styles.text}> Welcome to Login App!</Text>
                </View>
                <View style = {styles.formContainer}>
                    <LoginForm/>
                    <SimpleAuth/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db'
    },

    logoContainer:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },

    text: {
        color: 'white',
        textAlign: 'center',
        width: 160,
        opacity: 0.8
    },

    formContainer:{
    },
});
