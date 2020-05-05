import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <nav>
                <ul>
                    <li className={styles.item}>
                        <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Sidebar;