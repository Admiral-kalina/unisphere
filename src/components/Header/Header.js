import * as React from "react"
import * as styles from "./styles.module.scss"
import Logo from "../../assets/Logo";
import {Link} from "gatsby";


const Header = () => (
  <header>
      <Link to={'/'}><Logo /></Link>
      <nav>
         <Link to={'/'}>Explore</Link>
          <Link to={'/time'}>Time</Link>
          <Link to={'/events'}>Events</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/for-investors'}>For Investors</Link>
          <Link to={'/contacts'}>Contacts</Link>
      </nav>
  </header>
)



export default Header
