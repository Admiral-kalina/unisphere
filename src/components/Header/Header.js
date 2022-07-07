import * as React from "react"
import * as styles from "./styles.module.scss"
import Logo from "../../assets/Logo";
import {Link} from "gatsby";
import Hamburger from "./Hamburger";
import NavBar from "./NavBar";


const Header = () => (
  <header>
      <Link to={'/'}><Logo /></Link>
      <NavBar/>
      <Hamburger/>
  </header>
)



export default Header
