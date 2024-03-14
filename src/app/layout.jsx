import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { CartProvider } from "./CartProvider";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("relative h-full font-sans", inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <CartProvider>
            {/* <CookieConsent /> */}
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
