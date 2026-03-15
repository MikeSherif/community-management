import React from 'react';
import styles from './Document.module.css';
import {DocumentIcon} from "@/shared/ui/icons.jsx";

const Document = ({
                      type = "rules",
                      title = "Правила пользования жилыми помещениями",
                      date = "20 сентября 2026",
                      fileUrl = "/assets/img/news.png",
                      fileType = 'pdf',
                      fileSize = '86 Kb'
                  }) => {
    return (
        <li>
            <a
                href={fileUrl}
                download                     // заставляет браузер скачивать
                className={styles.document}
                aria-label={`Скачать документ ${title}`}
            >
                <div className={styles.icon}><DocumentIcon/></div>
                {/* или иконка по типу */}
                <div className={styles.info}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.meta}>
                        Обновлен {date} - Документ {fileType.toUpperCase()} - {fileSize}
                    </p>
                </div>
            </a>
        </li>
    );
}

export default Document;
