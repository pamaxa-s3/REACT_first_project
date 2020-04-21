import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, sendMessage, updateNewMessageChange } from './redux/state';
import { updateNewPostChange } from "./redux/state";

export let rerenderEntireTree = (state) => {

	ReactDOM.render(
		<React.StrictMode>
			<App state={state}
			sendMessage={sendMessage}
			updateNewMessageChange={updateNewMessageChange}
			addPost={addPost}
			updateNewPostChange={updateNewPostChange} / >
		</React.StrictMode>,
		document.getElementById('root')
	);
}