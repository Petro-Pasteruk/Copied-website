'use client';

import Image from "next/image";
import styles from "./page.module.css";

declare global {
    interface Window {
        fbq: (...args: any[]) => void;
    }
}

export default function Home() {
    const handleClick = () => {
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: 'Get for Free Button Click',
                content_category: 'Intro Section',
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <a href="https://copiedpro.com" className={styles.header__logo}>
                    <Image
                        src="/images/logo.svg"
                        alt="Copied Logo"
                        width={354}
                        height={81}
                        priority
                    />
                </a>
            </header>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1 className={styles.intro__title}>Your Keyboard, Your Rules</h1>
                    <Image
                        src="/images/intro-img.png"
                        alt="Intro Img"
                        className={styles.intro__img}
                        width={1266}
                        height={1551}
                        priority
                    />
                    <a href="https://apps.apple.com/app/apple-store/id1517022963" className={styles.intro__link} onClick={handleClick}>
                        Get for free
                    </a>
                </div>
            </main>
            <footer className={styles.footer}>
                <Image
                    src="/images/footer-img.png"
                    alt="Footer Img"
                    className={styles.footer__img}
                    width={540}
                    height={208}
                    priority
                />
                <Image
                    src="/images/footer-socials.png"
                    alt="Footer Socials Img"
                    className={styles.footer__socials}
                    width={2957}
                    height={295}
                    priority
                />
            </footer>
        </div>
    );
}
