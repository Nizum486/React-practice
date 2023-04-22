import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {

    const thisYear = () => {
        const year = new Date().getFullYear()
        return year
    }
    
    return (
        <footer className={styles.footer}>
            <p>Copyright © {thisYear()} INWOOLab</p>
        </footer>
    )
}

export default Footer