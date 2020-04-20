import React from 'react';
import s from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />)


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
            <NavLink to={path} className={s.item} activeClassName='active' >
                <div className={s.avatar}>
                    <img src={props.avatar} className={s.image} alt="" />
                </div>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogsItem;