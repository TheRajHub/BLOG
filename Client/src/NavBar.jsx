// NavBar.js
import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <h1>Blogs</h1>
            <ul className={styles.navlinks}>
                <li><a href="#">Home</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
