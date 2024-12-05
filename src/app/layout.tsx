import Header from "~/app/components/common/Header";
import "~/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Race for Water",
    description: "Race for Water",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}