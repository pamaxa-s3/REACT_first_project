import React from 'react';
import { updateNewMessageChange, sendMessage } from '../../../redux/dialogs_reducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        messageItem: state.messagesPage.messages.messageItem,
        newMessageText: state.messagesPage.messages.newMessageText
    }
}

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, { sendMessage, updateNewMessageChange })(AuthRedirectComponent);

export default MessagesContainer;