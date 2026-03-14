import React from 'react';
import {Link} from "@tanstack/react-router";
import styles from './ChatMessengerLink.module.css';
import {HistoryRequestMessageIcon} from "@/shared/ui/icons.jsx";

const ChatMessengerLink = ({id = 1}) => {
    return (
        <Link to={`/chat-messenger/${id}`} className={styles.link}>
            <HistoryRequestMessageIcon/>
            <p className={styles.link__text}>Чат в мессенджере</p>
        </Link>
    );
};

export default ChatMessengerLink;