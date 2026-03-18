import React from 'react';
import styles from './Service.module.css';
import {LandscapeIcon} from "@/shared/ui/icons.jsx";
import {Link} from "@tanstack/react-router";
import { ROUTES } from "@/app/router/routes.js";

const Service = ({id = '1', title = 'Участок и ландшафт', icon = <LandscapeIcon/>}) => {
    return (
        <li>
            <Link
                to={`${ROUTES.services.path}/$serviceId`}
                params={{ serviceId: String(id) }}
                className={styles.service}
            >
                <h3 className={styles.service__title}>{title}</h3>
                {icon}
            </Link>
        </li>
    );
};

export default Service;
