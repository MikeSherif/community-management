import React from 'react';
import styles from './Message.module.css';

const Message = () => {
    return (
        <article className={styles.message}>
            <div className={styles.content}>
                <div className={styles.bubble}>
                    Текст сообщения. Может быть длинный, может
                    Текст сообщения. Может быть длинный, может короткий.
                    Текст сообщения. Может быть длинный, может короткий.
                    Текст сообщения. Может быть длинный, может короткий.
                </div>
            </div>

            <div className={styles.meta}>
                <span className={styles.name}>Иван Иванов</span>
                <span className={styles.date}>Сегодня 12:41</span>
            </div>
        </article>
    );
};

export default Message;