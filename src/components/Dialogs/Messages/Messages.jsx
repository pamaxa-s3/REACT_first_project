import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} />);
    let addMessage = React.createRef();
    let sendMessage = () => {
        let text = addMessage.current.value;
        alert(text);
    };

    return (
        <div className={s.messages}>
            {messagesElements}
            <div className={s.addMessageBlock}>
                <form action="#">
                    <textarea ref={addMessage}></textarea>
                    <button onClick={sendMessage} type="submit">send message</button>
                </form>
            </div>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Messages;