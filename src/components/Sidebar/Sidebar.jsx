import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <nav>
                <ul>
                    <li className={`${s.item} ${s.active}`}>
                        <a href="#">Profile</a>
                    </li>
                    <li className={s.item}>
                        <a href="#">Messages</a>
                    </li>
                    <li className={s.item}>
                        <a href="#">News</a>
                    </li>
                    <li className={s.item}>
                        <a href="#">Music</a>
                    </li>
                    <li className={s.item}>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Sidebar;