import React from 'react';
import styles from './MyApplicationsDetail.module.css';
import ApplicationStatus from "@/shared/ui/application-status/index.js";


const MyApplicationsDetail = () => {

    return (
        <section className={styles.detail}>
            <div className={styles.detail__header}>
                <div className={styles.detail__header_wrapper}>
                    <div className={styles.plates}>
                        <ApplicationStatus status={'active'}/>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.info__title}>Установка или замена светильника, люстры</h2>
                    </div>
                </div>
                <div className={styles.date}>
                    <span className={styles.date__text}>18:45 • 26 сентября 2026</span>
                </div>
            </div>
            <div className={styles.detail__body}>

            </div>
        </section>
    );
};

export default MyApplicationsDetail;
