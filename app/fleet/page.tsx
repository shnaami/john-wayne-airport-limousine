import Link from "next/link";
import { ArrowUpRight, Car, Phone, Plane, Users } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "../site-data";

export const metadata = {
  title: "Luxury Fleet | John Wayne Airport Limousine SNA",
  description: "Explore our John Wayne Airport limousine fleet including Lincoln Aviator, Cadillac Escalade, Lincoln stretch limousine and Mercedes-Benz Sprinter limousine service for SNA and Orange County."
};

function Brand(){return <Link href="/" className="brand premiumBrand"><span className="jwMark">JW<Plane size={15}/></span><strong>JOHN WAYNE<small>AIRPORT LIMOUSINE</small></strong></Link>}

const vehicles = [
  {name:"Lincoln Aviator",type:"Luxury SUV",capacity:"Up to 3 passengers",copy:"A refined private SUV for airport transfers, executive travel and couples who want a quiet, comfortable ride to or from John Wayne Airport.",exterior:"/fleet/john-wayne-airport-lincoln-aviator-luxury-suv-exterior.webp",interior:"/fleet/john-wayne-airport-lincoln-aviator-luxury-interior.jpg"},
  {name:"Cadillac Escalade",type:"Premium Luxury SUV",capacity:"Up to 5 passengers",copy:"Spacious, polished and luggage-ready. The Escalade is an excellent choice for families, executives and small groups traveling through SNA.",exterior:"/fleet/john-wayne-airport-cadillac-escalade-limousine-exterior.jpg",interior:"/fleet/john-wayne-airport-cadillac-escalade-luxury-interior.webp"},
  {name:"Lincoln Stretch Limousine",type:"Classic Stretch Limousine",capacity:"Up to 8 passengers",copy:"Traditional limousine style for celebrations, weddings, special occasions and private group transportation throughout Orange County.",exterior:null,interior:null},
  {name:"Mercedes-Benz Sprinter Limousine",type:"Executive Group Limousine",capacity:"8–10 passengers",copy:"A premium group option with limousine-style seating and an upscale cabin, ideal for airport groups, events and nights out.",exterior:null,interior:"/fleet/john-wayne-airport-mercedes-sprinter-limousine-interior-8-10-passengers.jpg"}
];

export default function Fleet(){return <>
<header className="topbar"><div className="shell nav"><Brand/><nav><Link href="/">Airport Service</Link><Link href="/fleet">Fleet</Link><Link href="/service-areas">All Cities</Link><Link href="/#why">Why Us</Link></nav><a className="phone" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></header>
<main>
<section className="fleetHero"><div className="shell"><p className="eyebrow light">John Wayne Airport luxury transportation</p><h1>Our Luxury Fleet</h1><p>From private luxury SUVs to stretch limousines and group-ready Sprinters, choose the vehicle that fits your passengers, luggage and occasion.</p><div className="actions"><a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve your vehicle <ArrowUpRight size={18}/></a><a className="btn glass" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></section>
<section className="fleetSection shell"><div className="fleetIntro"><p className="eyebrow">Luxury vehicles for SNA & Orange County</p><h2>Comfort for every kind of trip.</h2><p>Vehicle availability can vary by date and reservation. Our team will help match your party with the appropriate vehicle for passenger count, luggage and service requirements.</p></div><div className="fleetList">{vehicles.map((v,i)=><article className="fleetVehicle" key={v.name}><div className="fleetPhotos"><div className="fleetPhoto">{v.exterior?<img src={v.exterior} alt={`${v.name} exterior for John Wayne Airport limousine service`}/>:<div className="fleetPlaceholder"><Car/><span>Exterior photo coming next</span></div>}</div><div className="fleetPhoto">{v.interior?<img src={v.interior} alt={`${v.name} luxury interior for John Wayne Airport transportation`}/>:<div className="fleetPlaceholder"><Car/><span>Interior photo coming next</span></div>}</div></div><div className="fleetInfo"><span className="fleetNumber">0{i+1}</span><p className="eyebrow">{v.type}</p><h2>{v.name}</h2><div className="capacity"><Users size={19}/><strong>{v.capacity}</strong></div><p>{v.copy}</p><a className="btn dark" href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve this vehicle <ArrowUpRight size={17}/></a></div></article>)}</div></section>
<section className="fleetCta"><div className="shell"><p className="eyebrow light">Not sure which vehicle?</p><h2>Tell us your passenger count and luggage. We’ll help with the rest.</h2><div className="actions"><a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Get a quote <ArrowUpRight size={18}/></a><a className="btn glass" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></section>
</main>
<footer><div className="shell footerGrid"><div><Brand/><p>Private airport car and limousine service serving John Wayne Airport and Southern California.</p></div><div><b>Reservations</b><a href={PHONE_HREF}>{PHONE_DISPLAY}</a><a href={BOOKING_URL} target="_blank" rel="noreferrer">Book online</a></div><div><b>Explore</b><Link href="/fleet">Luxury Fleet</Link><Link href="/service-areas">Service Areas</Link></div></div></footer>
</>}
