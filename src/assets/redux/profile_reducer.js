const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

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
    newPostText: ''
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

        default:
            return state;
    }

}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_CHANGE,
    newText: text
})

export default profileReducer;