import styles from './ContactsSchedule.module.css';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const ContactsSchedule = () => {
    return (
        <ul className={styles.schedule__list}>
            {days.map((day) => (
                <li key={day} className={styles.schedule__item}>
                    <span className={styles.schedule__day}>{day}</span>
                    <span className={styles.schedule__time}>08:00</span>
                    <span className={styles.schedule__time}>20:00</span>
                </li>
            ))}
        </ul>
    );
};

export default ContactsSchedule;