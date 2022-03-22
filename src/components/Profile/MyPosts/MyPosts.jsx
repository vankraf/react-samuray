import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx'
import React from "react";
const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likesCount}/>);

    let newPostElement =React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return(
            <div>
                <div className={styles.addPost} >
                    <div>
                        <textarea onChange={onPostChange}  ref = {newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>

                </div>
                
                <div className={styles.posts}>
                    {postsElements}
                </div>
            </div>

    );
}

export default MyPosts;