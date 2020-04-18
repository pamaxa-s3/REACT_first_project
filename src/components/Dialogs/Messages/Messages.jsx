import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} />)

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