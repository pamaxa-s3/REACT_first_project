import React from 'react';
import styles from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../utils/validatots/validators';

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} placeholder={'Login'} validate={[required, maxLength10]} />
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'Password'} validate={[required, maxLength10]} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type='checkbox' />Remember Me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    
    const onSubmit = (formData) => {}

    return (
        <div>
            <h1 className={styles.login}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    )
}

export default Login;