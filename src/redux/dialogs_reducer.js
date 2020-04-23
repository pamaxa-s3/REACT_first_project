const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE';


const dialogsReducer = (state, action) => {
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