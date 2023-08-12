/* eslint-disable @next/next/no-sync-scripts */
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import React, {useEffect} from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";
import Router, { useRouter } from "next/router";
import TopBarProgress from "react-topbar-progress-indicator"
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Kinfolq Conference 2023",
    description:
      "Black Tech Conference",
    generator: "Next.js",
    applicationName: "Kinfolq",
    keywords: [
      "freelance",  
      "developer",
      "freelance developer",
      "frontend",
      "react",
      "frontend developer",
      "frontend engineer",
      "creative",
      "creative developer",
      "creative engineer",
      "tech",
      "nigeria",
      "software",
      "software developer",
      "portfolio",
      "frontend developer portfolio",
      "creative developer portfolio",
    ],
    colorScheme: "light",
    openGraph: {
      title: "Kinfolq Conference 2023",
      description:
        "Black Tech Conference",
      url: "https://www.kinfolq.vercel.app/",
      siteName: "www.johnmiicheal.vercel.app",
      images: [
        {
          url: "/website.png",
          width: 1200,
          height: 630,
          alt: "Kinfolq Conference 2023",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Kinfolq Conference 2023",
      description:
        "Black Tech Conference",
      creator: "johnmiiiicheal",
      images: [
        "",
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "technology",
  };

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = React.useState(false)
  Router.events.on("routeChangeStart", () => { setProgress(true) })
  Router.events.on("routeChangeComplete", () => { setProgress(false) })
  TopBarProgress.config({
    barColors: {
      "0": "#FFFFFF20",
      "1.0": "#6D381C"
    }
  })
  const [showChild, setShowChild] = React.useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Kinfolq Conference 2023</title>
        </Head>
          <ChakraProvider theme={theme}>
            {progress && <TopBarProgress />}
          <Component {...pageProps} />
        </ChakraProvider>
        
        </ThemeProvider>
    );
  }
}


export default MyApp;