import React, { useEffect } from 'react';
import styles from './MyApplications.module.css';
import ApplicationsTabs from "@/pages/my-applications/ui/ApplicationsTabs/ApplicationsTabs.jsx";
import ApplicationsList from "@/pages/my-applications/ui/ApplicationsList/ApplicationsList.jsx";
import ApplicationsControls from "@/pages/my-applications/ui/ApplicationsControls/ApplicationsControls.jsx";
import { useRouterState } from "@tanstack/react-router";
import { APPLICATION_STATUSES, useApplicationsStore } from "@/pages/my-applications/model/applicationsStore.js";

const MyApplications = () => {
    const loaderData = useRouterState({
        select: (state) => state.matches[state.matches.length - 1]?.loaderData,
    });
    const applications = useApplicationsStore((state) => state.applications);
    const activeStatus = useApplicationsStore((state) => state.activeStatus);
    const setApplications = useApplicationsStore((state) => state.setApplications);

    useEffect(() => {
        if (Array.isArray(loaderData)) {
            setApplications(loaderData);
        }
    }, [loaderData, setApplications]);

    const filteredApplications =
        activeStatus === APPLICATION_STATUSES.ALL
            ? applications
            : applications.filter((application) => application.status === activeStatus);

    return (
        <section className={styles.applications}>
            <div className={styles.applications__header}>
                <ApplicationsTabs/>
                <ApplicationsControls/>
            </div>
            <ApplicationsList applications={filteredApplications}/>
        </section>
    );
};

export default MyApplications;
