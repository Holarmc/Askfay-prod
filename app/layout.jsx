// import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/containers/Header";
import Footer from "@/components/containers/Footer";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AskFay",
  description:
    "Revolutionizing the delivery of SRH information and services to reach young people at scale",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en-US">
      <body className="my-2 bg-gray-100 font-inter">
        <div className="container relative mx-auto grid max-w-screen-xl grid-cols-12 gap-4 px-4">
          <Header />
          {children}
          {modal}
          <div id="modal-root" />
        </div>
        <hr className="border-1 mt-1 border-solid border-black-100" />
        <div className="bg-light">
          <div className="container relative mx-auto grid max-w-screen-xl grid-cols-12 gap-4 px-4 ">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
