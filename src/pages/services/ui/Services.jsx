import React from 'react';
import styles from './Services.module.css';
import Service from "@/entities/service";
import {services} from "@/pages/services/model/services.jsx";

const Services = () => {
    return (
        <section className={styles.services}>
            <h2 className={styles.services__title}>
                Выберите категорию
            </h2>
            <ul className={styles.services__list}>
                {services.map((item) => (
                    <Service key={item.id} id={item.id} title={item.title} icon={item.icon} />
                ))}
            </ul>
        </section>
    );
};

export default Services;
