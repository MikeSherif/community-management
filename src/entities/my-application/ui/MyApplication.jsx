import React from 'react';
import styles from './MyApplication.module.css';
import ApplicationManager from "@/shared/ui/application-manager";
import ApplicationStatus from "@/shared/ui/application-status";
import ChatMessengerLink from "@/entities/my-application/ui/ChatMessengerLink/ChatMessengerLink.jsx";

const MyApplication = (props) => {
    const {
        id = '854 541',
        name = "Установка посудомоечной машины",
        status = 'active',
        date = '',
        managerName = 'Виктор Г.',
        managerRole = 'менеджер'
    } = props;
    return (
        <li>
            <article className={styles.application}>
                <div className={styles.application__content}>
                    <div className={styles.application__content_wrapper}>
                        <span className={styles.application__name}>Заявка {id} <span className={styles.accent}>• {name}</span></span>
                        <div className={styles.application__wrapper}>
                            <ApplicationStatus status={status}/>
                            <ApplicationManager managerName={managerName} managerRole={managerRole}/>
                            <ChatMessengerLink/>
                        </div>
                    </div>

                </div>
                <div className={styles.application__date}>
                    18:45 • 26 сентября 2020
                </div>
            </article>
        </li>
    );
};

export default MyApplication;