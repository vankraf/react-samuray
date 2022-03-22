import styles from './ProfileInfo.module.css';

import frog from "./../../../img/frog.JPG"

const ProfileInfo = () => {
    return(
        <div className={styles.profile}>
                <img src={frog}/>
                <h1>It's me</h1>
        </div>
    );
}

export default ProfileInfo;