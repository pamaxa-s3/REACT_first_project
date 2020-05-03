const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [{
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 121
        },
        {
            id: 2,
            message: 'Hello My Friend!',
            likesCount: 341
        },
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };

        case UPDATE_NEW_POST_CHANGE: 
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state;
    }

}

export const addPost = () => ({
    type: ADD_POST
})

export const updateNewPostChange = (text) => ({
    type: UPDATE_NEW_POST_CHANGE,
    newText: text
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export default profileReducer;