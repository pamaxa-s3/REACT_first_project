import React from 'react';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogsItem />
            <Messages />
        </div>
    );
}

export default Dialogs;