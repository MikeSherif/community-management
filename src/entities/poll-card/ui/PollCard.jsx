import React from 'react';
import styles from './PollCard.module.css';
import {PollLikeIcon} from "@/shared/ui/icons.jsx";

const PollCard = (props) => {
    const {
        id,
        image = 'assets/img/poll.png',
        title = 'Оценка работы УК Корнер лапино',
        count = 0,
    } = props;
    return (
        <li>
            <article className={styles.card}>
                <div
                    className={styles.card__image_wrapper}
                style={{backgroundImage: `url(${image})`}}>

                </div>
                <div className={styles.card__wrapper}>
                    <h2 className={styles.card__title}>{title}</h2>
                    <p className={styles.card__description}><PollLikeIcon/> Проголосовало • {count}</p>
                </div>
            </article>
        </li>
    );
};

export default PollCard;