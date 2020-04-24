import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem store={props.store} />
            <MessagesContainer store={props.store} />
        </div>
    );
}

export default Dialogs;