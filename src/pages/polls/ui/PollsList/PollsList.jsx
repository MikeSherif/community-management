import React from 'react';
import styles from './PollsList.module.css';
import PollCard from "@/entities/poll-card/ui/PollCard.jsx";

const PollsList = () => {
    return (
        <ul className={styles.list}>
            <PollCard voted={true}/>
            <PollCard/>
            <PollCard/>
        </ul>
    );
};

export default PollsList;