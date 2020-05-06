import React from 'react';
import styles from './Messages.module.css';
import { Redirect } from 'react-router-dom';

const Messages = (props) => {

    let messagesElements = props.messageItem.map(m => <Message message={m.message} id={m.id} key={m.id} />);

    let addMessage = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = () => {
        let text = addMessage.current.value;
        props.updateNewMessageChange(text);
    };

    if(!props.isAuth) {
        return <Redirect to={'/Login'} />
    }

    return (
        <div className={styles.messages}>
            {messagesElements}
            <div className={styles.addMessageBlock}>
                <div>
                    <textarea onChange={onMessageChange} ref={addMessage} value={props.newMessageText} placeholder='Enter your message...' />
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Messages;