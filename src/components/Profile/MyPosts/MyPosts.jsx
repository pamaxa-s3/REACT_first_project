import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
     let postsElements = props.posts.map(p => <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} />)

     return (
          <div className={s.my_posts}>
               <div className={s.posts}>
                    {postsElements}
               </div>
          </div>
     );
}

export default MyPosts;