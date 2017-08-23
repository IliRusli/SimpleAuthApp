import React, {Component} from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import Login from '../components/login/login';
import MainPage from '../components/login/mainPage';
import * as routeActions from '../reducers/routes/actions';

export const AppNavigator = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login ',
            backgroundColor: '#FFF'
        },
    },
    MainPage: {
        screen: MainPage,
        navigationOptions: {
            title: 'Welcome Page',
            backgroundColor: '#FFF'
        },
    },
});

class Routes extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.hardwareBackPressListener = null;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', ()=>this.handleBackButtonClick());
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', ()=>this.handleBackButtonClick());
    }

    handleBackButtonClick() {
        if (this.props.nav.routes.length > 1) {
            this.props.dispatch(routeActions.back());
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (<AppNavigator
            navigation={addNavigationHelpers({ dispatch: this.props.dispatch , state: this.props.nav })}/>         )
    }
}
function mapStateToProps(state) {
    return {nav: state.nav};
}

//If you do not provide your own mapDispatchToProps function when calling connect(), React Redux will provide a default version, which simply returns the dispatch function as a prop. That means that if you do provide your own function, dispatch is not automatically provided. If you still want it available as a prop, you need to explicitly return it yourself in your mapDispatchToProps implementation.
export default connect(mapStateToProps, null)(Routes);