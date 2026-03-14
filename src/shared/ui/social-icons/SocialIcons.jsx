import React from 'react';
import styles from "./SocialIcons.module.css";
import {TelegramIcon, VkIcon, WhatsappIcon, YouTubeIcon} from "@/shared/ui/icons.jsx";

const SocialIcons = () => {
    return (
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
    );
};

export default SocialIcons;