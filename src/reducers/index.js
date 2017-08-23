import { combineReducers } from 'redux';
import loginAuth from './loginAuth';
import nav from './routes/reducer';


const rootReducer = combineReducers({
    loginAuth,
    nav
});

export default rootReducer;