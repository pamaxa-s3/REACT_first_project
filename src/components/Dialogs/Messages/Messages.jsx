import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} />);
    let addMessage = React.createRef();
    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = () => {
        let text = addMessage.current.value;

        props.updateNewMessageChange(text);
    };

    return (
        <div className={s.messages}>
            {messagesElements}
            <div className={s.addMessageBlock}>
                <div>
                    <textarea onChange={onMessageChange} ref={addMessage} value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={sendMessage}>send message</button>
                </div>
            </div>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Messages;