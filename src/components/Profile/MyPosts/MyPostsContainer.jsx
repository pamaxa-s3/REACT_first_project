import React from 'react';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profile_reducer';
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
          AddPost: () => {
               dispatch(addPostActionCreator());
          },
          updateNewPostChange: (text) => {
               dispatch(updateNewPostChangeActionCreator(text));
          }
     }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;