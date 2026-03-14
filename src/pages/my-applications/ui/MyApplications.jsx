import React from 'react';
import styles from './MyApplications.module.css';
import ApplicationsTabs from "@/pages/my-applications/ui/ApplicationsTabs/ApplicationsTabs.jsx";
import ApplicationsList from "@/pages/my-applications/ui/ApplicationsList/ApplicationsList.jsx";

const MyApplications = () => {
    return (
        <section className={styles.applications}>
            <div className={styles.applications__header}>
                <ApplicationsTabs/>
            </div>
            <ApplicationsList/>
        </section>
    );
};

export default MyApplications;