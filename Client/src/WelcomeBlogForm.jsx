// WelcomeBlogForm.js
import React from 'react';
import styles from './WelcomeBlogForm.module.css';

const WelcomeBlogForm = () => {
    return (
        <form className={styles.formContainer}>
            <div className={styles.welcomeSection}>
                <h1>
                    Welcome To The World Of Blog <span className={styles.highlight}>Writing</span>
                </h1>
                <button type="submit" className={styles.submitButton}>Write a Blog</button>
            </div>
        </form>
    );
};

export default WelcomeBlogForm; 
