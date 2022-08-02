import React from 'react';
import {useState} from 'react';
import * as styles from "./styles.module.scss"
import Logo from "../../assets/Logo";
import {Link} from "gatsby";
import Hamburger from "./Hamburger";
import NavBar from "./NavBar";





const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(prev => !prev)
    }

    const hiddeModal = (e) =>{
        console.log(e.target.className)
    }
    return (
        <header className={` ${isActive? styles.header_active : ''}` }>
            <div className={styles.header_top}>
                <Link to={'/'}><Logo/></Link>
                <div className={styles.header_navBar}>
                    <NavBar/>
                </div>
                <div onClick={handleClick} className={`${styles.header_hamburger} ${isActive? styles.header_hamburgerActive : ''}` }>
                    <Hamburger/>
                </div>
            </div>
            <div className={styles.header_wraper__mobileMenu} onClick={hiddeModal} >
                <div className={styles.header_mobileMenu}>
                    <NavBar/>
                </div>
            </div>
        </header>
    )
}

export default Header
