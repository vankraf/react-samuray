import styles from './Message.module.css';
import ava from "../../../img/avatar.png"

const Message = (props) => {
    return(
        <div >
            <img src ={ava} />
            <div className={styles.message}>{props.message}</div>
        </div>
    );
}

export default Message;