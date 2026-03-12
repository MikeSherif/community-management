import React from 'react';
import styles from './HistoryRequest.module.css'

const HistoryRequest = () => {
    return (
        <li>
            <article className={styles.request}>
                <div className={styles.request__header}>
                    <p className={styles.request__header_text}>
                        Заявка 854 541 • Установка посудомоечной машины
                    </p>
                </div>
                <div className={styles.request__body}>

                </div>
                <div className={styles.request__footer}>

                </div>
            </article>
        </li>
    );
};

export default HistoryRequest;