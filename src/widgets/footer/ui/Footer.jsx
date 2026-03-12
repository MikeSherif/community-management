import styles from './Footer.module.css';
import {TelegramIcon, VkIcon, WhatsappIcon, YouTubeIcon} from "@/shared/ui/icons.jsx";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__body}>
                <ul className={styles.social__icons}>
                    <li className={styles.social__icon}>
                        <TelegramIcon/>
                    </li>
                    <li className={styles.social__icon}>
                        <YouTubeIcon/>
                    </li>
                    <li className={styles.social__icon}>
                        <VkIcon/>
                    </li>
                    <li className={styles.social__icon}>
                        <WhatsappIcon/>
                    </li>
                </ul>
                <a className={styles.email} href="mailto:cornerservicemsk@yandex.ru">cornerservicemsk@yandex.ru</a>

                <article className={styles.footer__telephone}>
                    <div className={styles.footer__bottom_text_wrapper}>
                        Телефон для экстренных случаев:
                    </div>
                    <a className={styles.tel} href="tel:+79856882601">+7 (985) 688-26-01</a>
                </article>
            </div>
            <div className={styles.footer_bottom}>

            </div>
        </div>
    );
};

export default Footer;