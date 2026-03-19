import React from 'react';
import styles from './Manager.module.css';

const Manager = () => {
    return (
        <article className={styles.manager}>
            <div className={styles.manager__avatar}>

            </div>
            <div className={styles.manager__info}>
                <span className={styles.manager__label}>Ваш менеджер</span>
                <p className={styles.manager__name}>Екатерина Лузянина</p>
            </div>
        </article>
    );
};

export default Manager;