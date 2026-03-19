import React from 'react';
import styles from './ApplicationInfo.module.css';
import Comment from "@/widgets/application-info/ui/Comment/Comment.jsx";
import Manager from "@/widgets/application-info/ui/Manager/Manager.jsx";
import Date from "@/widgets/application-info/ui/Date/Date.jsx";
import Telephone from "@/widgets/application-info/ui/Telephone/Telephone.jsx";
import Address from "@/widgets/application-info/ui/Address/Address.jsx";
import Actions from "@/widgets/application-info/ui/Actions/Actions.jsx";

const ApplicationInfo = () => {
    return (
        <div className={styles.info}>
            <Comment/>
            <Manager/>
            <Date/>
            <Telephone/>
            <Address/>
            <Actions/>
        </div>
    );
};

export default ApplicationInfo;