import React from 'react';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

     let state = props.store.getState().profilePage;

     let addPost = () => {
          props.store.dispatch(addPostActionCreator());
     };

     let onPostChange = (text) => {
          props.store.dispatch(updateNewPostChangeActionCreator(text));
     };

     return (<MyPosts
          posts={state.posts}
          newPostText={state.newPostText}
          addPost={addPost}
          updateNewPostChange={onPostChange} />);
}

export default MyPostsContainer;