import React from 'react';
import { updateNewMessageChange, sendMessage } from '../../../redux/dialogs_reducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        messageItem: state.messagesPage.messages.messageItem,
        newMessageText: state.messagesPage.messages.newMessageText
    }
}

export default compose(
    connect(mapStateToProps, { sendMessage, updateNewMessageChange }),
    withAuthRedirect
)(Messages)