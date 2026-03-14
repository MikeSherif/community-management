import {useState} from 'react';
import styles from './ApplicationsControls.module.css';
import RequestFormModal from "@/widgets/request-form-modal";

const ApplicationsControls = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openCreate = () => setIsOpen('create');

    const handleClose = () => setIsOpen(false);

    const handleSubmit = (data) => {
        console.log('Заявка отправлена:', data);
        // здесь можно zustand или api call
    };
    return (
        <div className={styles.controls}>
            <button onClick={openCreate} className={styles.controls__btn} aria-label='Создать новую заявку'>Создать новую заявку</button>
            {isOpen && (
                <RequestFormModal
                    variant={isOpen}           // 'report' или 'create'
                    onClose={handleClose}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default ApplicationsControls;