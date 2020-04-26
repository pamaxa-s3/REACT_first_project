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
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_CHANGE: {
            let stateCopy = {...state};
            
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
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