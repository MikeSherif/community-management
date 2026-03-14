import React from 'react';
import styles from './ApplicationsList.module.css';
import MyApplication from "@/entities/my-application";

const ApplicationsList = () => {
    return (
        <ul className={styles.applications}>
            <MyApplication />
            <MyApplication id={'111 111'} status={'new'}/>
            <MyApplication id={'111 112'} status={'personal'}/>
            <MyApplication id={'111 113'} status={'urgent'}/>
        </ul>
    );
};

export default ApplicationsList;