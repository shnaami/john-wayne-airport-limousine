import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.johnwayneairportlimousine.com" }],
        destination: "https://johnwayneairportlimousine.com/:path*",
        permanent: true,
      },
      { source: "/John-Wayne-Airport-Limousine.html", destination: "/", permanent: true },
      { source: "/Orange-County-Limousine.html", destination: "/service-areas", permanent: true },
      { source: "/John-Wayne-Airport-Limousine-Gallery.html", destination: "/fleet", permanent: true },
      { source: "/Contact-John-Wayne-Airport-Limousine.html", destination: "/", permanent: true },
      { source: "/about-John-Wayne-Airport-Limousine.html", destination: "/", permanent: true },
      { source: "/Airport-Limousine-Newport_Beach-California.html", destination: "/routes/newport-beach", permanent: true },
      { source: "/Airport-Limousine-Newport_Coast-California.html", destination: "/routes/newport-coast", permanent: true },
      { source: "/Airport-Limousine-Huntington_Beach-California.html", destination: "/routes/huntington-beach", permanent: true },
      { source: "/Airport-Limousine-Costa_Mesa-California.html", destination: "/routes/costa-mesa", permanent: true },
      { source: "/Airport-Limousine-Laguna_Beach-California.html", destination: "/routes/laguna-beach", permanent: true },
      { source: "/Airport-Limousine-Laguna_Niguel-California.html", destination: "/routes/laguna-niguel", permanent: true },
      { source: "/Airport-Limousine-Villa_Park-California.html", destination: "/routes/villa-park", permanent: true },
      { source: "/Airport-Limousine-Anaheim_Hills-California.html", destination: "/routes/anaheim-hills", permanent: true },
      { source: "/Airport-Limousine-Rancho_Santa_Margarita-California.html", destination: "/routes/rancho-santa-margarita", permanent: true },
    ];
  },
};

export default nextConfig;
