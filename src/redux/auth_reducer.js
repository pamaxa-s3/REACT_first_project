import {
    headerApi
} from "../api/api";

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
                else if (response.data.resultCode === 1) {
                    alert('bad password');
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