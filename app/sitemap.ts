import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "./site-data";
export default function sitemap():MetadataRoute.Sitemap{
  const d=new Date();
  return [
    {url:SITE_URL,lastModified:d,changeFrequency:"weekly",priority:1},
    ...ROUTES.map(r=>({url:`${SITE_URL}/routes/${r.slug}`,lastModified:d,changeFrequency:"monthly" as const,priority:.85}))
  ]
}
