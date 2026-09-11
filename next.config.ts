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
    ];
  },
};

export default nextConfig;
