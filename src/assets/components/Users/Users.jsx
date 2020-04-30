import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../images/userPhoto.png';

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=1')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }



    render() {
        return (

            <div className={styles.users}>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={styles.userInfo}>
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.avatar} alt="" /></div>
                            <div>
                                {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;