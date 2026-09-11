import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "./analytics";
import { LOCAL_BUSINESS_SCHEMA, SITE_URL, WEBSITE_ID } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "John Wayne Airport Limousine | SNA Car Service",
    template: "%s | John Wayne Airport Limousine"
  },
  description: "John Wayne Airport limousine and private car service for SNA arrivals and departures, with black SUVs and professional chauffeurs across Orange County.",
  keywords: [
    "John Wayne Airport car service",
    "John Wayne Airport limo service",
    "John Wayne Airport limousine",
    "SNA car service",
    "SNA limo service",
    "SNA black car service",
    "SNA airport transportation",
    "John Wayne Airport chauffeur service",
    "SNA to Newport Beach car service",
    "SNA to Laguna Beach car service",
    "SNA to Mission Viejo car service",
    "SNA to Dana Point car service",
    "SNA private transportation"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "John Wayne Airport Limousine",
    title: "John Wayne Airport Limousine & Car Service | SNA Transportation",
    description: "Private SNA airport car, limousine and chauffeur service to Newport Beach, Laguna Beach, Irvine, Anaheim, Mission Viejo and Orange County.",
    images: [
      {
        url: "/john-wayne-airport-master.jpg",
        alt: "John Wayne Airport Limousine and SNA private car service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "John Wayne Airport Limousine & Car Service | SNA Transportation",
    description: "Private SNA airport car, limousine and chauffeur service throughout Orange County.",
    images: ["/john-wayne-airport-master.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS_SCHEMA,
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "John Wayne Airport Limousine",
      url: SITE_URL,
      publisher: { "@id": LOCAL_BUSINESS_SCHEMA["@id"] },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema).replace(/</g,"\\u003c")}}/><GoogleAnalytics/></body></html>;
}
