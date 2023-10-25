import type { Metadata } from "next";
import { Dela_Gothic_One, Krona_One, Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Newsletter from "@/components/Header/Newsletter";
import Footer from "@/components/Header/Footer";
import Scene from "@/components/3D/Scene";

const mont = Montserrat({ variable: "--font-Mont", subsets: ["latin"] });
const goth = Krona_One({
  variable: "--font-Goth",
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "ONE GRAND OKINAWA",
  description: "One Grand Okinawa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mont.variable} ${goth.variable}`}>
      <body className={`relative font-Mont`}>
        <div
          className="w-screen h-screen fixed top-0 left-0 -z-10"
          style={{
            background:
              "radial-gradient(rgba(88, 23, 176, 0.88) 14%, rgba(148, 88, 255, 1) 94%)",
          }}
        ></div>
        <Header />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
