import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validatots/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength15 = maxLengthCreator(15);

const MyPosts = (props) => {
     let postsElements = props.posts.map(p => <Post message={p.message} avatar={"https://pbs.twimg.com/media/Cq0M1G6UMAEvVrZ.jpg"} likesCount={p.likesCount} key={p.id} />);

     let addNewPost = (values) => {
          props.addPost(values.newPostBody);
     }

     return (
          <div className={styles.my_posts}>
               <div className={styles.addPost}>
                    <AddPostReduxForm onSubmit={addNewPost} />
               </div>
               <div className={styles.posts}>
                    {postsElements}
               </div>
          </div>
     );
}

const AddPostForm = (props) => {
     return (
          <form onSubmit={props.handleSubmit}>
               <div>
                    <Field component={Textarea} name='newPostBody' placeholder={'Post message'} validate={[required, maxLength15]} />
               </div>
               <div>
                    <button>Add post</button>
               </div>
          </form>
     )
}

const AddPostReduxForm = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)

export default MyPosts;