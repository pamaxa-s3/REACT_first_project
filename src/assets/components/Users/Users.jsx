import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto  from '../../images/userPhoto.png';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4').then(response => {
            props.setUsers(response.data.items)
        });
        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl: 'https://i.pinimg.com/originals/ea/56/e7/ea56e7d33a853b7752e07aa02e71fdba.jpg',
        //         followed: false,
        //         fullName: 'Dmitriy',
        //         status: 'I`m a boss',
        //         location: {
        //             city: 'Minsk',
        //             country: 'Belarus'
        //         }
        //     },
        //     {
        //         id: 2,
        //         photoUrl: 'https://i.pinimg.com/originals/ea/56/e7/ea56e7d33a853b7752e07aa02e71fdba.jpg',
        //         followed: true,
        //         fullName: 'Roman',
        //         status: 'I`m a developer',
        //         location: {
        //             city: 'Kremenchug',
        //             country: 'Ukraine'
        //         }
        //     },
        //     {
        //         id: 3,
        //         photoUrl: 'https://i.pinimg.com/originals/ea/56/e7/ea56e7d33a853b7752e07aa02e71fdba.jpg',
        //         followed: false,
        //         fullName: 'John',
        //         status: 'I`m a customer',
        //         location: {
        //             city: 'New York',
        //             country: 'USA'
        //         }
        //     }
        // ]
        // )
    }

    return (
        <div className={styles.users}>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.userInfo}>
                        <div><img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.avatar} alt="" /></div>
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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

export default Users;