import React, {Component} from 'React';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, logout} from '../../actions/action';


class MainPage extends Component{
    constructor(props) {
        super(props);
    }

    onPress(){
        this.props.logout();
    }

    render (){
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"
                />
                <Text style={styles.text}>
                    Welcome to Login App!
                </Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.onPress()}>
                    <Text style={styles.buttonText}>
                        LOGOUT
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
        logout : logout
    }, dispatch);
}

export default connect(mapStateToProps, dispatchToProps)(MainPage)

const styles = StyleSheet.create({
    container:{
        padding: 20
    },

    text:{
        textAlign: 'center',
        fontSize: 40,
        height: 150,
        color: '#000',
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingTop: 50
    },

    buttonContainer:{
        backgroundColor: '#2980b9',
        paddingVertical: 20
    },

    buttonText:{
        textAlign: 'center',
        fontWeight: '700',
        color: "#FFF"
    }


});
