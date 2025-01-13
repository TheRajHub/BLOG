// LoginPage.js
import React, { useState } from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        if (isCreatingAccount) {
            console.log('Account created:', { email, password });
            alert('Account successfully created!');
        } else {
            console.log('Form submitted:', { email, password });
            alert('Login successful!');
        }
    };

    const toggleAccountMode = () => {
        setIsCreatingAccount(!isCreatingAccount);
        setError('');
    };

    return (
        <div className={styles.loginPage}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>{isCreatingAccount ? 'Create Account' : 'Login'}</h2>
                {error && <div className={styles.errorMessage}>{error}</div>}

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className={styles.loginButton}>
                    {isCreatingAccount ? 'Create Account' : 'Login'}
                </button>

                <button
                    type="button"
                    className={styles.toggleButton}
                    onClick={toggleAccountMode}
                >
                    {isCreatingAccount
                        ? 'Already have an account? Login'
                        : 'Don\'t have an account? Create one'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
