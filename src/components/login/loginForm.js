import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, logout} from '../../actions/action';

class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            pw:null
        };
    }

    onPress(){
        const id = this.state.id;
        const pw = this.state.pw;
        console.log("id",id);
        console.log("pw",pw);

        this.props.login(id, pw);
    }

    render (){
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"
                />
                <TextInput
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={(text) => this.setState({id:text})}
                    value={this.state.id}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry={true}
                    returnKeyType="go"
                    style={styles.input}
                    onChangeText={(text) => this.setState({pw:text})}
                    value={this.state.pw}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.onPress()}>
                    <Text style={styles.buttonText}>
                        LOGIN
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
        login : login
    }, dispatch);
}

export default connect(mapStateToProps, dispatchToProps)(LoginForm)

const styles = StyleSheet.create({
    container:{
        padding: 20
    },

    input:{
        height: 40,
        color: '#FFF',
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        paddingHorizontal: 10
    },

    buttonContainer:{
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },

    buttonText:{
        textAlign: 'center',
        fontWeight: '700',
        color: "#FFF"
    }
});