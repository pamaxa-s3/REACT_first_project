import React from 'react';
import userPhoto from '../../images/userPhoto.png';
import styles from './Users.module.css';

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
                        onClick={() => {props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.userInfo}>
                        <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.avatar} alt="" /></div>
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
            <div className={styles.pagination}>

                {paginationsPages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => {props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
        </div>
    )
};

export default Users;