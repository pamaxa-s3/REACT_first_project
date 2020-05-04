import React from 'react';
import userPhoto from '../../images/userPhoto.png';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let paginationsPages = [];

    for (let i = 1; i <= pagesCount; i++) {
        paginationsPages.push(i);
    }

    return (
        <div className={styles.users}>
            <div className={styles.pagination}>

                {paginationsPages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.userInfo}>
                        <NavLink to={'/profile/' + u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.avatar} alt="" />
                            </div>
                        </NavLink>

                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'd3c126c4-1c5c-4967-ab34-d932ed6fefad'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resulteCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                    

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'd3c126c4-1c5c-4967-ab34-d932ed6fefad'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resulteCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });



                                }}>Follow</button>}
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
            <div className={styles.pagination}>

                {paginationsPages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
        </div>
    )
};

export default Users;