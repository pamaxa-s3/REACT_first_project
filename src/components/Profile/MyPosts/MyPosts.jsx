import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
     let posts = [
          { id: 1, message: 'Hi, how are you?', avatar: 'https://pbs.twimg.com/media/Cq0M1G6UMAEvVrZ.jpg', likesCount: 121 },
          { id: 2, message: 'Hello My Friend!', avatar: 'https://pbs.twimg.com/profile_images/561215760333545472/Hv-8dy5D_400x400.jpeg', likesCount: 341 },
     ];

     let postsElements = posts.map(p => <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} />)

     return (
          <div className={s.my_posts}>
               <div className={s.posts}>
                    {postsElements}
               </div>
          </div>
     );
}

export default MyPosts;