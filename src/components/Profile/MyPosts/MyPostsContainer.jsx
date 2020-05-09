import React from 'react';
import { addPostCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
     return {
          posts: state.profilePage.posts,
          newPostText: state.profilePage.newPostText
     }
}

let mapDispatchToProps = (dispatch) => {
     return {
          addPost: (newPostBody) => {
               dispatch(addPostCreator(newPostBody));
          }
     }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;