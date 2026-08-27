import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "./analytics";
import { SITE_URL } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "John Wayne Airport Limousine | SNA Car Service Orange County",
    template: "%s | John Wayne Airport Limousine"
  },
  description: "Private John Wayne Airport limousine and car service. SNA airport transportation to Newport Beach, Irvine, Laguna Beach, Anaheim, Mission Viejo and across Orange County.",
  keywords: [
    "John Wayne Airport limousine",
    "John Wayne Airport car service",
    "SNA limo service",
    "SNA airport transportation",
    "Orange County airport car service",
    "John Wayne Airport black car",
    "John Wayne Airport chauffeur",
    "SNA private transportation"
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}<GoogleAnalytics/></body></html>;
}
