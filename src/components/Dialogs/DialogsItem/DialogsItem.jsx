import React from 'react';
import styles from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />)

    return (
        <div className={styles.dialogsItems}>
            {dialogsElements}
        </div>
    );

}

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={styles.dialog}>
            <NavLink to={path} className={styles.item} activeClassName='active' >
                <div className={styles.avatar}>
                    <img src={props.avatar} className={styles.image} alt="" />
                </div>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogsItem;