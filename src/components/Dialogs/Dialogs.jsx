import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogsItemContainer from './DialogsItem/DialogsItemContainer';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogsItemContainer />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;