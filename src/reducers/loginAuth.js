const loginAuthInitialState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

export default loginAuth =  (state = loginAuthInitialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                username: action.username,
                password: action.password
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                password: ''
            };
        default:
            return state;
    }
}