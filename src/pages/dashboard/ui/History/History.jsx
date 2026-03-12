import React from 'react';
import styles from './History.module.css';
import HistoryRequest from "@/entities/history-request";

const History = () => {
    return (
        <div className={styles.history}>
            <div className={styles.history__header}>
                <h2 className={styles.history__title}>История заявок</h2>
                <button className={styles.history__btn}>Вся история</button>
            </div>
            <ul className={styles.history__list}>
                <HistoryRequest/>
            </ul>
        </div>
    );
};

export default History;