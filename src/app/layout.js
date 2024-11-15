"use client";
import "./globals.css";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./_components/Navbar";
import Head from "next/head"; // تأكد من استيراد Head
import Footer from "./_components/Footer";
import { usePathname } from "next/navigation";
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

export default function RootLayout({ children, Component, pageProps }) {
  const loc = usePathname();
  const Theme = createTheme({
    colors: {
      main: "#EDC02F",
      secondary: "#383838",
    },
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
  const navLink = loc !== "/" && loc !== "/register" ? arrayHome : arrayLog;
  console.log(navLink);

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

      <body>
        <ThemeProvider theme={Theme}>
          <StyledEngineProvider injectFirst>
            <Navbar links={navLink} />
            <main dir="rtl" className=" min-all">
              {children}
            </main>
            <Footer />
          </StyledEngineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
