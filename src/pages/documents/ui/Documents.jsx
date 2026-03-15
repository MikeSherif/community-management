import React from 'react';
import DocumentsList from "@/pages/documents/ui/DocumentsList/DocumentsList.jsx";
import DocumentsTabs from "@/pages/documents/ui/DocumentsTabs/DocumentsTabs.jsx";
import { DOCUMENT_TYPES, useDocumentsStore } from "@/pages/documents/model/documentsStore.js";

import styles from './Documents.module.css'

const Documents = () => {
    const documents = useDocumentsStore((state) => state.documents);
    const activeType = useDocumentsStore((state) => state.activeType);

    const filteredDocuments =
        activeType === DOCUMENT_TYPES.ALL
            ? documents
            : documents.filter((document) => document.type === activeType);

    return (
        <section className={styles.documents}>
            <DocumentsTabs/>
            <DocumentsList documents={filteredDocuments}/>
        </section>
    );
};

export default Documents;
