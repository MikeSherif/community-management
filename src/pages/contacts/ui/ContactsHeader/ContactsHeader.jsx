import React from 'react';
import styles from './ContactsHeader.module.css';
import SocialIcons from "@/shared/ui/social-icons/SocialIcons.jsx";

const ContactsHeader = () => {
    return (
        <div className={styles.contacts__header}>
            <div className={styles.contacts__header_wrapper}>
                <p className={styles.contacts__header_text}>Телефон для экстренных случаев</p>
                <a className={styles.contacts__tel} href="tel:+79856882601">+7 (985) 688-26-01</a>
            </div>
            <div className={styles.contacts__header_wrapper}>
            <SocialIcons/>
                <a className={styles.contacts__email}
                   href="mailto:cornerservicemsk@yandex.ru">cornerservicemsk@yandex.ru</a>
            </div>
        </div>
    );
};

export default ContactsHeader;