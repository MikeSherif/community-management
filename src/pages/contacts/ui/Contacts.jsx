import React from 'react';
import styles from './Contacts.module.css';
import SocialIcons from "@/shared/ui/social-icons/SocialIcons.jsx";
import ContactsHeader from "@/pages/contacts/ui/ContactsHeader/ContactsHeader.jsx";
import ContactsEmployees from "@/pages/contacts/ui/ContactsEmployees/ContactsEmployees.jsx";
import ContactsLocation from "@/pages/contacts/ui/ContactsLocation/ContactsLocation.jsx";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <ContactsHeader/>
            <ContactsLocation/>
            <ContactsEmployees/>
        </section>
    );
};

export default Contacts;
