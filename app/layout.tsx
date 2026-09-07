import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "./analytics";
import { SITE_URL } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "John Wayne Airport Car Service & Limo | SNA Black Car Transportation",
    template: "%s | John Wayne Airport Limousine"
  },
  description: "John Wayne Airport car service, limo, black car and private chauffeur transportation from SNA to Newport Beach, Laguna Beach, Irvine, Anaheim, Mission Viejo, Dana Point and Orange County.",
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

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}<GoogleAnalytics/></body></html>;
}
