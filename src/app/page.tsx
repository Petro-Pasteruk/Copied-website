import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <a href="/" className={styles.header__logo}>
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
                    <a href="/" className={styles.intro__link}>Get for free</a>
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
                <ul className={styles.footer_links}>
                    <li className={styles.footer__item}>
                        <a href="/" className={styles.footer__link}>
                            <Image
                                src="/images/messages.png"
                                alt="messages img"
                                width={104}
                                height={104}
                            />
                        </a>
                    </li>
                    <li className={styles.footer__item}>
                        <a href="/" className={styles.footer__link}>
                            <Image
                                src="/images/gmail.png"
                                alt="gmail img"
                                width={104}
                                height={104}
                            />
                        </a>
                    </li>
                    <li className={styles.footer__item}>
                        <a href="/" className={styles.footer__link}>
                            <Image
                                src="/images/whatsapp.png"
                                alt="whatsapp img"
                                width={104}
                                height={104}
                            />
                        </a>
                    </li>
                    <li className={styles.footer__item}>
                        <a href="/" className={styles.footer__link}>
                            <Image
                                src="/images/x.png"
                                alt="x img"
                                width={104}
                                height={104}
                            />
                        </a>
                    </li>
                    <li className={styles.footer__item}>
                        <a href="/" className={styles.footer__link}>
                            <Image
                                src="/images/chat.png"
                                alt="chat img"
                                width={104}
                                height={104}
                            />
                        </a>
                    </li>
                    <li className={styles.footer__item}>
                        <a href="/" className={styles.footer__link}>
                            <Image
                                src="/images/slack.png"
                                alt="slack img"
                                width={104}
                                height={104}
                            />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
