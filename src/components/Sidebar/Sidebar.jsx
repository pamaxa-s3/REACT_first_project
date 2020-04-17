import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <nav>
                <ul>
                    <li className={s.item}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/message" activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/contact" activeClassName={s.active}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Sidebar;