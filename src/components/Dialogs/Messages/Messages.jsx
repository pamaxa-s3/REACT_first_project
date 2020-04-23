import React from 'react';
import s from './Messages.module.css';
import { updateNewMessageChangeActionCreator, sendMessageActionCreator } from '../../../redux/dialogs_reducer';

const Messages = (props) => {

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} />);
    let addMessage = React.createRef();
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = addMessage.current.value;

        props.dispatch(updateNewMessageChangeActionCreator(text));
    };

    return (
        <div className={s.messages}>
            {messagesElements}
            <div className={s.addMessageBlock}>
                <div>
                    <textarea onChange={onMessageChange} ref={addMessage} value={props.newMessageText} placeholder='Enter your message...' />
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