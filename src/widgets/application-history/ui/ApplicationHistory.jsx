import React from 'react';
import styles from './ApplicationHistory.module.css';
import Messages from "@/widgets/application-history/ui/Messages/Messages.jsx";

const ApplicationHistory = () => {
    return (
        <div className={styles.history}>
            <h3 className={styles.history__title}>
                История обработки заявки
            </h3>
            <Messages/>
        </div>
    );
};

export default ApplicationHistory;