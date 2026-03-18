import React, { useMemo, useState } from 'react';
import { useRouterState } from '@tanstack/react-router';
import styles from './ServiceDetails.module.css';
import { InformationBtnMoreIcon } from '@/shared/ui/icons.jsx';
import { getServiceDetailsById } from '@/pages/services/model/services.jsx';

const ServiceDetails = () => {
    const serviceId = useRouterState({
        select: (state) => state.matches[state.matches.length - 1]?.params?.serviceId,
    });

    const details = useMemo(() => getServiceDetailsById(serviceId), [serviceId]);
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleOption = (optionId) => {
        setSelectedIds((prev) => (
            prev.includes(optionId)
                ? prev.filter((id) => id !== optionId)
                : [...prev, optionId]
        ));
    };

    const totalPrice = details.options
        .filter((option) => selectedIds.includes(option.id))
        .reduce((total, option) => total + option.price, 0);

    return (
        <section className={styles.details}>
            <h2 className={styles.details__title}>{details.title}</h2>

            <ul className={styles.details__grid}>
                {details.options.map((option) => {
                    const isChecked = selectedIds.includes(option.id);
                    return (
                        <li key={option.id}>
                            <label className={`${styles.option} ${isChecked ? styles.optionChecked : ''}`}>
                                <input
                                    type="checkbox"
                                    className={styles.option__input}
                                    checked={isChecked}
                                    onChange={() => toggleOption(option.id)}
                                />
                                <span className={styles.option__checkbox} aria-hidden="true">
                                    <span className={styles.option__dot} />
                                </span>
                                <div className={styles.option__content}>
                                    <h3 className={styles.option__title}>{option.title}</h3>
                                    <div className={styles.option__footer}>
                                        <span className={styles.option__price}>{option.price} руб</span>
                                        <span className={styles.option__details}>{option.details}</span>
                                    </div>
                                </div>
                                <img
                                    className={styles.option__image}
                                    src={option.image}
                                    alt={option.title}
                                />
                            </label>
                        </li>
                    );
                })}
            </ul>

            <div className={styles.details__actions}>
                <button type="button" className={styles.totalButton}>
                    Итого: {totalPrice} руб за {selectedIds.length} услуг
                </button>

                <button type="button" className={styles.payButton}>
                    <InformationBtnMoreIcon />
                    <span className={styles.payButton__text}>Оплатить</span>
                </button>
            </div>
        </section>
    );
};

export default ServiceDetails;
