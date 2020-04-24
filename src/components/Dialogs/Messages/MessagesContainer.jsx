import React from 'react';
import { updateNewMessageChangeActionCreator, sendMessageActionCreator } from '../../../redux/dialogs_reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage.messages;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageChangeActionCreator(text));
    };

    return (
        <Messages
            updateNewMessageChange={onMessageChange}
            message={state.message}
            newMessageText={state.newMessageText}
            sendMessage={sendMessage} />
    );
}

export default MessagesContainer;