import React from "react";
import classes from "./header.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
            <a className="nav-link text-decoration-none me-5" href="#scrollspyProject">ПРОЕКТЫ</a>
            <a className="nav-link text-decoration-none me-5" href="#scrollspyContacts">КОНТАКТЫ</a>
        </header>
    )
}
export default Header