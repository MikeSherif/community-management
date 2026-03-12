import React from 'react';
import styles from './Aside.module.css';
import {Link} from "react-router-dom";
import {
    MonitorIcon,
    ConciergeServiceIcon,
    QuizIcon,
    DocumentsIcon,
    LogoutIcon,
    MyRequestsIcon,
    PersonalAccountIcon,
    ProfileIcon,
    ContactIcon,
    LogoIcon, LogoText,
} from "@/shared/ui/icons.jsx";

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.aside__header}>
                <LogoIcon/>
                <LogoText/>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__el}>
                        <Link to="/" className={styles.nav__link}>
                            <MonitorIcon></MonitorIcon>
                            Монитор
                        </Link>
                    </li>
                    <li className={styles.nav__el}>
                        <Link to="/" className={styles.nav__link}>
                            <MyRequestsIcon/>

                            Мои заявки
                        </Link>
                    </li>
                    <li className={styles.nav__el}>
                        <Link to="/" className={styles.nav__link}>
                            <PersonalAccountIcon/>

                            Лицевой счет
                        </Link>
                    </li>
                    <li className={styles.nav__el}>
                        <Link to="/" className={styles.nav__link}>
                            <DocumentsIcon/>
                            Документы
                        </Link>
                    </li>
                    <li className={styles.nav__el}>
                        <Link to="/" className={styles.nav__link}>
                            <ConciergeServiceIcon/>
                            Консьерж сервис
                        </Link>
                    </li>
                    <li className={styles.nav__el}>
                        <Link to="/" className={styles.nav__link}>
                            <QuizIcon/>
                            Опросы
                        </Link>
                    </li>
                    <li className={styles.nav__el}>
                        <Link to="/" className={styles.nav__link}>
                            <ProfileIcon/>
                            Профиль
                        </Link>
                    </li>
                    <li className={styles.nav__el}>
                        <Link to="/" className={styles.nav__link}>
                            <ContactIcon/>
                            Контакты
                        </Link>
                    </li>
                </ul>
                <button className={styles.btn__logout}>
                    <LogoutIcon/>
                    Выйти
                </button>
            </nav>
        </aside>
    );
};

export default Aside;