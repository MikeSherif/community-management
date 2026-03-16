import React from 'react';
import styles from './PollCard.module.css';
import {PollLikeIcon} from "@/shared/ui/icons.jsx";
import Voted from "@/shared/ui/voted/Voted.jsx";

const PollCard = (props) => {
    const {
        id,
        image = 'assets/img/poll.png',
        title = 'Оценка работы УК Корнер лапино',
        count = 0,
        voted = false,
    } = props;
    return (
        <li>
            <article className={styles.card}>
                <div
                    className={styles.card__image_wrapper}
                style={{backgroundImage: `url(${image})`}}>
                    {voted ? (
                        <div className={styles.voted}>Вы проголосовали</div>
                    ) : ''}
                </div>
                <div className={styles.card__wrapper}>
                    <h2 className={styles.card__title}>{title}</h2>
                    <Voted count={count}></Voted>
                </div>
            </article>
        </li>
    );
};

export default PollCard;