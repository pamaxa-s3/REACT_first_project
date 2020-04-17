import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Nikita' },
        { id: 3, name: 'Mama' },
        { id: 4, name: 'Vorobyov' },
        { id: 5, name: 'Samurai' },
        { id: 6, name: 'Antony Hopkins' },
        { id: 7, name: 'Sasha' }
    ];

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

    let messages = [
        { id: 1, message: 'Hi everybody!!!' },
        { id: 2, message: 'I need help!' },
        { id: 3, message: 'I`m guess!' }
    ];

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName='active'>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Dialogs;