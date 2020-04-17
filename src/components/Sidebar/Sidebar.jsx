import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <nav>
                <ul>
                    <li className={`${s.item} ${s.active}`}>
                        <a href="/profile">Profile</a>
                    </li>
                    <li className={s.item}>
                        <a href="/message">Messages</a>
                    </li>
                    <li className={s.item}>
                        <a href="/news">News</a>
                    </li>
                    <li className={s.item}>
                        <a href="/music">Music</a>
                    </li>
                    <li className={s.item}>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Sidebar;