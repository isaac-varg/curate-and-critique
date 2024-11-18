import type { Metadata } from "next";
import localFont from "next/font/local";
import { Pacifico } from "next/font/google";
import "./globals.css";
import { auth } from "~/auth";
import { AuthProvider } from "~/components/app/AuthContext";
import ContextProviders from "~/context/ContextProviders";
import Sidebar from "~/components/ui/sidebar/Sidebar";
import ThemeWrapper from "~/components/ui/theme/ThemeWrapper";
import Header from "~/components/ui/header/Header";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--font-pacifico",
});

export const metadata: Metadata = {
    title: "Curate & Critique",
    description: "Collect and rate anything",
};


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();

    return (
        <html lang="en">
            <body>
                <AuthProvider session={session}>
                    <ContextProviders>
                        <ThemeWrapper>
                            <div className={`${pacifico.variable} ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col pt-8 px-8 gap-y-2 h-screen`}>

                                <Header />
                                <div className="pr-8 flex flex-row w-full h-full">

                                    <Sidebar />
                                    <main>{children}</main>
                                </div>
                            </div>
                        </ThemeWrapper>
                    </ContextProviders>
                </AuthProvider>
            </body>
        </html>
    );
}
