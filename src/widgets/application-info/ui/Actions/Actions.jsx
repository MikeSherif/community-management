import React from 'react';
import styles from './Actions.module.css';

const Actions = () => {
    return (
        <div className={styles.actions}>
            <div className={styles.check}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_643_3229)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9 18C4.0295 18 0 13.9705 0 9C0 4.0295 4.0295 0 9 0C13.9705 0 18 4.0295 18 9C18 13.9705 13.9705 18 9 18ZM9 1.2C4.6925 1.2 1.2 4.692 1.2 9C1.2 13.308 4.6925 16.8 9 16.8C13.308 16.8 16.8 13.308 16.8 9C16.8 4.692 13.308 1.2 9 1.2ZM9.426 14.088C9.3705 14.146 9.303 14.191 9.228 14.22C9.083 14.284 8.917 14.284 8.772 14.22C8.697 14.191 8.6295 14.146 8.574 14.088L5.574 11.088C5.3415 10.854 5.3415 10.476 5.574 10.242L5.5775 10.2385C5.8125 10.005 6.1925 10.007 6.426 10.242L8.4 12.216V4.332C8.4 4.0005 8.6685 3.732 9 3.732C9.3315 3.732 9.6 4.0005 9.6 4.332V12.216L11.574 10.242L11.5775 10.2385C11.813 10.005 12.1925 10.007 12.426 10.242C12.6585 10.476 12.6585 10.854 12.426 11.088L9.426 14.088Z"
                              fill="#23C47B"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_643_3229">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                <span className={styles.check__name}>Чек об оплате</span>
            </div>
            <div className={styles.buttons}>
                <button className={`${styles.cancel__btn} ${styles.btn}`}><span className={styles.btn__text}>Отменить заявку</span></button>
                <button className={`${styles.appeal__btn} ${styles.btn}`}><span className={styles.btn__text}>Пожаловаться</span></button>
            </div>
        </div>
    );
};

export default Actions;