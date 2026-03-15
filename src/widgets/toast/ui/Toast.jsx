import React from 'react';
import styles from './Toast.module.css';

const Toast = (props) => {
    const {
        title,
        messages = [],
        visible = false,
        className = '',
    } = props;

    if (messages.length === 0 && !visible) return null;

    return (
        <div
            className={`${styles.toast} ${visible ? styles.toastVisible : styles.toastHidden} ${className}`}
            role="alert"
            aria-live="polite"
        >
            {title && <div className={styles.toastTitle}>{title}</div>}
            <ul className={styles.toastList}>
                {messages.map((message, index) => (
                    <li key={`${message}-${index}`} className={styles.toastItem}>
                        {message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Toast;
