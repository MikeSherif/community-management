import React from 'react';
import styles from './ApplicationStatus.module.css';

const statusMap = {
    urgent: {
        text: 'Срочно',
        className: styles.urgent,
    },
    personal: {
        text: 'Лично',
        className: styles.personal,
    },
    new: {
        text: 'Новая',
        className: styles.new,
    },
    active: {
        text: 'Активная',
        className: styles.active,
    },
    closed: {
        text: 'Закрыта',
        className: styles.closed,
    },
};

const ApplicationStatus = ({ status }) => {
    // если статус неизвестный — показываем fallback
    const config = statusMap[status?.toLowerCase()] || {
        text: status || '—',
        className: styles.unknown,
    };

    return (
        <article className={`${styles.status} ${config.className}`}>
            {config.text}
        </article>
    );
};

export default ApplicationStatus;
