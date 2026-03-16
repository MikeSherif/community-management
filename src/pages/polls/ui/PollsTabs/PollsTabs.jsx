import React from 'react';
import styles from './PollsTabs.module.css';

const PollsTabs = () => {
    return (
        <ul className={styles.tabs}>
            <li
                className={`${styles.tab} `}
            >
                Актуальные
            </li>
            <li
                className={`${styles.tab} `}
            >
                История опросов
            </li>
        </ul>
    );
};

export default PollsTabs;