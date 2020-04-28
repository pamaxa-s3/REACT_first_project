import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://sendgrid.com/brand/sg-twilio/SG_Twilio_Lockup_Social.png" />
        </header>
    );
}

export default Header;