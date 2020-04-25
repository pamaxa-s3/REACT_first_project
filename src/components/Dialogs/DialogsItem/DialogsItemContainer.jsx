import React from 'react';
import { connect } from 'react-redux';
import DialogsItem from './DialogsItem';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
    }
}

const DialogsItemContainer = connect(mapStateToProps)(DialogsItem)

export default DialogsItemContainer;