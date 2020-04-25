import React from 'react';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
     return {
          profilePage: state.profilePage,
          posts: state.profilePage.posts,
          newPostText: state.newPostText
     }
}

let mapDispatchToProps = (dispatch) => {
     return {
          addPost: () => {
               dispatch(addPostActionCreator());
          },
          onPostChange: (text) => {
               dispatch(updateNewPostChangeActionCreator(text));
          }
     }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;