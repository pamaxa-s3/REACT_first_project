import React from 'react';
import styles from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <div className={styles.cssloadLoader}>
            <div className={`${styles.cssloadInner} ${styles.cssloadOne}`}></div>
            <div className={`${styles.cssloadInner} ${styles.cssloadTwo}`}></div>
            <div className={`${styles.cssloadInner} ${styles.cssloadThree}`}></div>
        </div>
    )
};

export default Preloader;