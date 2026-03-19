import React from 'react';
import styles from './Messages.module.css';
import Message from "@/entities/message/index.js";

const Messages = () => {
    return (
        <ul className={styles.messages}>
            <li>
                <Message/>
            </li>
            <li>
                <Message/>
            </li>
            <li>
                <Message/>
            </li>
        </ul>
    );
};

export default Messages;