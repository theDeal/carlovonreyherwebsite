import type { Metadata } from "next";
import { Jost as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


import * as m from "@/paraglide/messages";


import { Jost } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/themeprovider";
import Footer from "@/components/footer";
import { LanguageProvider } from "@inlang/paraglide-next";
import { languageTag } from "@/paraglide/runtime";

// If loading a variable font, you don't need to specify the font weight
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap'
});


export async function generateMetadata() {
  return {
    title: "Carlo von Reyher | Deutscher Unternehmer und Webentwickler",
    description: m.homepage_meta_desc(),
    openGraph: {
      title: "Carlo von Reyher | Deutscher Unternehmer und Webentwickler",
      description: m.homepage_meta_desc(),
      type: "website",
      locale: 'de',
      alternateLocale: [
        'en', 'fr', 'ru', 'jp', 'ch', 'es', 'de'
      ],
      countryName: "Germany",
      emails: [
        "kontakt@vonreyher.media"
      ],
    },
    twitter: {
      creator: '@c_v_reyher',
      site: '@c_v_reyher',
      description: m.homepage_meta_desc(),
      title: "Carlo von Reyher | Deutscher Unternehmer und Webentwickler",
      card: "summary_large_image",
      images: [
        {
          url: "./api/og=title=" + 'Projete und Utnernehmen',
          alt: "Carlo von Reyher | Deutscher Unternehmer und Webentwickler"
        }
      ],
    },
    category: 'Person',
    keywords: [
      "Carlo von Reyher",
      "Webentwickler",
      "Unternehmer",
      "Deutschland",
      "Webdesign",
      "von Reyher Media UG (Haftungsbeschränkt)"
    ],
    icons: [
      {
        url: '/apple-touch-icon.png',
        rel: 'apple-touch-icon'
      },
      {
        url: '/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/site.webmanifest',
        rel: 'manifest'
      },
      {
        url: '/safari-pinned-tab.svg',
        rel: 'mask-icon',
        color: '#5bbad5'
      },
      {
        url: '/favicon.ico',
        rel: 'shortcut icon'
      }],
  }
}


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>

      <html lang={languageTag()} dir={'ltr'}>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta
    property="og:image"
    content={"./api/og=title=" + 'Über Carlo von Reyher'}
  />
        </head>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
      </LanguageProvider>

  );
}
