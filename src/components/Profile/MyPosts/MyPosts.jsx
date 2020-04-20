import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
     let postsElements = props.posts.map(p => <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} />);
     let newPostElement = React.createRef();
     let addPost = () => {
          let text = newPostElement.current.value;
          alert(text);
     };

     return (
          <div className={s.my_posts}>
               <div className={s.addPost}>
                    <form action="#">
                         <div>
                              <textarea ref={newPostElement}></textarea>
                         </div>
                         <div>
                              <button onClick={addPost} type='submit' >Add post</button>
                         </div>
                    </form>
               </div>
               <div className={s.posts}>
                    {postsElements}
               </div>
          </div>
     );
}

export default MyPosts;