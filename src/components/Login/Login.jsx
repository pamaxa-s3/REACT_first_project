import React from 'react';
import styles from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../utils/validatots/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';

const maxLength100 = maxLengthCreator(100);

const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Email'} validate={[required, maxLength100]} />
            </div>
            <div>
                <Field component={Input} name={'password'} type='password' placeholder={'Password'} validate={[required, maxLength100]} />
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
    
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={'/Profile'} />
    }

    return (
        <div>
            <h1 className={styles.login}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);