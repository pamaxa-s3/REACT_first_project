import React from 'react';
import { updateNewMessageChangeActionCreator, sendMessageActionCreator } from '../../../redux/dialogs_reducer';
import Messages from './Messages';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        message: state.messagesPage.messages.message,
        newMessageText: state.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageChangeActionCreator(text));
        }
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;