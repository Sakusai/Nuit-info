/* eslint-disable */
import Header from "~/app/components/common/Header";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import LyrecoChecker from "./components/easter/LyrecoChecker";
import KonamiEmojiChanger from "~/components/KonamiEmojiChanger";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Race for Water - Avenir Océan",
    description: "Site web de l'événement NUIT DE L'INFO 2024",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="flex flex-col min-h-screen">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body className={`flex flex-col flex-1 ${inter.className}`}>
                <Header />
                <main className="flex flex-col flex-1">
                    <LyrecoChecker />
                    <KonamiEmojiChanger />
                    {children}
                </main>
            </body>
        </html>
    );
}