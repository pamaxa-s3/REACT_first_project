import React from 'react';
import { addPost, updateNewPostChange } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
     return {
          posts: state.profilePage.posts,
          newPostText: state.profilePage.newPostText
     }
}

let mapDispatchToProps = {
     addPost,
     updateNewPostChange
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;