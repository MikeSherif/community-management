import { Outlet } from "@tanstack/react-router";
import Aside from "@/widgets/aside";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import SeoProvider from "@/app/providers/SeoProvider.jsx";

import styles from "./AppLayout.module.css";


export function AppLayout() {
    return (
        <>
            <SeoProvider/>
            <div className={styles.wrapper}>
                <Aside/>

                <div className={styles.rightColumn}>
                    <Header/>
                    <main className={styles.main}>
                        <Outlet/>
                    </main>

                </div>
            </div>
            <Footer/>
        </>
    );
}
