import React from 'react';
import userPhoto from '../../assets/images/userPhoto.png';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import { usersApi } from '../../api/api';

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
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id);
                                    // props.toggleFollowingProgress(true, u.id);
                                    // usersApi.unfollowSuccess(u.id)
                                    //     .then(response => {
                                    //         if (response.data.resultCode === 0) {
                                    //             props.unfollowSuccess(u.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false, u.id);
                                    //     });
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id);
                                    // props.toggleFollowingProgress(true, u.id);
                                    // usersApi.followSuccess(u.id)
                                    //     .then(response => {
                                    //         if (response.data.resultCode === 0) {
                                    //             props.followSuccess(u.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false, u.id);
                                    //     });
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