import React from 'react';
import {ArrowIcon, ProfileIcon} from "@/shared/ui/icons.jsx";
import styles from './Details.module.css';

const Details = (props) => {
    const {
        className = ''
    } = props;
    return (
        <li className={`${className} ${styles.details}`}>
            <div className={styles.details__wrapper}>
                <ProfileIcon />
                <p className={styles.details__text}>
                    Счет • Дом
                </p>
            </div>
            <ArrowIcon/>
        </li>
    );
};

export default Details;