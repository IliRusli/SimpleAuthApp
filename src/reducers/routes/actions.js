import { NavigationActions } from 'react-navigation';

export const navigate = (routeName, params) => {
    let payload = {};

    if (params) {
        payload.params = params;
    }

    if (routeName) {
        payload.routeName = routeName;
    }

    return (dispatch) => {
        dispatch(NavigationActions.navigate(payload));
    };
};

export const reset = (routeName, params) => {
    let payload = {};

    if (params) {
        payload.params = params;
    }

    if (routeName) {
        payload.routeName = routeName;
    }

    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate(payload)
        ]
    });

    return (dispatch) => {
        dispatch(resetAction);
    };
};

export const back = (routeName, params) => {
    let payload = {};

    if (params) {
        payload.params = params;
    }

    if (routeName) {
        payload.routeName = routeName;
    }

    return (dispatch) => {
        dispatch(NavigationActions.back(payload));
    };
};