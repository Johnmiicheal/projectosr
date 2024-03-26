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
    title: "Project One Strategies and Resources",
    description:
      "Cultivating Excellence",
    generator: "Next.js",
    applicationName: "Project One",
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
      title: "Project One Strategies and Resources",
      description:
        "Cultivating Excellence",
      url: "https://www.projectonesr.com/",
      siteName: "www.projectonesr.com",
      images: [
        {
          url: "/red.png",
          width: 1200,
          height: 630,
          alt: "Project One Strategies and Resources",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Project One Strategies and Resources",
      description:
        "Cultivating Excellence",
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
          <link rel="shortcut icon" href="/projicon.png" />
          <title>Project One Strategy and Resources</title>
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