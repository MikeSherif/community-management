import React from 'react';
import styles from './HeroPollCard.module.css';
import Voted from "@/shared/ui/voted/Voted.jsx";

const HeroPollCard = () => {
    return (
        <article className={styles.card}>
            <div className={styles.card__image}>

            </div>
            <div className={styles.card__info}>
                <p className={styles.card__date}>Дата начала голосования: 14.02.2026</p>
                <h3 className={styles.card__title}>Примите участие в голосовании</h3>
                <div className={styles.card__info_wrapper}>
                    <Voted/>
                    <button className={styles.controls__btn}>Голосовать</button>
                </div>
            </div>
        </article>
    );
};

export default HeroPollCard;