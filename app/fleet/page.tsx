import Link from "next/link";
import { ArrowUpRight, Phone, Plane, Users } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "../site-data";

export const metadata = {
  title: "Luxury Fleet | John Wayne Airport Limousine SNA",
  description: "Explore the John Wayne Airport Limousine fleet: Lincoln Aviator, Cadillac Escalade, Mercedes-Benz Sprinter Limousine and 20-passenger limousine bus for SNA and Orange County.",
  alternates: { canonical: "https://johnwayneairportlimousine.com/fleet" }
};

function Brand(){return <Link href="/" className="brand premiumBrand"><span className="jwMark">JW<Plane size={15}/></span><strong>JOHN WAYNE<small>AIRPORT LIMOUSINE</small></strong></Link>}

const vehicles = [
  {name:"Lincoln Aviator",type:"Luxury SUV",capacity:"Up to 3 passengers",copy:"A refined private SUV for John Wayne Airport transfers, executive travel, couples and small parties who value a quiet, comfortable ride.",exterior:"/fleet/john-wayne-airport-lincoln-aviator-luxury-suv-exterior.webp",interior:"/fleet/john-wayne-airport-lincoln-aviator-luxury-interior.webp"},
  {name:"Cadillac Escalade",type:"Premium Luxury SUV",capacity:"Up to 5 passengers",copy:"Spacious, polished and luggage-friendly. The Escalade is an excellent choice for families, executives and small groups traveling through SNA.",exterior:"/fleet/john-wayne-airport-cadillac-escalade-luxury-suv-exterior.webp",interior:"/fleet/john-wayne-airport-cadillac-escalade-luxury-interior.webp"},
  {name:"Mercedes-Benz Sprinter Limousine",type:"Executive Group Limousine",capacity:"8–10 passengers",copy:"Premium group transportation with limousine-style wraparound seating and ambient lighting for airport groups, events and private occasions.",exterior:"/fleet/john-wayne-airport-mercedes-sprinter-limousine-exterior.webp",interior:"/fleet/john-wayne-airport-mercedes-sprinter-limousine-interior.webp"},
  {name:"20-Passenger Limousine Bus",type:"Luxury Group Transportation",capacity:"Up to 20 passengers",copy:"A spacious limousine bus for larger groups, celebrations and coordinated transportation. Passenger capacity may vary when substantial airport luggage is required.",exterior:"/fleet/john-wayne-airport-20-passenger-limousine-bus-exterior.webp",interior:"/fleet/john-wayne-airport-20-passenger-limousine-bus-interior.webp"}
];

export default function Fleet(){return <>
<header className="topbar"><div className="shell nav"><Brand/><nav><Link href="/">Airport Service</Link><Link href="/fleet">Fleet</Link><Link href="/service-areas">All Cities</Link><Link href="/#why">Why Us</Link></nav><a className="phone" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></header>
<main>
<section className="fleetHero"><div className="shell"><p className="eyebrow light">John Wayne Airport luxury transportation</p><h1>Luxury Limousine Fleet for John Wayne Airport (SNA)</h1><p>Choose from private luxury SUVs, a Mercedes-Benz Sprinter Limousine and a 20-passenger limousine bus for airport transfers and private transportation throughout Orange County.</p><div className="actions"><a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve your vehicle <ArrowUpRight size={18}/></a><a className="btn glass" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></section>
<section className="fleetSection shell"><div className="fleetIntro"><p className="eyebrow">Luxury vehicles for SNA & Orange County</p><h2>Exterior and interior views of our fleet.</h2><p>Each vehicle is shown with its matching exterior and interior. Vehicle availability varies by date; we’ll help match your passenger count, luggage and service requirements.</p></div><div className="fleetList">{vehicles.map((v,i)=><article className="fleetVehicle" key={v.name}><div className="fleetPhotos"><div className={`fleetPhoto ${v.name === "Cadillac Escalade" ? "escaladeExterior" : ""}`}><img src={v.exterior} alt={`${v.name} exterior for John Wayne Airport limousine service`}/></div><div className={`fleetPhoto ${v.name === "Cadillac Escalade" ? "escaladeInterior" : ""}`}><img src={v.interior} alt={`${v.name} interior for John Wayne Airport private transportation`}/></div></div><div className="fleetInfo"><span className="fleetNumber">0{i+1}</span><p className="eyebrow">{v.type}</p><h2>{v.name}</h2><div className="capacity"><Users size={19}/><strong>{v.capacity}</strong></div><p>{v.copy}</p><a className="btn dark" href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve this vehicle <ArrowUpRight size={17}/></a></div></article>)}</div></section>
<section className="fleetCta"><div className="shell"><p className="eyebrow light">Not sure which vehicle?</p><h2>Tell us your passenger count and luggage. We’ll help with the rest.</h2><div className="actions"><a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Get a quote <ArrowUpRight size={18}/></a><a className="btn glass" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></section>
</main>
<footer><div className="shell footerGrid"><div><Brand/><p>Private airport car and limousine service serving John Wayne Airport and Southern California.</p></div><div><b>Reservations</b><a href={PHONE_HREF}>{PHONE_DISPLAY}</a><a href={BOOKING_URL} target="_blank" rel="noreferrer">Book online</a></div><div><b>Explore</b><Link href="/fleet">Luxury Fleet</Link><Link href="/service-areas">Service Areas</Link></div></div></footer>
</>}
