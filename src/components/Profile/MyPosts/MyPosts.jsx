import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
     return (
          <div className={s.my_posts}>
               My Posts
               <div>New post</div>
               <div className={s.posts}>
                    <Post message='Hi, how are you?' avatar='https://pbs.twimg.com/media/Cq0M1G6UMAEvVrZ.jpg' likeCount='121' />
                    <Post message='Hello My Friend!' avatar='https://pbs.twimg.com/profile_images/561215760333545472/Hv-8dy5D_400x400.jpeg' likeCount='341' />
               </div>
          </div>
     );
}

export default MyPosts;