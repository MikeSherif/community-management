import React from 'react';
import styles from "./Notification.module.css";
import {NotificationIcon} from "@/shared/ui/icons.jsx";

const Notification = (props) => {
    const {
        className = '',
    } = props
    return (
        <li className={`${className} ${styles.notification}`}>
            <NotificationIcon/>
            <div className={styles.notification__count}>
                <span className={styles.notification__value}>3</span>
            </div>
            <p className={styles.notification__name}>Уведомления</p>
        </li>
    );
};

export default Notification;