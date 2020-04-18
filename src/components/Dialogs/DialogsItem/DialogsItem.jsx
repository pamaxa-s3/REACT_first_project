import React from 'react';
import s from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let dialogs = [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Nikita' },
        { id: 3, name: 'Mama' },
        { id: 4, name: 'Vorobyov' },
        { id: 5, name: 'Samurai' },
        { id: 6, name: 'Antony Hopkins' },
        { id: 7, name: 'Sasha' }
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)


    return (
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
    );
}

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName='active'>{props.name}</NavLink>
        </div>
    );
}

export default DialogsItem;