import styles from './Header.module.css'
import {NotificationIcon,MessageIcon, ProfileIcon, LogoutIcon} from "@/shared/ui/icons.jsx";
import Notification from "@/widgets/header/ui/Notification/Notification.jsx";
import Message from "@/widgets/header/ui/Message/Message.jsx";
import Details from "@/widgets/header/ui/Details/Details.jsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <h1 className={styles.header__title}>Монитор</h1>
            </div>
            <div className={styles.header__right}>
                <ul className={styles.header__controls}>
                    <Notification className={styles.header__control}/>
                    <Message className={styles.header__control}/>
                    <Details className={styles.header__control}/>
                    <li className={styles.header__control}>
                        <LogoutIcon />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;