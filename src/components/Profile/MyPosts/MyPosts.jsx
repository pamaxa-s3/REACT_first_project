import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
     let postsElements = props.posts.map(p => <Post message={p.message} avatar={"https://pbs.twimg.com/media/Cq0M1G6UMAEvVrZ.jpg"} likesCount={p.likesCount} />);
     let newPostElement = React.createRef();
     let addPost = () => {
          let text = newPostElement.current.value;
          props.addPost(text);
          newPostElement.current.value = '';
     };

     return (
          <div className={s.my_posts}>
               <div className={s.addPost}>
                    <div>
                         <textarea ref={newPostElement}></textarea>
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