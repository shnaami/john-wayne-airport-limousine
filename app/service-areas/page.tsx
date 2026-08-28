import Link from "next/link";
import { ArrowRight, Phone, Plane } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, ROUTES } from "../site-data";

const orange = ROUTES.filter(r=>r.county==="Orange County");
const la = ROUTES.filter(r=>r.county==="Los Angeles County");

function Brand(){return <Link href="/" className="brand premiumBrand"><span className="jwMark">JW<Plane size={15}/></span><strong>JOHN WAYNE<small>AIRPORT LIMOUSINE</small></strong></Link>}

export default function ServiceAreas(){
  return <>
    <header className="topbar"><div className="shell nav"><Brand/><a className="phone" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></header>
    <main>
      <section className="routeHero"><div className="shell"><p className="kicker">SNA SERVICE AREA DIRECTORY</p><h1>John Wayne Airport limousine service areas</h1><p className="lead">The original John Wayne Airport Limousine site covered cities throughout Orange County and Los Angeles County. We have preserved that useful city coverage in a cleaner, modern structure built around direct SNA airport transportation.</p></div></section>
      <section className="directory shell">
        <div className="directoryGroup"><p className="eyebrow">Orange County</p><h2>Cities we serve in Orange County</h2><div className="cityGrid">{orange.map(r=><Link key={r.slug} href={`/routes/${r.slug}`}>{r.city}<ArrowRight size={14}/></Link>)}</div></div>
        <div className="directoryGroup"><p className="eyebrow">Los Angeles County</p><h2>Cities we serve in Los Angeles County</h2><div className="cityGrid">{la.map(r=><Link key={r.slug} href={`/routes/${r.slug}`}>{r.city}<ArrowRight size={14}/></Link>)}</div></div>
      </section>
    </main>
    <footer><div className="shell credits">John Wayne Airport Limousine · SNA private airport transportation · {PHONE_DISPLAY}</div></footer>
  </>;
}
