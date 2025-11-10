import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalPreloader from "@/components/GlobalPreloader";
import favicon from "@/public/favicon.png"
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
// ========================
// ✅ Metadata Configuration
// ========================
export const metadata = {
  title: "Abdullah Sajjad | Javascript Developer | Hire Web Developer",
  description:
    "Get modern, responsive, and SEO-friendly websites by Abdullah Sajjad, expert in React, Next.js, and MERN stack web development for your business.",
  keywords:
    "Hire Web Developer, React Developer, MERN Stack Developer, Freelance Web Developer, Front-End Developer, Next.js Developer, Custom Web Development, Modern Website Design, Business Website, Abdullah Sajjad Developer, Portfolio Web Developer, Web Development Services",
  openGraph: {
    title: "Abdullah Sajjad | Javascript Developer | Hire Web Developer",
    description:
      "Looking to hire a professional web developer? I build modern, SEO-friendly websites using React, Next.js, and Node.js to help your business grow online.",
    url: "https://abdullahsajjad.vercel.app",
    siteName: "Abdullah Sajjad - Web Developer Portfolio",
    images: [
      {
        url: "https://abdullahsajjad.vercel.app/abdullah.JPG",
        width: 500,
        height: 630,
        alt: "Abdullah Sajjad - Professional Web Developer and React Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://abdullahsajjad.vercel.app",
  },
  icons: {
    icon: "/favicon.png", // ✅ Automatically handled favicon from /public folder
  },
};

// ========================
// ✅ Font Imports
// ========================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

// ========================
// ✅ Root Layout Component
// ========================
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Favicon (Backup) */}
        <link rel="icon" href={favicon}  type="image/png" sizes="any" />

        {/* Quicksand + Ubuntu fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased mt-[65px] w-[100vw] overflow-x-hidden`}
      >
        {/* Global Preloader */}
        <GlobalPreloader />
        <ScrollToTopButton/>
        <ScrollToTop />

        {/* Main Layout */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
