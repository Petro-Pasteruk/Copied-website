import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Copied – Smart keyboard – Copied – Smart keyboard",
    description: "Copied",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
