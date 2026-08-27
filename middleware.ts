import { NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest){
  const { pathname } = req.nextUrl;
  const cityMatch = pathname.match(/^\/Airport-Limousine-(.+)-California\.html$/i);
  if(cityMatch){
    const slug = cityMatch[1].replace(/_/g,"-").replace(/\s+/g,"-").toLowerCase();
    return NextResponse.redirect(new URL(`/routes/${slug}`, req.url), 301);
  }
  const airportMap:Record<string,string> = {
    "/Long-Beach-Airport-Limousine.html":"/routes/long-beach",
    "/John-Wayne-Airport-Limousine.html":"/",
    "/Orange-County-Limousine.html":"/service-areas",
    "/Los-Angeles-Limousine.html":"/service-areas"
  };
  const target = airportMap[pathname];
  if(target) return NextResponse.redirect(new URL(target, req.url),301);
  return NextResponse.next();
}

export const config = { matcher:["/:path*"] };
