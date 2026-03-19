import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    const {
        messageText = 'Текст сообщения. Может быть длинный, может короткий.',
        managerName = 'Иван Иванов',
        messageTime = '12:41'
    } = props;
    return (
        <article className={styles.message}>
            <div className={styles.content}>
                <div className={styles.bubble}>
                    {messageText}
                </div>
            </div>

            <div className={styles.meta}>
                <span className={styles.name}>{managerName}</span>
                <span className={styles.date}>Сегодня {messageTime}</span>
            </div>
        </article>
    );
};

export default Message;