import React from 'react';
import styles from './PaymentsHistoryTable.module.css';

const payments = [
    {
        description: 'Консьерж сервис: уборка территории и бронирование билетов в театр',
        note: '',
        date: '12.11.2026',
        amount: '32 000 ₽',
    },
    {
        description: 'Ежемесячный платеж за декабрь 2026',
        note: '',
        date: '05.01.2026',
        amount: '7 000 ₽',
    },
    {
        description: 'Какая-то дополнительная услуга',
        note: 'Оплачена частично',
        date: '11.01.2026',
        amount: '9 000 ₽',
    },
];

const PaymentsHistoryTable = () => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th><div className={styles.thead__text}>За что оплачено?</div></th>
                    <th><div className={styles.thead__text}>Примечание</div></th>
                    <th><div className={styles.thead__text}>Дата платежа</div></th>
                    <th className={styles.amount}><div className={styles.thead__text}>Сумма платежа</div></th>
                </tr>
                </thead>
                <tbody>
                {payments.map((item, index) => (
                    <tr key={index}>
                        <td>{item.description}</td>
                        <td>
                            {item.note ? (
                                <span className={styles.note}>{item.note}</span>
                            ) : (
                                '—'
                            )}
                        </td>
                        <td className={styles.date}>{item.date}</td>
                        <td className={styles.amount}>{item.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PaymentsHistoryTable;