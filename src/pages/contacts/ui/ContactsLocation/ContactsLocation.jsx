import React from 'react';
import styles from './ContactsLocation.module.css';
import ContactsSchedule from "@/pages/contacts/ui/ContactsSchedule/ContactsSchedule.jsx";
import ContactsMap from "@/pages/contacts/ui/ContactsMap/ContactsMap.jsx";
import { CONTACTS_LOCATION } from "@/pages/contacts/model";

const ContactsLocation = () => {
    const mapRouteUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(CONTACTS_LOCATION.fullAddress)}`;

    return (
        <div className={styles.location}>
            <div className={styles.location__detals}>
                <div className={styles.location__address}>
                    <address className={styles.address}>
                        <span className={styles.region}>{CONTACTS_LOCATION.region}</span>
                        <span className={styles.street}>{CONTACTS_LOCATION.street}</span>
                    </address>
                    <a
                        className={styles.button__map}
                        href={mapRouteUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={'Проложить маршрут на карте'}
                    >
                        Проложить маршрут на карте
                    </a>
                </div>
                <div className={styles.location__info}>
                    <div className={styles.administrator}>
                        <div className={styles.administrator__avatar}></div>
                        <div className={styles.administrator__info}>
                            <span className={styles.administrator__name}>Управляющий · Мария Хасанова</span>
                            <a href="tel:+79991561992" className={styles.administrator__tel}>+7 999 156-19-92</a>
                        </div>
                    </div>
                    <ContactsSchedule/>
                </div>
            </div>
            <ContactsMap
                fullAddress={CONTACTS_LOCATION.fullAddress}
                mapCaption={CONTACTS_LOCATION.mapCaption}
                fallbackCoords={CONTACTS_LOCATION.fallbackCoords}
            />
        </div>
    );
};

export default ContactsLocation;
