import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [{
    id: 1,
    message: 'Hi, how are you?',
    avatar: 'https://pbs.twimg.com/media/Cq0M1G6UMAEvVrZ.jpg',
    likesCount: 121
  },
  {
    id: 2,
    message: 'Hello My Friend!',
    avatar: 'https://pbs.twimg.com/profile_images/561215760333545472/Hv-8dy5D_400x400.jpeg',
    likesCount: 341
  },
];

let dialogs = [{
    id: 1,
    name: 'Andrew'
  },
  {
    id: 2,
    name: 'Nikita'
  },
  {
    id: 3,
    name: 'Mama'
  },
  {
    id: 4,
    name: 'Vorobyov'
  },
  {
    id: 5,
    name: 'Samurai'
  },
  {
    id: 6,
    name: 'Antony Hopkins'
  },
  {
    id: 7,
    name: 'Sasha'
  }
];

let messages = [{
    id: 1,
    message: 'Hi everybody!!!'
  },
  {
    id: 2,
    message: 'I need help!'
  },
  {
    id: 3,
    message: 'I`m guess!'
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
