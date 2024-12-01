"use client";
import "./globals.css";
import { Cairo } from "next/font/google";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./_components/Navbar";
import Head from "next/head";
import Footer from "./_components/Footer";
import { usePathname, useRouter } from "next/navigation";
import {
  Emergency,
  Home,
  HowToReg,
  LocalOffer,
  Login,
  ProductionQuantityLimits,
} from "@mui/icons-material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cairoFont = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const arrayLog = [
  { name_ar: "تسجيل", name_en: "register", icon: <HowToReg /> },
  { name_ar: "تسجيل الدخول", name_en: "/", icon: <Login /> },
];
const arrayHome = [
  { name_ar: "من نحن", name_en: "abutMe", icon: <Emergency /> },
  {
    name_ar: "المنتجات",
    name_en: "products",
    icon: <ProductionQuantityLimits />,
  },
  { name_ar: "العروض", name_en: "offers", icon: <LocalOffer /> },
  { name_ar: "الصفحة الرئيسية", name_en: "home", icon: <Home /> },
];

const Theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Cairo, sans-serif",
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    main: {
      main: "#EDC02F",
      primary: "#242424",
      secondary: "#383838",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function RootLayout({ children }) {
  const loc = usePathname();

  const navLink =
    loc === "/"
      ? arrayLog
      : loc !== "/register" && loc !== "/login"
      ? arrayHome
      : null;
  const show = loc === "/" ? false : true;

  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <body className={`font-cairo ${cairoFont.className} `}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={Theme}>
            {navLink && <Navbar links={navLink} show={show} />}
            <main dir="rtl" className="min-all bg-seconder">
              {children}
            </main>
            {navLink && <Footer />}
          </ThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
