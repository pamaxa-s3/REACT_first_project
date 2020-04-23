const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE';

let initialState = {
    messages: {
        message: [{
                id: 1,
                message: 'Hi everybody!!!'
            },
            {
                id: 2,
                message: 'I need help!'
            },
            {
                id: 3,
                message: 'I`m guess!'
            }
        ],
        newMessageText: ''
    },
    dialogs: [{
            id: 1,
            name: 'Andrew',
            avatar: 'https://www.indiewire.com/wp-content/uploads/2019/04/shutterstock_9757539ah.jpg?w=780'
        },
        {
            id: 2,
            name: 'Nikita',
            avatar: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ikRHGbiXJL8o/v0/1000x-1.jpg'
        },
        {
            id: 3,
            name: 'Mama',
            avatar: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266749_2200-732x549.jpg'
        },
        {
            id: 4,
            name: 'Vorobyov',
            avatar: 'https://s3.amazonaws.com/tinycards/image/c5b605125dd3a4685555bf56c37555ed'
        },
        {
            id: 5,
            name: 'Samurai',
            avatar: 'https://www.esafety.gov.au/sites/default/files/2019-07/adult_cyber_abuse.jpg'
        },
        {
            id: 6,
            name: 'Antony Hopkins',
            avatar: 'https://lowcountrypregnancycenter.com/wp-content/uploads/2018/07/beautiful-beauty.jpg'
        },
        {
            id: 7,
            name: 'Sasha',
            avatar: 'https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/10/PRI_90095071.jpg?quality=90&strip=all&zoom=1&resize=644%2C483&ssl=1'
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.messages.newMessageText
            };

            state.messages.message.push(newMessage);
            state.messages.newMessageText = '';
            return state;
        case (UPDATE_NEW_MESSAGE_CHANGE):
            state.messages.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageChangeActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_CHANGE,
    newText: text
})

export default dialogsReducer;