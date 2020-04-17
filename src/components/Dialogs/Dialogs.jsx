import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name='Andrew' id='1' />
                <DialogsItem name='Nikita' id='2' />
                <DialogsItem name='Mama' id='3' />
                <DialogsItem name='Vorobyov' id='4' />
                <DialogsItem name='Samurai' id='5' />
                <DialogsItem name='Antony Hopkins' id='6' />
                <DialogsItem name='Sasha' id='7' />
            </div>
            <div className={s.messages}>
                <Message message='Hi everybody!!!' />
                <Message message='I need help!' />
                <Message message='I`m guess!' />
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