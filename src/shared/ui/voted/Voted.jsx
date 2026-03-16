import React from 'react';
import styles from "./Voted.module.css";
import {PollLikeIcon} from "@/shared/ui/icons.jsx";

const Voted = ({count = 0}) => {
    return (
        <div className={styles.voted}><PollLikeIcon/> Проголосовало • {count}</div>
    );
};

export default Voted;