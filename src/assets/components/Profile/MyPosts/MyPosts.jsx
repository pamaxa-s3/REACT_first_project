import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
     let postsElements = props.posts.map(p => <Post message={p.message} avatar={"https://pbs.twimg.com/media/Cq0M1G6UMAEvVrZ.jpg"} likesCount={p.likesCount} key={p.id} />);
     
     let newPostElement = React.createRef();
     
     let onAddPost = () => {
          props.AddPost();
     };
     
     let onPostChange = () => {
          let text = newPostElement.current.value;
          props.updateNewPostChange(text);
     };

     return (
          <div className={styles.my_posts}>
               <div className={styles.addPost}>
                    <div>
                         <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                    </div>
                    <div>
                         <button onClick={onAddPost}>Add post</button>
                    </div>
               </div>

               <div className={styles.posts}>
                    {postsElements}
               </div>
          </div>
     );
}

export default MyPosts;