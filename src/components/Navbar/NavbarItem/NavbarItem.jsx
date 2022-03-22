import styles from './NavbarItem.module.css'
import {NavLink} from "react-router-dom";


const NavbarItem = (props) => {
    return(
            <div className={styles.item}>
                <NavLink to={"/"+props.name}
                         className={navData => navData.isActive ? styles.active:styles.item}>
                    {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
                </NavLink>
            </div>
    );
}

export default NavbarItem;