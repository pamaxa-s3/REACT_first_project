import {
    headerApi
} from "../api/api";
import {
    stopSubmit
} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    // isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        login,
        email,
        isAuth
    }
})

export const getAuthUserData = () => {
    return (dispatch) => {
        headerApi.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {
                        id,
                        login,
                        email
                    } = response.data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                }
            });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        headerApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
                else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'SOME ERROR'
                    dispatch(stopSubmit('login', {
                        
                        _error: message
                    }));
                }
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        headerApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}

export default authReducer;