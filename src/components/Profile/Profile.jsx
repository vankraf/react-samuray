import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div className={styles.profile}>
           <ProfileInfo/>
            <MyPosts posts ={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost = {props.addPost}
                     updateNewPostText = {props.updateNewPostText}/>
        </div>
    );
}

export default Profile;