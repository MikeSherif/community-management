import React from 'react';
import {MessageIcon} from "@/shared/ui/icons.jsx";
import styles from "./Message.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {
    const {
        className = '',
    } = props;
    return (
        <li className={`${className}`}>
            <NavLink className={styles.message}>
                <MessageIcon/>
                <p className={styles.message__name}>Сообщения</p>
            </NavLink>
        </li>
    );
};

export default Message;