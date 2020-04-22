let store = {
    _state: {
        profilePage: {
            posts: [{
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 121
                },
                {
                    id: 2,
                    message: 'Hello My Friend!',
                    likesCount: 341
                },
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: {
                message: [{
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
                ],
                newMessageText: ''
            },
            dialogs: [{
                    id: 1,
                    name: 'Andrew',
                    avatar: 'https://www.indiewire.com/wp-content/uploads/2019/04/shutterstock_9757539ah.jpg?w=780'
                },
                {
                    id: 2,
                    name: 'Nikita',
                    avatar: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ikRHGbiXJL8o/v0/1000x-1.jpg'
                },
                {
                    id: 3,
                    name: 'Mama',
                    avatar: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266749_2200-732x549.jpg'
                },
                {
                    id: 4,
                    name: 'Vorobyov',
                    avatar: 'https://s3.amazonaws.com/tinycards/image/c5b605125dd3a4685555bf56c37555ed'
                },
                {
                    id: 5,
                    name: 'Samurai',
                    avatar: 'https://www.esafety.gov.au/sites/default/files/2019-07/adult_cyber_abuse.jpg'
                },
                {
                    id: 6,
                    name: 'Antony Hopkins',
                    avatar: 'https://lowcountrypregnancycenter.com/wp-content/uploads/2018/07/beautiful-beauty.jpg'
                },
                {
                    id: 7,
                    name: 'Sasha',
                    avatar: 'https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/10/PRI_90095071.jpg?quality=90&strip=all&zoom=1&resize=644%2C483&ssl=1'
                }
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {},
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
       this._callSubscriber(this._state);
    },
    updateNewPostChange(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    sendMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagesPage.messages.newMessageText
        };

        this._state.messagesPage.messages.message.push(newMessage);
        this._state.messagesPage.messages.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageChange(newText) {
        this._state.messagesPage.messages.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer(наблюдатель-eng.) патерн! похож на патерн publisher-subscriber. По этому же патерну работает addEventListener и другие обработчики событий (onClick...и т.д.)
    }
}

export default store;

window.store = store; //выведет в консоле весь state, если написать команду 'state'