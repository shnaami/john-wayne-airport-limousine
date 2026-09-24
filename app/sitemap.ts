import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "./site-data";
import { SERVICE_ARTICLES } from "./service-content";
export default function sitemap():MetadataRoute.Sitemap{
  return [
    {url:SITE_URL,lastModified:new Date("2026-09-24"),changeFrequency:"weekly",priority:1},
    {url:`${SITE_URL}/service-areas`,changeFrequency:"monthly",priority:.9},
    {url:`${SITE_URL}/fleet`,changeFrequency:"monthly",priority:.9},
    ...SERVICE_ARTICLES.map(a=>({url:SITE_URL+a.path,changeFrequency:"monthly" as const,priority:.9})),
    ...ROUTES.map(r=>({url:`${SITE_URL}/routes/${r.slug}`,lastModified:["newport-beach","irvine","dana-point","san-clemente","west-hollywood","cerritos","signal-hill","san-gabriel","manhattan-beach","la-verne","hermosa-beach","san-fernando","san-dimas","walnut","lancaster"].includes(r.slug)?new Date("2026-09-24"):undefined,changeFrequency:"monthly" as const,priority:r.county==="Orange County"?.86:.72}))
  ];
}
