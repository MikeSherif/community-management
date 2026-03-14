import React from 'react';
import styles from './ApplicationsTabs.module.css';

const ApplicationsTabs = () => {
    return (
        <ul className={styles.tabs}>
            <li className={styles.tab}>
                Все
            </li>
            <li className={styles.tab}>
                Активные
            </li>
            <li className={styles.tab}>
                Новые
            </li>
            <li className={styles.tab}>
                Закрытые
            </li>
        </ul>
    );
};

export default ApplicationsTabs;