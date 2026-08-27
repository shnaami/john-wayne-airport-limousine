import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock3, Luggage, MapPin, Phone, Plane, ShieldCheck, Sparkles } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF, ROUTES } from "./site-data";

const interior = "https://commons.wikimedia.org/wiki/Special:Redirect/file/2025-08-08_23_55_07_UTC_The_interior_of_the_terminal_at_John_Wayne_Airport_in_Orange_County%2C_California.jpg";
const terminal = "https://commons.wikimedia.org/wiki/Special:Redirect/file/2025-08-09_01_18_27_UTC_View_of_the_terminal_from_a_taxiing_aircraft_at_John_Wayne_Airport_in_Orange_County%2C_California.jpg";
const aircraft = "https://commons.wikimedia.org/wiki/Special:Redirect/file/2025-08-08_23_56_23_UTC_A_United_Airlines_Boeing_737_at_John_Wayne_Orange_County_Airport_in_Orange_County%2C_California.jpg";

export default function Home() {
  return <>
    <header className="topbar">
      <div className="shell nav">
        <Link href="/" className="brand"><span>SNA</span><strong>John Wayne Airport<br/>Limousine</strong></Link>
        <nav><a href="#service">Airport Service</a><a href="#routes">Popular Routes</a><a href="#why">Why Us</a></nav>
        <a className="phone" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a>
      </div>
    </header>

    <main>
      <section className="hero" style={{backgroundImage:`linear-gradient(90deg,rgba(4,9,20,.92),rgba(4,9,20,.62),rgba(4,9,20,.12)),url("${terminal}")`}}>
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="kicker"><Sparkles size={15}/> Orange County's private SNA transportation specialist</p>
            <h1>John Wayne Airport<br/><em>limousine & car service</em></h1>
            <p className="lead">Private, prearranged transportation to and from SNA with professional chauffeurs, luxury sedans, SUVs and Sprinters serving Orange County and Southern California.</p>
            <div className="actions">
              <a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve your ride <ArrowUpRight size={18}/></a>
              <a className="btn glass" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a>
            </div>
            <div className="trustRow"><span><CheckCircle2/>Flight-aware pickup</span><span><CheckCircle2/>Door-to-terminal</span><span><CheckCircle2/>24/7 reservations</span></div>
          </div>
          <div className="flightCard">
            <p>JOHN WAYNE AIRPORT</p><div className="iata">SNA</div><h3>Arrive relaxed.<br/>Leave on schedule.</h3>
            <div className="mini"><Plane/><span>Terminals A · B · C</span></div>
            <div className="mini"><MapPin/><span>18601 Airport Way, Santa Ana</span></div>
          </div>
        </div>
      </section>

      <section className="intro shell" id="service">
        <div><p className="eyebrow">Built around SNA</p><h2>The airport ride should be the easiest part of your trip.</h2></div>
        <p>John Wayne Airport is compact, convenient and central to Orange County. Our service is designed around that advantage: precise pickup timing, direct terminal service, luggage-ready vehicles and a reservation team that understands local traffic patterns, airport access and the destinations travelers use most.</p>
      </section>

      <section className="featureBand">
        <div className="shell featureGrid">
          <article><Clock3/><h3>Flight-aware timing</h3><p>Pickup planning based on your flight, terminal and desired arrival window.</p></article>
          <article><Luggage/><h3>Space for your trip</h3><p>Sedans, SUVs and Sprinters matched to passengers, luggage and equipment.</p></article>
          <article><ShieldCheck/><h3>Professional chauffeurs</h3><p>Private, reserved transportation instead of waiting for an on-demand ride.</p></article>
        </div>
      </section>

      <section className="photoSplit shell">
        <div className="photo" style={{backgroundImage:`url("${interior}")`}}></div>
        <div className="photoCopy"><p className="eyebrow">Inside John Wayne Airport</p><h2>A premium airport deserves a premium ground experience.</h2><p>John Wayne Airport continues to modernize its terminal experience while maintaining the compact layout Orange County travelers value. Our goal is to extend that smooth experience from the terminal curb to your final destination.</p><a href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve airport transportation <ArrowRight size={16}/></a></div>
      </section>

      <section className="routes" id="routes">
        <div className="shell"><p className="eyebrow">High-demand SNA routes</p><h2>John Wayne Airport transportation across Orange County</h2>
          <div className="routeGrid">{ROUTES.map(r=><Link href={`/routes/${r.slug}`} className="routeCard" key={r.slug}><span>SNA →</span><h3>{r.city}</h3><p>{r.copy}</p><b>View route <ArrowRight size={15}/></b></Link>)}</div>
        </div>
      </section>

      <section className="visualCta" style={{backgroundImage:`linear-gradient(90deg,rgba(6,11,23,.94),rgba(6,11,23,.55)),url("${aircraft}")`}}>
        <div className="shell"><p className="eyebrow light">Private airport transportation</p><h2>Landing at SNA?<br/>Your chauffeur can be ready.</h2><p>Reserve your airport transfer in advance for a calmer arrival and a direct ride to your Orange County destination.</p><a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Get a quote <ArrowUpRight size={18}/></a></div>
      </section>

      <section className="why shell" id="why">
        <p className="eyebrow">Why travelers choose reserved service</p><h2>Professional airport transportation without the uncertainty.</h2>
        <div className="whyGrid"><div><strong>01</strong><h3>Private pickup</h3><p>Your reservation is planned for your party—not shared with strangers.</p></div><div><strong>02</strong><h3>Local expertise</h3><p>Orange County routes, airport access and timing are part of the plan.</p></div><div><strong>03</strong><h3>Direct service</h3><p>From the airport to hotels, homes, meetings, resorts and events.</p></div><div><strong>04</strong><h3>Professional support</h3><p>Real reservation assistance for changes, groups and special requests.</p></div></div>
      </section>
    </main>

    <footer><div className="shell footerGrid"><div><div className="brand footerBrand"><span>SNA</span><strong>John Wayne Airport<br/>Limousine</strong></div><p>Private airport car service serving John Wayne Airport and Orange County.</p></div><div><b>Reservations</b><a href={PHONE_HREF}>{PHONE_DISPLAY}</a><a href={BOOKING_URL} target="_blank" rel="noreferrer">Book online</a></div><div><b>Popular routes</b><Link href="/routes/newport-beach">Newport Beach</Link><Link href="/routes/irvine">Irvine</Link><Link href="/routes/laguna-beach">Laguna Beach</Link></div></div>
      <div className="shell credits">Recent John Wayne Airport photography: Famartin, Wikimedia Commons, CC BY-SA 4.0. Site operates as a South Coast Limousines & Transportations, Inc. service.</div>
    </footer>
  </>;
}
