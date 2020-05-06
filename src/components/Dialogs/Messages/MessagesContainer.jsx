import React from 'react';
import { updateNewMessageChange, sendMessage } from '../../../redux/dialogs_reducer';
import Messages from './Messages';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        messageItem: state.messagesPage.messages.messageItem,
        newMessageText: state.messagesPage.messages.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    sendMessage,
    updateNewMessageChange
}



const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;