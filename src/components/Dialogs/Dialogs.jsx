import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;