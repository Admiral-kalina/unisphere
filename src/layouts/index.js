import React from "react"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import * as styles from "./styles.module.scss"

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            {children}

        </div>
    )
}
export default Layout