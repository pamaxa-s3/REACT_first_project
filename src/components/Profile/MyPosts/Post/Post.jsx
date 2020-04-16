import React from 'react';
import s from './Posts.module.css';

const Post = (props) => {
     return (
          <div className={s.item}>
               <img src={props.avatar} alt="" className={s.img} />
               <div className={s.title}>
                    post 1
               </div>
               <div className={s.text}>
                    { props.message }
               </div>     
               <div className={s.like}>
                    {props.likeCount}<span>like</span>
               </div>
          </div>
     );
}

export default Post;