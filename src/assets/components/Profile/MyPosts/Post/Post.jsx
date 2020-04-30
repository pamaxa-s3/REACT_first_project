import React from 'react';
import styles from './Posts.module.css';

const Post = (props) => {
     return (
          <div className={styles.item}>
               <img src={props.avatar} alt="" className={styles.img} />
               <div className={styles.title}>
                    post 1
               </div>
               <div className={styles.text}>
                    { props.message }
               </div>     
               <div className={styles.like}>
                    {props.likesCount}<span>like</span>
               </div>
          </div>
     );
}

export default Post;