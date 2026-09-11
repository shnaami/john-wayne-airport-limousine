import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "./site-data";
export default function sitemap():MetadataRoute.Sitemap{
  return [
    {url:SITE_URL,changeFrequency:"weekly",priority:1},
    {url:`${SITE_URL}/service-areas`,changeFrequency:"monthly",priority:.9},
    {url:`${SITE_URL}/fleet`,changeFrequency:"monthly",priority:.9},
    ...ROUTES.map(r=>({url:`${SITE_URL}/routes/${r.slug}`,changeFrequency:"monthly" as const,priority:r.county==="Orange County"?.86:.72}))
  ];
}
