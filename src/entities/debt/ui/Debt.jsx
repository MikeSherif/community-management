import React from 'react';
import styles from './Debt.module.css';
import {DebtIcon} from "@/shared/ui/icons.jsx";
const Debt = (props) => {
    const {debt, debts} = props;
    return (
        <article className={styles.debt}>
            <div className={styles.debt__header}>
                <div className={styles.debt__text_wrapper}>
                    <p className={styles.debt__header_text}>
                        У вас есть просроченная задолженность!
                    </p>
                </div>
                <DebtIcon/>
            </div>
            <div className={styles.debt__footer}>
                <div className={styles.debt__status}>
                    1 890 ₽
                </div>
                <div className={styles.debt__tabs}>
                    <button className={`${styles.debt__tab} ${styles.active}`} onClick={() => {}}>
                        Оплатить
                    </button>
                    <button className={styles.debt__tab}>
                        История
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Debt;