import type { Metadata } from "next";
import {
  Dela_Gothic_One as dela_Gothic_One,
  Zen_Old_Mincho as Zen,
  Krona_One,
  Montserrat,
} from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Newsletter from "@/components/Header/Newsletter";
import Footer from "@/components/Header/Footer";
import Scene from "@/components/3D/Scene";
import logo from "@/public/logo.svg";

const mont = Montserrat({ variable: "--font-Mont", subsets: ["latin"] });
const goth = dela_Gothic_One({
  variable: "--font-Goth",
  subsets: ["latin"],
  weight: "400",
});
const zen = Zen({
  variable: "--font-Zen",
  subsets: ["cyrillic", "latin", "latin-ext", "greek"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "ONE GRAND OKINAWA",
  description: "One Grand Okinawa",
  icons: "./logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mont.variable} ${zen.variable} ${goth.variable} scrollbar-thin scrollbar-track-teal-50 scrollbar-thumb-teal-800 selection:bg-teal-500`}
    >
      <body className={`relative font-Mont !text-teal-950 `}>
        <div
          className="w-screen h-screen fixed top-0 left-0 -z-10"
          style={{
            background:
              "radial-gradient(rgba(255, 250, 230,1) 14%, rgba(234, 255, 242, 1) 94%)",
            // "radial-gradient(rgba(88, 23, 176, 0.88) 14%, rgba(148, 88, 255, 1) 94%)",
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
