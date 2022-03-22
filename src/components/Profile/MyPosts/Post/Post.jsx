import styles from './Post.module.css';
import avatar from './../../../../img/avatar.png';
const Post = (props) => {
    return(
        <div className={styles.item}>
            <img src={avatar}/>

            <div className={styles.content}>
                <h3>{props.message}</h3>

            </div>
            <span className = {styles.likes}>like: {props.likeCount}</span>
        </div>
    );
}

export default Post;