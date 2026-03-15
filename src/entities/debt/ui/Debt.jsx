// src/widgets/Debt/ui/Debt.js   (или shared/ui/Debt/Debt.js — как удобнее в твоём FSD)
import React, { useState } from 'react';
import styles from './Debt.module.css';
import { DebtIcon } from '@/shared/ui/icons.jsx';
import { useNavigate } from "@tanstack/react-router";
import { ROUTES } from "@/app/router/routes.js";

const Debt = () => {
    const [isPaid, setIsPaid] = useState(false);
    const [amount, setAmount] = useState(1890);
    const navigate = useNavigate();

    const handlePayClick = () => {
        // Здесь в реальном проекте будет вызов API / zustand-действие
        // setTimeout имитирует "оплату"
        setTimeout(() => {
            setAmount(0);
            setIsPaid(true);
        }, 800); // небольшая задержка для ощущения процесса
    };

    return (
        <article className={styles.debt}>
            <div className={styles.debt__header}>
                <div className={styles.debt__text_wrapper} style={isPaid ? { maxWidth: '300px' } : {maxWidth: '150px'}}>
                    <p className={styles.debt__header_text}>
                        {isPaid
                            ? 'Спасибо! На данный момент задолженность отсутствует!'
                            : 'У вас есть просроченная задолженность!'}
                    </p>
                </div>
                <DebtIcon />
            </div>

            <div className={styles.debt__footer}>
                <div className={`${styles.debt__status} ${isPaid ? styles.paid : ''}`}>
                    {amount.toLocaleString('ru-RU')} ₽
                </div>

                <div className={styles.debt__tabs}>
                    <button
                        className={`${styles.debt__tab} ${styles.active} ${isPaid ? styles.paid : ''}`}
                        onClick={handlePayClick}
                        disabled={isPaid || amount === 0}
                    >
                        {isPaid ? 'Оплачено' : 'Оплатить'}
                    </button>

                    <button
                        className={styles.debt__tab}
                        disabled={isPaid}
                        onClick={() => navigate({ to: ROUTES.paymentHistory.path })}
                    >
                        История
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Debt;
