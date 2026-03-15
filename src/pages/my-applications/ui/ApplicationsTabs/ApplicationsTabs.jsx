import React from 'react';
import styles from './ApplicationsTabs.module.css';
import { APPLICATION_STATUSES, useApplicationsStore } from "@/pages/my-applications/model/applicationsStore.js";

const ApplicationsTabs = () => {
    const activeStatus = useApplicationsStore((state) => state.activeStatus);
    const setActiveStatus = useApplicationsStore((state) => state.setActiveStatus);

    const tabs = [
        { label: 'Все', status: APPLICATION_STATUSES.ALL },
        { label: 'Активные', status: APPLICATION_STATUSES.ACTIVE },
        { label: 'Новые', status: APPLICATION_STATUSES.NEW },
        { label: 'Закрытые', status: APPLICATION_STATUSES.CLOSED },
    ];

    return (
        <ul className={styles.tabs}>
            {tabs.map((tab) => (
                <li
                    key={tab.status}
                    className={`${styles.tab} ${activeStatus === tab.status ? styles.active : ''}`}
                    onClick={() => setActiveStatus(tab.status)}
                >
                    {tab.label}
                </li>
            ))}
        </ul>
    );
};

export default ApplicationsTabs;
