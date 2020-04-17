import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Nikita' },
        { id: 3, name: 'Mama' },
        { id: 4, name: 'Vorobyov' },
        { id: 5, name: 'Samurai' },
        { id: 6, name: 'Antony Hopkins' },
        { id: 7 , name: 'Sasha' }
    ];

    let messagesData = [
        { id: 1, message: 'Hi everybody!!!' },
        { id: 2, message: 'I need help!' },
        { id: 3, message: 'I`m guess!' }
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItem name='Mama' id='3' />
                <DialogsItem name='Vorobyov' id='4' />
                <DialogsItem name='Samurai' id='5' />
                <DialogsItem name='Antony Hopkins' id='6' />
                <DialogsItem name='Sasha' id='7' />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
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