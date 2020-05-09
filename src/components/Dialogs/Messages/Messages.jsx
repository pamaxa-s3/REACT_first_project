import React from 'react';
import styles from './Messages.module.css';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

const Messages = (props) => {

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={styles.messages}>
            {messagesElements}
            <div className={styles.addMessageBlock}>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message...' />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Messages;