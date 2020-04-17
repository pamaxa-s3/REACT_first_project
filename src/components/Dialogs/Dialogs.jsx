import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName='active'>Andrew</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName='active'>Nikita</NavLink>                    
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName='active'>Mama</NavLink>                    
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName='active'>Vorobyov</NavLink>                    
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' activeClassName='active'>Samurai</NavLink>                    
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6' activeClassName='active'>Antony Hopkins</NavLink>                    
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/7' activeClassName='active'>Sasha</NavLink>                    
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi everybody!!!
                </div>
                <div className={s.message}>
                    I need help!
                </div>
                <div className={s.message}>
                    I`m guess!
                </div>
            </div>
        </div>
    );
}

export default Dialogs;