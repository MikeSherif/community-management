import React from 'react';
import styles from './HistoryApplication.module.css'
import {HistoryRequestMessageIcon} from "@/shared/ui/icons.jsx";

const HistoryApplication = () => {
    return (
        <li>
            <article className={styles.request}>
                <div className={styles.request__header}>
                    <p className={styles.request__header_text}>
                        Заявка 854 541 • Установка посудомоечной машины
                    </p>
                </div>
                <div className={styles.request__body}>
                    <div className={styles.request__status}>
                        Новая
                    </div>
                    <div className={styles.request__manager}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_124_361)">
                                <g clip-path="url(#clip1_124_361)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M8 16C3.582 16 0 12.418 0 8C0 3.5815 3.582 0 8 0C12.4185 0 16 3.5815 16 8C16 12.418 12.4185 16 8 16ZM7.994 1.5775C6.008 1.5775 4.398 3.188 4.398 5.174C4.398 7.16 6.008 8.77 7.994 8.77C9.979 8.767 11.5875 7.159 11.5905 5.174C11.5905 3.188 9.9805 1.5775 7.994 1.5775ZM12.8435 11.8215C12.7135 11.6795 12.5775 11.5435 12.436 11.414C9.756 8.959 5.594 9.1415 3.139 11.8215C2.942 12.058 2.956 12.4055 3.171 12.626C3.403 12.8635 3.784 12.8685 4.0215 12.6365C4.128 12.52 4.2395 12.4085 4.3555 12.302C6.548 10.294 9.9535 10.4435 11.9615 12.6365C12.076 12.7595 12.237 12.8285 12.405 12.8275C12.5525 12.8255 12.6945 12.77 12.8035 12.671C13.049 12.4475 13.067 12.067 12.8435 11.8215ZM7.994 7.5735C6.669 7.5735 5.595 6.499 5.595 5.174C5.595 3.849 6.669 2.7745 7.994 2.7745C9.3195 2.7745 10.3935 3.849 10.3935 5.174C10.3935 6.499 9.3195 7.5735 7.994 7.5735Z"
                                          fill="#56595F"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_124_361">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_124_361">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={styles.request__manager_role}>Менеджер</p>
                        <p className={styles.request__manager_name}>Екатерина Л.</p>
                    </div>
                    <p className={styles.request__date}>
                        18:45 • 26.09.2020
                    </p>
                </div>
                <div className={styles.request__footer}>
                    <div className={styles.request__footer_wrapper}>
                        <HistoryRequestMessageIcon/>
                        <span className={styles.request__footer_text}>Последнее</span>
                        <span className={styles.request__footer_text}>•</span>
                    </div>
                    <div className={styles.request__footer_text_wrapper}>
                        <span className={styles.request__footer_text}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает соср...
                    </span>
                    </div>

                </div>
            </article>
        </li>
    );
};

export default HistoryApplication;