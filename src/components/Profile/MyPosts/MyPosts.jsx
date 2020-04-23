import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profile_reducer';

const MyPosts = (props) => {
     let postsElements = props.posts.map(p => <Post message={p.message} avatar={"https://pbs.twimg.com/media/Cq0M1G6UMAEvVrZ.jpg"} likesCount={p.likesCount} />);
     let newPostElement = React.createRef();
     let addPost = () => {
          props.dispatch(addPostActionCreator());
     };
     let onPostChange = () => {
          let text = newPostElement.current.value;
          props.dispatch(updateNewPostChangeActionCreator(text));
     };

     return (
          <div className={s.my_posts}>
               <div className={s.addPost}>
                    <div>
                         <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                    </div>
                    <div>
                         <button onClick={addPost}>Add post</button>
                    </div>
               </div>

               <div className={s.posts}>
                    {postsElements}
               </div>
          </div>
     );
}

export default MyPosts;