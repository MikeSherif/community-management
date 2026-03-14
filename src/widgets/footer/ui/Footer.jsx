import styles from './Footer.module.css';
import SocialIcons from "@/shared/ui/social-icons/SocialIcons.jsx";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__body}>
                    <SocialIcons />
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
            <div className={styles.footer__bg_image}></div>
        </>

    );
};

export default Footer;