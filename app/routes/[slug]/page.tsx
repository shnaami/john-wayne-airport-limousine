import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF, ROUTES, SITE_URL } from "../../site-data";

export function generateStaticParams(){ return ROUTES.map(r=>({slug:r.slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const r=ROUTES.find(x=>x.slug===slug); if(!r)return{};
  return {
    title: r.title,
    description: `${r.copy} Reserve private John Wayne Airport (SNA) limousine, SUV and black car service.`,
    alternates:{canonical:`/routes/${slug}`}
  }
}

export default async function RoutePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const r=ROUTES.find(x=>x.slug===slug); if(!r)notFound();
  const schema={"@context":"https://schema.org","@type":"Service",name:r.title,url:`${SITE_URL}/routes/${slug}`,areaServed:r.city,serviceType:"John Wayne Airport private car and limousine service",provider:{"@type":"LimousineService",name:"John Wayne Airport Limousine",telephone:"+1-949-680-5466"}};
  return <>
    <header className="topbar"><div className="shell nav"><Link href="/" className="brand"><span>SNA</span><strong>John Wayne Airport<br/>Limousine</strong></Link><a className="phone" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></header>
    <main>
      <section className="routeHero"><div className="shell"><Link className="back" href="/">← John Wayne Airport Limousine</Link><p className="kicker">SNA AIRPORT TRANSPORTATION</p><h1>{r.title}</h1><p className="lead">{r.copy}</p><div className="actions"><a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve this route <ArrowUpRight size={18}/></a><a className="btn dark" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></section>
      <section className="routeBody shell"><div><p className="eyebrow">Private airport transfer</p><h2>SNA to {r.city}, planned around your trip.</h2><p>Reserve direct transportation from John Wayne Airport to {r.city} with a professional chauffeur and a vehicle selected for your passengers and luggage. Arrival service can be coordinated using current flight information, while departing travelers can plan pickup around the time they want to reach the terminal.</p><ul><li><CheckCircle2/>Private door-to-door transportation</li><li><CheckCircle2/>Terminal A, B and C service</li><li><CheckCircle2/>Sedan, SUV and Sprinter options</li><li><CheckCircle2/>One-way and round-trip reservations</li></ul></div><aside><b>Need help planning?</b><p>Call for airport pickups, group transportation, meet-and-greet requests or multi-stop itineraries.</p><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></aside></section>
      <section className="related shell"><p className="eyebrow">More SNA routes</p><div className="routeGrid">{ROUTES.filter(x=>x.slug!==slug).slice(0,6).map(x=><Link href={`/routes/${x.slug}`} className="routeCard" key={x.slug}><span>SNA →</span><h3>{x.city}</h3><b>View route <ArrowRight size={15}/></b></Link>)}</div></section>
    </main>
    <footer><div className="shell credits">John Wayne Airport Limousine · Private Orange County airport transportation · {PHONE_DISPLAY}</div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
