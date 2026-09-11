import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "johnwayneairportlimousine.com";

export function middleware(req:NextRequest){
  const { pathname } = req.nextUrl;

  const redirectTo = (targetPath:string) => {
    const url = req.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    url.pathname = targetPath;
    url.search = "";
    return NextResponse.redirect(url, 301);
  };

  const cityMatch = pathname.match(/^\/Airport-Limousine-(.+)-California\.html$/i);
  if(cityMatch){
    const slug = cityMatch[1].replace(/_/g,"-").replace(/\s+/g,"-").toLowerCase();
    return redirectTo(`/routes/${slug}`);
  }

  const legacyMap:Record<string,string> = {
    "/index.html":"/",
    "/long-beach-airport-limousine.html":"/airport-transfers/sna-to-long-beach-airport",
    "/john-wayne-airport-limousine.html":"/",
    "/orange-county-limousine.html":"/service-areas",
    "/los-angeles-limousine.html":"/service-areas",
    "/lax-airport-limousine.html":"/airport-transfers/sna-to-lax",
    "/san-diego-limousine.html":"/service-areas",
    "/contact-john-wayne-airport-limousine.html":"/",
    "/john-wayne-airport-limousine-gallery.html":"/fleet",
    "/about-john-wayne-airport-limousine.html":"/"
  };

  const target = legacyMap[pathname.toLowerCase()];
  if(target) return redirectTo(target);

  const forwardedProto = req.headers.get("x-forwarded-proto");
  if(req.nextUrl.hostname !== CANONICAL_HOST || (forwardedProto && forwardedProto !== "https")){
    return redirectTo(pathname);
  }

  return NextResponse.next();
}

export const config = { matcher:["/:path*"] };
