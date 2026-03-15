import React from 'react';
import styles from "./DocumentsTabs.module.css";
import { DOCUMENT_TYPES, useDocumentsStore } from "@/pages/documents/model/documentsStore.js";

const DocumentsTabs = () => {
    const activeType = useDocumentsStore((state) => state.activeType);
    const setActiveType = useDocumentsStore((state) => state.setActiveType);

    const tabs = [
        { label: 'Все', type: DOCUMENT_TYPES.ALL },
        { label: 'Тарифы', type: DOCUMENT_TYPES.TARIFFS },
        { label: 'Правила', type: DOCUMENT_TYPES.RULES },
        { label: 'Подрядчики', type: DOCUMENT_TYPES.CONTRACTORS },
    ];

    return (
        <ul className={styles.tabs}>
            {tabs.map((tab) => (
                <li
                    key={tab.type}
                    className={`${styles.tab} ${activeType === tab.type ? styles.active : ''}`}
                    onClick={() => setActiveType(tab.type)}
                >
                    {tab.label}
                </li>
            ))}
        </ul>
    );
};

export default DocumentsTabs;
