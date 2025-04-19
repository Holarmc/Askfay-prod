import "@/styles/globals.css";

import Header from "@/components/containers/Header";
import Footer from "@/components/containers/Footer";
import { siteConfig } from "@/config/site";
import { inter } from "@/config/font";

// import TimeAgo from "javascript-time-ago";

// import en from "javascript-time-ago/locale/en";
// import ru from "javascript-time-ago/locale/ru";

// TimeAgo.addDefaultLocale(en);
// TimeAgo.addLocale(ru);

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className={`${inter.className} my-2 bg-gray-100`}>
        <div className="container relative mx-auto grid max-w-screen-xl grid-cols-12 gap-4 px-4">
          <Header />
          {children}
        </div>
        {/* <hr className="mt-1 border-1 border-solid border-black-100" /> */}
        <hr className="mt-1 border-1 border-solid border-black-100" />
        <div className="bg-light">
          <div className="container relative mx-auto grid max-w-screen-xl grid-cols-12 gap-4 px-4">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
