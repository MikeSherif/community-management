import React from 'react';
import styles from './ContactsEmployees.module.css';

const ContactsEmployees = () => {
    return (
        <ul className={styles.employees}>
            <li className={styles.employee}>
                <h4 className={styles.employee__name}>Гульнара Закирова</h4>
                <span className={styles.employee__role}>Директор</span>
                <a href="" className={styles.employee__contact}></a>
            </li>
            <li className={styles.employee}>
                <h4 className={styles.employee__name}>Митя Алешковский</h4>
                <span className={styles.employee__role}>Приемная</span>
                <a href="tel:+79992721912" className={styles.employee__contact}>+7 999 272-19-12</a>
            </li>
            <li className={styles.employee}>
                <h4 className={styles.employee__name}>Анастасия Величкина</h4>
                <span className={styles.employee__role}>Помощник директора</span>
                <a href="mailto:zamdir@info.ru" className={styles.employee__contact}>zamdir@info.ru</a>
            </li>
            <li className={styles.employee}>
                <h4 className={styles.employee__name}>Анастасия Величкина</h4>
                <span className={styles.employee__role}>Помощник директора</span>
                <a href="mailto:zamdir@info.ru" className={styles.employee__contact}>zamdir@info.ru</a>
            </li>
        </ul>
    );
};

export default ContactsEmployees;