import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styles from "./Burger.module.css";

import {
    ConciergeServiceIcon,
    ContactIcon,
    DocumentsIcon,
    LogoutIcon,
    MonitorIcon,
    MyRequestsIcon,
    PersonalAccountIcon,
    ProfileIcon,
    QuizIcon,
} from "@/shared/ui/icons.jsx";

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 992 });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isMobile) return null;

    return (
        <>
            {/* Кнопка бургера */}
            <button
                className={styles.burgerButton}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
                <div className={styles.burgerLines}>
          <span
              className={`${styles.line} ${isOpen ? styles.lineTopActive : ""}`}
          />
                    <span
                        className={`${styles.line} ${isOpen ? styles.lineMiddleActive : ""}`}
                    />
                    <span
                        className={`${styles.line} ${isOpen ? styles.lineBottomActive : ""}`}
                    />
                </div>
            </button>

            {/* Оверлей */}
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayActive : ""}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Боковое меню */}
            <div className={`${styles.menu} ${isOpen ? styles.menuActive : ""}`}>
                <div className={styles.menuHeader}>
                    <h2 className={styles.menuTitle}>Меню</h2>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/"
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                <MonitorIcon />
                                Монитор
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/my-requests"
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                <MyRequestsIcon />
                                Мои заявки
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/personal-account"
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                <PersonalAccountIcon />
                                Лицевой счет
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/documents"
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                <DocumentsIcon />
                                Документы
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/concierge"
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                <ConciergeServiceIcon />
                                Консьерж сервис
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/quizzes"
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                <QuizIcon />
                                Опросы
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/profile"
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                <ProfileIcon />
                                Профиль
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/contacts"
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                <ContactIcon />
                                Контакты
                            </Link>
                        </li>
                    </ul>

                    <button
                        className={styles.logoutButton}
                        onClick={() => {
                            // здесь ваша логика выхода из аккаунта
                            setIsOpen(false);
                        }}
                    >
                        <LogoutIcon />
                        Выйти
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Burger;