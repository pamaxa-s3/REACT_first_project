import React from 'react';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

     return <StoreContext.Consumer>
          {
               store => {
                    let state = store.getState().profilePage;

                    let addPost = () => {
                         store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (text) => {
                         store.dispatch(updateNewPostChangeActionCreator(text));
                    };
                    return (
                         <MyPosts
                              posts={state.posts}
                              newPostText={state.newPostText}
                              addPost={addPost}
                              updateNewPostChange={onPostChange} />
                    )
               }
          }

     </StoreContext.Consumer>
}

export default MyPostsContainer;