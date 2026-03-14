import React from 'react';
import {MessageIcon} from "@/shared/ui/icons.jsx";
import styles from "./Message.module.css";
import { Link } from "@tanstack/react-router";
import { ROUTES } from "@/app/router/routes.js";

const Message = (props) => {
    const {
        className = '',
    } = props;
    return (
        <li className={`${className}`}>
            <Link to={ROUTES.dashboard.path} className={styles.message}>
                <MessageIcon/>
                <p className={styles.message__name}>Сообщения</p>
            </Link>
        </li>
    );
};

export default Message;
