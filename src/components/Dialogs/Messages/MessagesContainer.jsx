import React from 'react';
import { updateNewMessageChangeActionCreator, sendMessageActionCreator } from '../../../redux/dialogs_reducer';
import Messages from './Messages';
import StoreContext from '../../../StoreContext';

const MessagesContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                store => {

                    let state = store.getState().messagesPage.messages;

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    };

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageChangeActionCreator(text));
                    };

                    return (
                        <Messages
                            updateNewMessageChange={onMessageChange}
                            message={state.message}
                            newMessageText={state.newMessageText}
                            sendMessage={sendMessage} />
                    )
                }

            }

        </StoreContext.Consumer>
    );
}

export default MessagesContainer;