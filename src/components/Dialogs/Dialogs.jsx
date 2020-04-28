import React from 'react';
import styles from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogsItemContainer from './DialogsItem/DialogsItemContainer';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <DialogsItemContainer />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;