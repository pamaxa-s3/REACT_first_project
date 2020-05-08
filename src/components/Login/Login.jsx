import React from 'react';
import styles from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form>
            <div>
                <input placeholder={'Login'} />
            </div>
            <div>
                <input placeholder={'Password'} />
            </div>
            <div>
                <input type='checkbox' />Remember Me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    return (
        <div>
            <h1 className={styles.login}>Login</h1>
            <LoginForm />
        </div>

    )
}

export default Login;