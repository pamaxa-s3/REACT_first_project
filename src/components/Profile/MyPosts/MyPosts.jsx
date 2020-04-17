import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
     let postData = [
          { id: 1, message: 'Hi, how are you?', avatar: 'https://pbs.twimg.com/media/Cq0M1G6UMAEvVrZ.jpg', likesCount: 121 },
          { id: 1, message: 'Hello My Friend!', avatar: 'https://pbs.twimg.com/profile_images/561215760333545472/Hv-8dy5D_400x400.jpeg', likesCount: 341 },
     ];

     return (
          <div className={s.my_posts}>
               <div className={s.posts}>
                    <Post message={postData[0].message} avatar={postData[0].avatar} likesCount={postData[0].likesCount} />
                    <Post message={postData[1].message} avatar={postData[1].avatar} likesCount={postData[1].likesCount} />
               </div>
          </div>
     );
}

export default MyPosts;