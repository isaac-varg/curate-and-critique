import type { Metadata } from "next";
import { Inter, Poppins, Alice } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/app/Sidebar";
import Searchbar from "../components/app/SearchBar";
import ContextProviders from "@/context/ContextProviders";
import { getServerSession } from "next-auth";
import { AuthProvider } from "@/components/NextAuthProvider";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const alice = Alice({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alice",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Curate & Critique",
  description: "Curate and rate anything!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${alice.variable}`}
      >
        <ContextProviders>
          <AuthProvider session={session}>
          <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="flex flex-col w-full px-8 py-8 gap-y-8">
              <Searchbar />
              {children}
            </div>
          </div>
          </AuthProvider>
        </ContextProviders>
      </body>
    </html>
  );
}
