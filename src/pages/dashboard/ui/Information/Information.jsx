import React from 'react';
import styles from './Information.module.css';
import {InformationBtnMoreIcon} from "@/shared/ui/icons.jsx";

const Information = () => {
    return (
        <article className={styles.information}>
            <div className={styles.information__hero}>
                <h2 className={styles.information__title}>
                    Информация для жителей комьюнити
                </h2>
                <div className={styles.information__hero_wrapper}>
                    <div className={styles.information__hero_text_wrapper}>
                        <p className={styles.information__hero_text}>
                            Экстренные новости и полезная информация для наших жителей. События и праздники, которые мы
                            отмечаем выкладываются здесь.
                        </p>
                    </div>

                    <button className={styles.information__btn_more}>
                        <InformationBtnMoreIcon/>
                        <span className={styles.information__btn_more_text}>Подробнее</span>
                    </button>
                </div>
            </div>
            <div className={styles.information__body}>
                <ul className={styles.information__news_list}>
                    <li className={styles.information__news}>
                        <div className={styles.information__news_wrapper}>
                            <span className={styles.information__news_label}>Новость · 10 сен 2025</span>
                            <h3 className={styles.information__news_title}>Заголовок новости может быть как в два, так и в три ряда</h3>
                        </div>
                        <img className={styles.information__news_image} src="/assets/img/news.png" alt="Картинка новостей"/>
                    </li>
                    <li className={styles.information__news}>
                        <div className={styles.information__news_wrapper}>
                            <span className={styles.information__news_label}>Новость · 10 сен 2025</span>
                            <h3 className={styles.information__news_title}>Заголовок новости может быть как в два, так и в три ряда</h3>
                        </div>
                        <img className={styles.information__news_image} src="/assets/img/news.png" alt="Картинка новостей"/>
                    </li>
                    <li className={styles.information__news}>
                        <div className={styles.information__news_wrapper}>
                            <span className={styles.information__news_label}>Новость · 10 сен 2025</span>
                            <h3 className={styles.information__news_title}>Заголовок новости может быть как в два, так и в три ряда</h3>
                        </div>
                        <img className={styles.information__news_image} src="/assets/img/news.png" alt="Картинка новостей"/>
                    </li>

                </ul>
                <ul className={styles.information__article_list}>
                    <li className={styles.information__article_el}>
                        <article className={styles.information__article}>
                            <span className={styles.information__article_label}>Статья · 10 сен 2025</span>
                            <p className={styles.infotmation__article_text}>Мы завели нового кота</p>
                        </article>
                    </li>
                    <li className={styles.information__article_el}>
                        <article className={styles.information__article}>
                            <span className={styles.information__article_label}>Статья · 10 сен 2025</span>
                            <p className={styles.infotmation__article_text}>Мы завели нового кота</p>
                        </article>
                    </li>
                    <li className={styles.information__article_el}>
                        <article className={styles.information__article}>
                            <span className={styles.information__article_label}>Статья · 10 сен 2025</span>
                            <p className={styles.infotmation__article_text}>Мы завели нового кота</p>
                        </article>
                    </li>
                </ul>
            </div>


        </article>
    );
};

export default Information;