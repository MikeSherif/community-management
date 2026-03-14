import styles from './Header.module.css'
import {LogoutIcon} from "@/shared/ui/icons.jsx";
import Notification from "@/widgets/header/ui/Notification/Notification.jsx";
import Message from "@/widgets/header/ui/Message/Message.jsx";
import Details from "@/widgets/header/ui/Details/Details.jsx";
import {useRouterState} from "@tanstack/react-router";
import {ROUTES} from "@/app/router/routes.js";

const Header = () => {
    const pathname = useRouterState({
        select: (state) => state.location.pathname,
    });

    const route = Object.values(ROUTES).find(
        (r) => r.path === pathname || (r.path !== "/" && pathname.startsWith(r.path))
    );

    const title = route?.title || ROUTES.notFound.title;

    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <h1 className={styles.header__title}>{title}</h1>
            </div>
            <div className={styles.header__right}>
                <ul className={styles.header__controls}>
                    <Notification className={styles.header__control}/>
                    <Message className={styles.header__control}/>
                    <Details className={styles.header__control}/>
                    <li className={styles.header__control}>
                        <LogoutIcon/>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;