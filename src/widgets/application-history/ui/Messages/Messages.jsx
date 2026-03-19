import React from 'react';
import styles from './Messages.module.css';
import Message from "@/entities/message/index.js";

const Messages = () => {
    return (
        <ul className={styles.messages}>
            <li>
                <Message messageText={'Здравствуйте! Ваша завка принята. Мы свяжемся с вами в ближайшее время в мессенджере.'}/>
            </li>
            <li>
                <Message messageText={'К вам направлена спасательная бригада. Ожидайте сегодня сегодня до 12:00'}/>
            </li>
            <li>
                <Message/>
            </li>
        </ul>
    );
};

export default Messages;