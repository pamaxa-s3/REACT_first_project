import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../images/userPhoto.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let paginationsPages = [];

        for (let i = 1; i <= pagesCount; i++) {
            paginationsPages.push(i);
        }


        return (

            <div className={styles.users}>
                <div className={styles.pagination}>

                    {paginationsPages.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectedPage}
                            onClick={() => { this.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
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