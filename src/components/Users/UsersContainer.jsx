import React from 'react';
import { connect } from 'react-redux';
import { unfollow, follow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getFollowingInProgress, getIsFetching, getCurrentPage, getTotalUsersCount, getPageSize, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>;
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose (
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,    
        toggleFollowingProgress,
        requestUsers
    }),
    // withAuthRedirect
)(UsersContainer)