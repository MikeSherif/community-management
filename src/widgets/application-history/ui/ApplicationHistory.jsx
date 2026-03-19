import React from 'react';
import styles from './ApplicationHistory.module.css';
import Messages from "@/widgets/application-history/ui/Messages/Messages.jsx";
import Messenger from "@/widgets/application-history/ui/Messenger/ui/Messenger.jsx";

const ApplicationHistory = () => {
    return (
        <div className={styles.history}>
            <h3 className={styles.history__title}>
                История обработки заявки
            </h3>
            <div className={styles.wrapper}>
                <Messages/>
                <Messenger/>
            </div>

        </div>
    );
};

export default ApplicationHistory;