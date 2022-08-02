import React from 'react';
import * as styles from "./styles.module.scss";
import {Link} from "gatsby";

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Link to={'/'}>Explore</Link>
            <Link to={'/time'}>Time</Link>
            <Link to={'/events'}>Events</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/for-investors'}>For Investors</Link>
            <Link to={'/contacts'}>Contacts</Link>
        </nav>
    );
};

export default NavBar;

