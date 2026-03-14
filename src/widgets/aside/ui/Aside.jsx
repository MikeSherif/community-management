import React from 'react';
import styles from './Aside.module.css';
import {Link} from "@tanstack/react-router";
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
import Burger from "@/widgets/burger";
import {useMediaQuery} from "react-responsive";
import {ROUTES} from "@/app/router/routes.js";

const Aside = () => {
    const isMobile = useMediaQuery({maxWidth: 992});
    return (
        <>
            {!isMobile && (
                <aside className={styles.aside}>
                    <div className={styles.aside__header}>
                        <LogoIcon/>
                        <LogoText/>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.nav__list}>
                            <li className={styles.nav__el}>
                                <Link to={ROUTES.dashboard.path} className={`${styles.nav__link}`}
                                      activeProps={{className: `${styles.nav__link} ${styles.active}`}}>
                                    <MonitorIcon></MonitorIcon>
                                    Монитор
                                </Link>
                            </li>
                            <li className={styles.nav__el}>
                                <Link to={ROUTES.applications.path} className={styles.nav__link}
                                      activeProps={{className: `${styles.nav__link} ${styles.active}`}}>
                                    <MyRequestsIcon/>

                                    Мои заявки
                                </Link>
                            </li>
                            <li className={styles.nav__el}>
                                <Link to={ROUTES.account.path} className={styles.nav__link}
                                      activeProps={{className: `${styles.nav__link} ${styles.active}`}}>
                                    <PersonalAccountIcon/>

                                    Лицевой счет
                                </Link>
                            </li>
                            <li className={styles.nav__el}>
                                <Link to={ROUTES.documents.path} className={styles.nav__link}
                                      activeProps={{className: `${styles.nav__link} ${styles.active}`}}>
                                    <DocumentsIcon/>
                                    Документы
                                </Link>
                            </li>
                            <li className={styles.nav__el}>
                                <Link to={ROUTES.concierge.path} className={styles.nav__link}
                                      activeProps={{className: `${styles.nav__link} ${styles.active}`}}>
                                    <ConciergeServiceIcon/>
                                    Консьерж сервис
                                </Link>
                            </li>
                            <li className={styles.nav__el}>
                                <Link to={ROUTES.polls.path} className={styles.nav__link}
                                      activeProps={{className: `${styles.nav__link} ${styles.active}`}}>
                                    <QuizIcon/>
                                    Опросы
                                </Link>
                            </li>
                            <li className={styles.nav__el}>
                                <Link to={ROUTES.profile.path} className={styles.nav__link}
                                      activeProps={{className: `${styles.nav__link} ${styles.active}`}}>
                                    <ProfileIcon/>
                                    Профиль
                                </Link>
                            </li>
                            <li className={styles.nav__el}>
                                <Link to={ROUTES.contacts.path} className={styles.nav__link}
                                      activeProps={{className: `${styles.nav__link} ${styles.active}`}}>
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
            )}

            <Burger/>
        </>

    );
};

export default Aside;
