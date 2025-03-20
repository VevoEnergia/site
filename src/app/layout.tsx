import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Ratings/Footer/Footer";
import WhatsappBubble from "@/components/Contact/WhatsappBubble";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-robot",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Vevo Energia Fotovoltáica",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased bg-white !overflow-x-hidden `}
      >
        <Nav />
        {children}
        <WhatsappBubble />
        <Footer />
      </body>
    </html>
  );
}
