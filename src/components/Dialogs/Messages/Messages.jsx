import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {

    let messages = [
        { id: 1, message: 'Hi everybody!!!' },
        { id: 2, message: 'I need help!' },
        { id: 3, message: 'I`m guess!' }
    ];

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />)

    return (
            <div className={s.messages}>
                {messagesElements}
            </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Messages;