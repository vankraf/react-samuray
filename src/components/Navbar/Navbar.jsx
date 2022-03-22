import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import NavbarItem from "./NavbarItem/NavbarItem";


const Navbar = (props) => {

     let navbarItems = props.navbar.items.map(item => <NavbarItem name={item}/>);


    return(
        <nav className={styles.nav}>
            {navbarItems}
        </nav>
    );
}

export default Navbar;