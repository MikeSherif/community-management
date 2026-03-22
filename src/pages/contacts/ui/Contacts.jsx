import React from 'react';
import styles from './Contacts.module.css';
import SocialIcons from "@/shared/ui/social-icons/SocialIcons.jsx";
import ContactsHeader from "@/pages/contacts/ui/ContactsHeader/ContactsHeader.jsx";
import ContactsEmployees from "@/pages/contacts/ui/ContactsEmployees/ContactsEmployees.jsx";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <ContactsHeader/>
            <div className={styles.contacts__body}>

            </div>
            <ContactsEmployees/>
        </section>
    );
};

export default Contacts;
