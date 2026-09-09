import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone, Plane } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF, ROUTES, SITE_URL } from "../../site-data";
import MobileMenu from "../../mobile-menu";

export function generateStaticParams(){ return ROUTES.map(r=>({slug:r.slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const r=ROUTES.find(x=>x.slug===slug); if(!r)return{};
  return { title:{absolute:r.title}, description:`Private John Wayne Airport car service between SNA and ${r.city}. Reserved SUVs, limousines and group transportation.`, alternates:{canonical:`/routes/${slug}`} };
}

const ROUTE_DETAILS:Record<string,{heading:string;copy:string;returnCopy:string}> = {"anaheim":{"heading":"SNA to Anaheim hotels and the Resort District","copy":"For an Anaheim arrival, provide the hotel name and street address rather than only the theme park name. Your hotel entrance may be the best meeting point for a return trip. Convention schedules, luggage and the number of children traveling should be included in the reservation.","returnCopy":"For Anaheim to John Wayne Airport departures, provide your flight departure time and airline. Request a pickup recommendation that accounts for hotel loading, the drive and your airline’s check-in guidance. Confirm child-seat requests and vehicle availability before travel."},"irvine":{"heading":"John Wayne Airport transfers for Irvine business and family travel","copy":"For Irvine offices and corporate campuses, include the building name, suite or visitor entrance and the lead passenger’s mobile number. For UC Irvine or a hotel, supply the exact destination address. These details help distinguish nearby entrances and plan a direct pickup.","returnCopy":"For Irvine to SNA departures, share the flight time, passenger count and luggage details. If your itinerary includes a meeting before the airport, list it as an additional stop when requesting the quote. Confirm the pickup time against your airline’s check-in guidance."},"dana-point":{"heading":"SNA to Dana Point resorts, homes and the harbor","copy":"Dana Point trips can involve a resort entrance, a harbor meeting point or a private residence. Provide the full address and any guest or gate instructions. If a wedding party or family is arriving on separate flights, include each flight and decide whether you need separate transfers.","returnCopy":"For Dana Point to John Wayne Airport departures, allow for the drive north and your airline’s check-in guidance. Share your flight time when requesting a pickup recommendation. Include luggage, golf bags, child-seat requests and planned stops so the vehicle and quote fit the trip."}};

function Brand(){return <Link href="/" className="brand premiumBrand"><span className="jwMark">JW<Plane size={15}/></span><strong>JOHN WAYNE<small>AIRPORT LIMOUSINE</small></strong></Link>}

export default async function RoutePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const r=ROUTES.find(x=>x.slug===slug); if(!r)notFound();
  const detail=ROUTE_DETAILS[slug];
  const related=ROUTES.filter(x=>x.slug!==slug && x.county===r.county).slice(0,6);
  const schema={"@context":"https://schema.org","@type":"Service",name:r.title,url:`${SITE_URL}/routes/${slug}`,areaServed:[r.city,r.county],serviceType:"John Wayne Airport private car and limousine service",provider:{"@type":"LimousineService",name:"John Wayne Airport Limousine",telephone:"+1-949-680-5466"}};
  return <>
    <header className="topbar"><div className="shell nav"><Brand/><nav><Link href="/">Airport Service</Link><Link href="/fleet">Fleet</Link><Link href="/service-areas">All Cities</Link><Link href="/#why">Why Us</Link></nav><div className="headerActions"><MobileMenu/><a className="phone" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></header>
    <main>
      <section className="routeHero"><div className="shell"><Link className="back" href="/service-areas">← All service areas</Link><p className="kicker">SNA AIRPORT TRANSPORTATION · {r.county.toUpperCase()}</p><h1>{r.title}</h1><p className="lead">{r.copy}</p><div className="actions"><a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve this route <ArrowUpRight size={18}/></a><a className="btn dark" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></section>
      <section className="routeBody shell"><div><p className="eyebrow">Private airport transfer</p><h2>SNA to {r.city}, planned around your trip.</h2><p>Reserve direct transportation between John Wayne Airport and {r.city} with a professional chauffeur and a vehicle selected for your passengers and luggage. Arrival service can be coordinated using current flight information, while departing travelers can plan pickup around the time they want to reach the terminal.</p><p>For travelers in {r.county}, this service provides a private alternative to shared shuttles and on-demand rides, with one-way, round-trip and multi-stop reservations available.</p>{detail && <><h2>{detail.heading}</h2><p>{detail.copy}</p><h2>{r.city} to John Wayne Airport</h2><p>{detail.returnCopy}</p><p>Review the <Link href="/fleet">airport vehicle options</Link> and include all passengers, bags and requested stops when requesting a quote. Confirm the total, waiting terms and any special arrangements before booking.</p></>}<ul><li><CheckCircle2/>Private door-to-door transportation</li><li><CheckCircle2/>Terminal A, B and C service</li><li><CheckCircle2/>Sedan, SUV and Sprinter options</li><li><CheckCircle2/>Flight-aware arrival coordination</li></ul></div><aside><b>Need help planning?</b><p>Call for airport pickups, group transportation, meet-and-greet requests or multi-stop itineraries.</p><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></aside></section>
      <section className="related shell"><p className="eyebrow">More {r.county} routes</p><div className="routeGrid">{related.map(x=><Link href={`/routes/${x.slug}`} className="routeCard" key={x.slug}><span>SNA →</span><h3>{x.city}</h3><b>View route <ArrowRight size={15}/></b></Link>)}</div></section>
    </main>
    <footer><div className="shell credits">John Wayne Airport Limousine · Private SNA transportation to {r.city} · {PHONE_DISPLAY}</div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
