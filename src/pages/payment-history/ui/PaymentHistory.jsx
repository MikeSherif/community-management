import React from 'react';
import styles from './PaymentHistory.module.css';
import PaymentsHistoryTable from "@/widgets/payments-history-table";

const PaymentHistory = () => {
    return (
        <section className={styles.history}>
            <h1 className={styles.history__title}>Все платежи</h1>
            <PaymentsHistoryTable/>
        </section>
    );
};

export default PaymentHistory;