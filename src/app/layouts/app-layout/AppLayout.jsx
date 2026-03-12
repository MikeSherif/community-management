import {Outlet} from "react-router-dom";
import Aside from "@/widgets/aside";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

import styles from "./AppLayout.module.css";

export function AppLayout() {
    return (
        <div className={styles.wrapper}>
            <Aside />

            <div className={styles.rightColumn}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}
