import * as React from "react"
 //styles
import * as styles from "./styles.module.scss";
 //assets
import Eye from '../../images/icons/eye.png'
import Facebook from '../../images/icons/facebook.png'
import Glyph from '../../images/icons/glyph.png'
import Instagram from '../../images/icons/instagram.png'
import Subtract from '../../images/icons/subtract.png'
import SliderMoreBtn from "../UI/SliderMoreBtn";
import SocialLinks from "../UI/SocialLinks";
import EmailBlock from "../UI/EmailBlock";

const Footer = () => (
    <footer>
        <div className={styles.container}>
           <div className={styles.row}>
               <div className={styles.linkIcons_block}>
                   <a className={styles.glyph} href=""></a>
                   <a className={styles.aye} href=""></a>
               </div>
               <div className={styles.email_blocks}>
                   <EmailBlock/>
               </div>
               <div className={styles.links_block}>
                    <SocialLinks/>
               </div>
               <div className={styles.copyright_block}>
                   <p>AR Generation Sp. z o. o. © 2021 <a className={styles.generalIformation} href="">GDPR General information</a></p>
               </div>
               <div className={styles.privacy_block}>
                   <a href="">Privacy policy</a>
                   <a href="">Terms of use</a>
               </div>
           </div>
        </div>
    </footer>
)


export default Footer
