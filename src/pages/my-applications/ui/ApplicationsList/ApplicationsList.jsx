import React from 'react';
import styles from './ApplicationsList.module.css';
import MyApplication from "@/entities/my-application";

const ApplicationsList = ({ applications }) => {
    return (
        <ul className={styles.applications}>
            {applications.map((application) => (
                <MyApplication
                    key={application.id}
                    id={application.id}
                    name={application.name}
                    status={application.status}
                    date={application.date}
                    managerName={application.managerName}
                    managerRole={application.managerRole}
                />
            ))}
        </ul>
    );
};

export default ApplicationsList;
