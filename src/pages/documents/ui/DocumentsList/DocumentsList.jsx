import React from 'react';
import Document from "@/entities/document/ui/Document.jsx";
import styles from './DocumentsList.module.css'

const DocumentsList = ({documents}) => {
    return (
        <ul className={styles.documents}>
            {documents.map((document) => (
                <Document
                    key={document.id}
                    type={document.type}
                    title={document.title}
                    date={document.date}
                    fileUrl={document.fileUrl}
                    fileType={document.fileType}
                    fileSize={document.fileSize}
                />
            ))}
        </ul>
    );
};

export default DocumentsList;
