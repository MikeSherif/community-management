import React from 'react';
import styles from './RequestFormModal.module.css';

const RequestFormModal = ({variant = 'create', onClose, onSubmit}) => {
    // variant: 'create' или 'report'

    const title = variant === 'report'
        ? 'Сообщить о проблеме'
        : 'Создать заявку';

    const submitText = variant === 'report'
        ? 'Сообщить о проблеме'
        : 'Создать заявку';

    const buttonClass = variant === 'report'
        ? styles.submitReport
        : styles.submitCreate;

    // Здесь можно использовать Zustand, если форма сложная
    // const { formData, setFormData } = useRequestFormStore();

    // Пока простой локальный state (для примера)
    const [description, setDescription] = React.useState('');
    const [phone, setPhone] = React.useState('');
    // ... остальные поля по аналогии

    const handleSubmit = (e) => {
        e.preventDefault();
        // Собираем данные
        const data = {
            category: 'Световое оборудование', // из селекта
            time: '12.12.2026 12:00 - 15:00',
            phone,
            description,
            isUrgent: false, // или из чекбокса
        };
        onSubmit?.(data);
        onClose?.();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={`${styles.header} ${variant === 'report' ? styles.report : ''}`}>
                    <h2 className={`${styles.header__title} ${variant === 'report' ? styles.report : ''}`}>{title}</h2>
                    <button className={styles.close} onClick={onClose}>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="55" height="55" rx="13.253" fill="white"/>
                            <line x1="18.0039" y1="37.617" x2="36.9317" y2="18.6891" stroke="#373737"
                                  stroke-width="2.6506" stroke-linecap="round"/>
                            <line x1="18.0696" y1="18.6895" x2="36.9974" y2="37.6173" stroke="#373737"
                                  stroke-width="2.6506" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label>Что у вас случилось? Выберите категорию</label>
                        <select defaultValue="Световое оборудование">
                            <option>Световое оборудование</option>
                            <option>Сантехника</option>
                            <option>Электрика</option>
                            {/* ... */}
                        </select>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label>Время для прихода мастера</label>
                            <input type="text" placeholder="12.12.2026 12:00 - 15:00"/>
                        </div>
                        <div className={styles.field}>
                            <label>Экстренный номер телефона для связи</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+79289278323"
                            />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label>Опишите задачу или проблему</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="У меня потек кран! Срочно помогите!"
                            rows={4}
                        />
                    </div>

                    <button type="submit" className={`${styles.submit} ${styles.submitCreate}`}>
                        Создать заявку
                    </button>

                    {variant === 'report' && (<>
                        <div className={styles.urgentBlock}>
                            <p>или оставьте срочную заявку если некогда описывать ситуацию</p>
                            <button type="button" className={styles.urgentBtn}>
                                Оставить срочную заявку
                            </button>
                        </div>

                        <div className={styles.footer}>
                    <p>Телефон для экстренных случаев: +7 (985) 688-26-01</p>
            </div></>
            )}

        </form>
</div>
</div>
)
    ;
}

export default RequestFormModal;