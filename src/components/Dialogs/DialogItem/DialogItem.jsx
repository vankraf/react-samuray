import styles from './DialogItem.module.css';

import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={styles.dialog}>
            <NavLink className={navData => navData.isActive ? styles.active:styles.dialog} to = {"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;