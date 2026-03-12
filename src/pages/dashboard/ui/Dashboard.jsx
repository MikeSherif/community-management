import React from 'react';
import styles from './Dashboard.module.css';
import Information from "@/pages/dashboard/ui/Information/Information.jsx";
import Hero from "@/pages/dashboard/ui/Hero/Hero.jsx";

const Dashboard = () => {
    return (
        <section className="dashboard">
            <Hero/>
            <Information />
        </section>
    );
};

export default Dashboard;