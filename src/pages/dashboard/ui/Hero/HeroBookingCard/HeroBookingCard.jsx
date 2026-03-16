import React from 'react';
import styles from "./HeroBookingCard.module.css";
import Voted from "@/shared/ui/voted/Voted.jsx";

const HeroBookingCard = () => {
    return (
        <article className={styles.card}>
            <div className={styles.card__image}>

            </div>
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>Вы можете узнать свободен ли теннисный корт и забронировать время для игры!</h3>
                <div className={styles.card__info_wrapper}>
                    <button className={styles.controls__btn}>Забронировать</button>
                </div>
            </div>
        </article>
    );
};

export default HeroBookingCard;