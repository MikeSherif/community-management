import React from 'react';
import PollsTabs from "@/pages/polls/ui/PollsTabs/PollsTabs.jsx";
import PollsList from "@/pages/polls/ui/PollsList/PollsList.jsx";
import styles from './Polls.module.css'

const Polls = () => {
    return (
        <section className={styles.polls}>
            <PollsTabs/>
            <PollsList/>
        </section>
    );
};

export default Polls;
