import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone, Plane } from "lucide-react";
import { BOOKING_URL, BUSINESS_ID, PHONE_DISPLAY, PHONE_HREF, ROUTES, SITE_URL } from "../../site-data";
import MobileMenu from "../../mobile-menu";

export function generateStaticParams(){ return ROUTES.map(r=>({slug:r.slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const r=ROUTES.find(x=>x.slug===slug); if(!r)return{};
  return { title:{absolute:r.title}, description:r.copy, alternates:{canonical:`/routes/${slug}`}, openGraph:{title:r.title,description:r.copy,url:`${SITE_URL}/routes/${slug}`,images:[{url:"/john-wayne-airport-master.jpg",alt:"John Wayne Airport"}]},twitter:{card:"summary_large_image",title:r.title,description:r.copy,images:["/john-wayne-airport-master.jpg"]} };
}

const ROUTE_DETAILS:Record<string,{heading:string;copy:string;returnCopy:string}> = {
  "anaheim": {
    "heading": "SNA to Disneyland-area hotels and Anaheim conventions",
    "copy": "For a Disneyland trip, reserve your SNA airport transfer to the exact Anaheim hotel or drop-off address. Include the hotel name and street address rather than only the theme park name. Your hotel entrance may be the best meeting point for a return trip. Convention schedules, luggage and the number of children traveling should be included in the reservation.",
    "returnCopy": "For Anaheim to John Wayne Airport departures, provide your flight departure time and airline. Request a pickup recommendation that accounts for hotel loading, the drive and your airline’s check-in guidance. Confirm child-seat requests and vehicle availability before travel."
  },
  "irvine": {
    "heading": "John Wayne Airport transfers for Irvine business and family travel",
    "copy": "For Irvine offices and corporate campuses, include the building name, suite or visitor entrance and the lead passenger’s mobile number. For UC Irvine or a hotel, supply the exact destination address. These details help distinguish nearby entrances and plan a direct pickup.",
    "returnCopy": "For Irvine to SNA departures, share the flight time, passenger count and luggage details. If your itinerary includes a meeting before the airport, list it as an additional stop when requesting the quote. Confirm the pickup time against your airline’s check-in guidance."
  },
  "dana-point": {
    "heading": "SNA to Dana Point resorts, homes and the harbor",
    "copy": "Dana Point trips can involve a resort entrance, a harbor meeting point or a private residence. Provide the full address and any guest or gate instructions. If a wedding party or family is arriving on separate flights, include each flight and decide whether you need separate transfers.",
    "returnCopy": "For Dana Point to John Wayne Airport departures, allow for the drive north and your airline’s check-in guidance. Share your flight time when requesting a pickup recommendation. Include luggage, golf bags, child-seat requests and planned stops so the vehicle and quote fit the trip."
  },
  "newport-beach": {
    "heading": "SNA transfers to Newport Beach, Newport Coast and Balboa",
    "copy": "Newport Beach airport trips can end at a coastal resort, a Balboa Peninsula rental, a Newport Coast residence or an office near Fashion Island. Give the full street address and the correct guest entrance when booking. A hotel name alone may not identify the driveway where your party should meet the chauffeur. For a vacation rental, include access instructions and a passenger mobile number that will work after landing.",
    "returnCopy": "For Newport Beach to SNA departures, arrange pickup from your actual hotel or residence rather than using a general city meeting point. Tell us about beach equipment, golf bags and large suitcases before selecting the vehicle. If your day includes a stop at an office or another hotel, add that stop to the quote request so the pickup plan accounts for it."
  },
  "laguna-beach": {
    "heading": "Airport transportation for Laguna Beach coastal stays",
    "copy": "A Laguna Beach arrival may involve a downtown hotel, a coastal resort or a hillside vacation home. Include the entrance address and any access restrictions when reserving. For a wedding, separate your airport transfer from the event shuttle schedule: guests arriving on different flights may need different pickup times. Share the number of passengers and bags for each arrival.",
    "returnCopy": "For Laguna Beach to John Wayne Airport departures, provide your airline, flight time and exact pickup address. Coastal traffic and loading at a hotel or hillside residence can affect the schedule. Request a pickup recommendation for your itinerary and confirm it against the airline’s check-in requirements. Any intermediate stop should be arranged before the trip."
  },
  "san-clemente": {
    "heading": "SNA transfers for San Clemente homes and coastal visits",
    "copy": "San Clemente travelers should identify the exact pickup or destination address, whether near the pier, downtown, Talega or another residential neighborhood. For beach trips, list surfboards and other oversized items before choosing a vehicle; passenger capacity alone does not establish luggage capacity. A group arriving on separate flights should provide each flight number and decide whether to travel together or reserve separate transfers.",
    "returnCopy": "For San Clemente to SNA departures, reserve around the flight’s departure time rather than choosing a pickup time based only on the drive. Your schedule also needs room for loading, traffic and airline check-in. Include gate instructions for residential pickups and request any additional stop in advance. Confirm the total quote and waiting terms before booking."
  },
  "orange": {
    "heading": "John Wayne Airport transfers to the City of Orange",
    "copy": "When booking transportation to Orange, provide a full street address so your reservation identifies the City of Orange rather than the wider Orange County area. Trips to Old Towne, Chapman University, a hotel or a medical appointment can require different drop-off entrances. For campus visits, include the building or visitor meeting point and a contact number. Tell us if an appointment requires a specific arrival time.",
    "returnCopy": "For Orange to John Wayne Airport departures, provide the flight number, departure time and pickup entrance. If several passengers are meeting at different addresses, request a multi-stop itinerary when booking. For a medical appointment, discuss any mobility or vehicle requirements with reservations before confirming; a standard airport transfer should not be assumed to include medical transport assistance."
  },
  "mission-viejo": {
    "heading": "SNA transfers for Mission Viejo homes, hotels and business travel",
    "copy": "For Mission Viejo arrivals, provide the exact residential, hotel or business address and any gate or visitor-entry instructions. If the trip includes a medical office, meeting or second pickup, identify the correct entrance and requested arrival time. Families should list strollers, child-seat requests and luggage before the vehicle is confirmed.",
    "returnCopy": "For Mission Viejo to John Wayne Airport departures, share the airline, flight time and pickup address when requesting a recommended schedule. Add time for loading and any gated-community access, and arrange intermediate stops before the reservation is confirmed."
  },
  "laguna-niguel": {
    "heading": "John Wayne Airport transfers for Laguna Niguel residences and coastal stays",
    "copy": "Laguna Niguel trips often involve gated residences, hillside neighborhoods or hotels near the coast. Give the complete address, gate instructions and a working passenger mobile number. If your party is continuing to a Dana Point or Laguna Beach event, include that stop in the itinerary rather than treating it as part of the original destination.",
    "returnCopy": "For Laguna Niguel to SNA, provide your departure flight and exact pickup location. Tell reservations about golf bags, oversized luggage or multiple household pickups so the vehicle and schedule can be planned before travel."
  },
  "costa-mesa": {
    "heading": "SNA car service for Costa Mesa hotels, offices and South Coast Metro",
    "copy": "Costa Mesa is immediately adjacent to John Wayne Airport, but the correct destination still matters. Provide the hotel, office, South Coast Plaza-area address or event entrance instead of only the city name. For meetings near South Coast Metro, include the building and appointment time so the reservation reflects the actual stop.",
    "returnCopy": "For Costa Mesa to SNA departures, share the airline and flight time along with the pickup entrance. A short drive does not remove the need to plan for loading, terminal access and airline check-in guidance. Add any office or hotel stop to the quote in advance."
  },
  "tustin": {
    "heading": "Private SNA transportation for Tustin and Tustin Legacy",
    "copy": "For Tustin airport transfers, identify the exact home, hotel, office or Tustin Legacy destination. Business parks and residential communities can have multiple entrances, so include a building name, suite, gate instruction or passenger contact when useful. List all luggage and requested stops before confirming the vehicle.",
    "returnCopy": "For Tustin to John Wayne Airport, provide the departure flight and the address where the chauffeur should meet your party. If passengers are being collected at more than one Tustin address, request a multi-stop itinerary so the schedule and quote account for each pickup."
  },
  "laguna-hills": {
    "heading": "SNA transfers for Laguna Hills homes, hotels and appointments",
    "copy": "Laguna Hills travelers should provide the complete destination and the correct passenger entrance, especially for hotels, office complexes and medical campuses. If a traveler has mobility-related needs, discuss the specific vehicle and assistance requirements with reservations before booking; standard airport transportation should not be assumed to provide medical transport.",
    "returnCopy": "For Laguna Hills to SNA departures, share the flight information, pickup entrance, passenger count and luggage. Ask for a pickup recommendation that accounts for loading and airline check-in guidance, and arrange any additional stop before the trip."
  },
  "san-juan-capistrano": {
    "heading": "John Wayne Airport car service for San Juan Capistrano",
    "copy": "For San Juan Capistrano arrivals, provide the full address for the residence, hotel, wedding venue or historic-district destination. Event locations and private properties may use a specific guest entrance, so include those instructions with the reservation. Groups arriving on separate flights should identify each flight and whether they plan to travel together.",
    "returnCopy": "For San Juan Capistrano to SNA, give the departure flight, exact pickup address and any gate or venue instructions. Tell reservations about luggage, golf equipment, child-seat requests and planned stops so the return vehicle and schedule match the trip."
  },
  "long-beach": {
    "heading": "SNA transfers to Long Beach hotels, waterfront and cruise travel",
    "copy": "For a Long Beach city transfer, provide the exact hotel, residence, cruise-terminal or waterfront address. Long Beach Airport is a separate destination; if you are connecting to LGB, use the dedicated SNA-to-LGB airport transfer service and provide both flight itineraries. Cruise passengers should include their sailing information and terminal instructions.",
    "returnCopy": "For Long Beach to John Wayne Airport, provide the departure flight and the precise pickup location. If your trip begins at a cruise terminal, allow for disembarkation and baggage collection before the reserved pickup window, and confirm how waiting is handled."
  },
  "los-angeles": {
    "heading": "John Wayne Airport car service to Los Angeles",
    "copy": "Los Angeles trips should be booked to a complete street address, hotel, studio, office or event entrance rather than only the city name. Travel conditions can vary significantly by neighborhood and time of day, so include appointment times and requested stops when asking for a quote. If the destination is LAX, use the dedicated SNA-to-LAX airport transfer itinerary instead.",
    "returnCopy": "For Los Angeles to SNA departures, share the airline, flight time, pickup address and any scheduled stop. Ask for a pickup recommendation based on the actual itinerary and allow for loading, traffic and the airline’s check-in guidance."
  },
  "beverly-hills": {
    "heading": "Private SNA transportation for Beverly Hills hotels and residences",
    "copy": "For Beverly Hills arrivals, identify the hotel, residence, office or appointment entrance and provide any valet or gated-access instructions. If the day includes shopping, dining or business stops before the final destination, list them when requesting the quote so the reservation reflects the complete itinerary.",
    "returnCopy": "For Beverly Hills to John Wayne Airport, provide your departure flight and exact pickup entrance. Multiple hotel or residential pickups should be arranged as a multi-stop reservation, with passenger and luggage counts confirmed before the vehicle is assigned."
  },
  "santa-monica": {
    "heading": "SNA car service to Santa Monica hotels, offices and coastal destinations",
    "copy": "Santa Monica transfers may end at a beachfront hotel, residence, office or meeting near downtown. Give the full street address and correct passenger entrance, and include oversized luggage or equipment in the reservation. If your itinerary continues elsewhere in Los Angeles, request the additional stop rather than relying on a general city destination.",
    "returnCopy": "For Santa Monica to SNA, provide the flight time, airline and pickup address. The reservation should allow for loading, variable road conditions and airline check-in guidance. Confirm waiting and additional-stop terms before travel."
  },
  "pasadena": {
    "heading": "John Wayne Airport transportation for Pasadena business and event travel",
    "copy": "For Pasadena arrivals, provide the exact hotel, residence, office, campus or event entrance. Large venues and institutional properties can have multiple access points, so include the building or meeting location when known. For a timed event or appointment, tell reservations the required arrival time.",
    "returnCopy": "For Pasadena to SNA departures, share the airline, flight time, pickup entrance, passenger count and luggage. If several travelers are collected at different addresses, request a multi-stop itinerary so the pickup recommendation and quote include each stop."
  },
  "burbank": {
    "heading": "SNA car service to Burbank studios, hotels and airport-area destinations",
    "copy": "For Burbank city travel, identify the studio, hotel, residence or business address and any security or visitor-entry instructions. Hollywood Burbank Airport is a distinct destination; if the trip is an airport-to-airport connection, provide both flight itineraries and make clear that BUR is the destination.",
    "returnCopy": "For Burbank to John Wayne Airport, provide the SNA departure flight and exact pickup address. Studio access, scheduled meetings and additional stops should be included when requesting the quote so the reservation reflects the full itinerary."
  },
  "huntington-beach": {
    "heading": "SNA transfers to Huntington Beach hotels, homes and the coast",
    "copy": "For Huntington Beach arrivals, provide the exact hotel, residence or event address, especially for destinations near Pacific Coast Highway or the waterfront. Tell reservations about surfboards, golf bags and other oversized items before the vehicle is confirmed. For a wedding or group arrival, list each flight if passengers are not landing together.",
    "returnCopy": "For Huntington Beach to SNA, share the airline, departure time and exact pickup entrance. Include any hotel, office or residential stop in advance so the quote and pickup plan reflect the complete trip."
  },
  "santa-ana": {
    "heading": "John Wayne Airport transportation for Santa Ana",
    "copy": "Santa Ana destinations can include downtown offices, hotels, residences, courthouses and event venues. Provide the full street address and correct entrance rather than relying on the city name. If the trip includes a scheduled appointment, include the required arrival time when requesting the reservation.",
    "returnCopy": "For Santa Ana to SNA departures, provide the flight details, pickup entrance, passenger count and luggage. Arrange multiple pickups as a multi-stop itinerary and confirm the total quote before travel."
  },
  "garden-grove": {
    "heading": "SNA car service to Garden Grove hotels and Anaheim Resort-area stays",
    "copy": "Garden Grove airport trips frequently involve hotels along Harbor Boulevard and nearby convention or theme-park travel. Give the exact hotel and passenger entrance when booking. Families should list strollers, child-seat requests and luggage, while convention travelers should identify any meeting or event stop separately.",
    "returnCopy": "For Garden Grove to John Wayne Airport, share the departure flight and hotel or residential pickup address. If the day includes an Anaheim stop before SNA, add it to the itinerary so the schedule and quote include that leg."
  },
  "lake-forest": {
    "heading": "Private SNA transportation for Lake Forest",
    "copy": "For Lake Forest arrivals, provide the complete home, hotel, office or business-park address and any gated-community instructions. If passengers are arriving on separate flights, identify each flight and whether the party will wait to travel together or use separate vehicles.",
    "returnCopy": "For Lake Forest to SNA, provide the airline, departure time and pickup address. List luggage, child-seat requests and additional stops before confirming the vehicle and pickup recommendation."
  },
  "aliso-viejo": {
    "heading": "John Wayne Airport car service for Aliso Viejo",
    "copy": "Aliso Viejo transfers should include the exact residence, hotel, office or meeting address and any gate or visitor-entry instructions. For business travel, identify the building and appointment time; for families, include passenger and luggage details before the vehicle is assigned.",
    "returnCopy": "For Aliso Viejo to SNA departures, share the flight information and exact pickup location. If another passenger is being collected in Laguna Niguel, Laguna Hills or another city, request that stop in advance."
  },
  "rancho-santa-margarita": {
    "heading": "SNA transfers for Rancho Santa Margarita homes and business travel",
    "copy": "For Rancho Santa Margarita arrivals, provide the full residential or business address and any gated-community access instructions. Tell reservations about large luggage, golf equipment or child-seat requests before choosing the vehicle. Multi-household pickups should be listed as separate stops.",
    "returnCopy": "For Rancho Santa Margarita to John Wayne Airport, share the airline, flight time and pickup address when requesting a schedule. Allow for loading and community access, and confirm any intermediate stop before the reservation is finalized."
  },
  "fullerton": {
    "heading": "John Wayne Airport transportation to Fullerton",
    "copy": "Fullerton trips may involve hotels, residences, Cal State Fullerton-area destinations, downtown or business appointments. Provide the complete address and building or passenger entrance when known. For campus or event travel, include the requested arrival time and meeting location.",
    "returnCopy": "For Fullerton to SNA, provide the departure flight, pickup address, passenger count and luggage. If several travelers are meeting at different addresses, request a multi-stop itinerary rather than assuming additional pickups are included."
  },
  "buena-park": {
    "heading": "SNA car service to Buena Park hotels and attractions",
    "copy": "For Buena Park arrivals, identify the exact hotel, residence, attraction or event entrance. Families should include strollers, child-seat requests and all luggage when requesting a vehicle. If the itinerary continues to Anaheim or another hotel, list that as an additional stop.",
    "returnCopy": "For Buena Park to John Wayne Airport, share the flight time and pickup location. Ask for a pickup recommendation that accounts for loading and airline check-in guidance, and confirm any additional stop before travel."
  },
  "fountain-valley": {
    "heading": "Private SNA transportation for Fountain Valley",
    "copy": "Fountain Valley airport transfers should be reserved to a complete home, hotel, office or appointment address. For medical or business destinations, identify the correct entrance and required arrival time. Discuss any mobility-related vehicle requirements before booking rather than assuming a standard airport vehicle will meet them.",
    "returnCopy": "For Fountain Valley to SNA, provide the departure flight, pickup entrance and luggage details. Multiple passenger pickups or appointment stops should be included in the quote request in advance."
  },
  "yorba-linda": {
    "heading": "John Wayne Airport car service for Yorba Linda",
    "copy": "For Yorba Linda arrivals, provide the exact residence, hotel, event or business address and any gate instructions. Groups and families should list passenger count, luggage and oversized items before the vehicle is confirmed. Event transportation and airport transfers should be itemized separately when they involve different schedules.",
    "returnCopy": "For Yorba Linda to SNA, share the airline, flight time and pickup address. If passengers are collected from more than one location, request a multi-stop itinerary so the schedule and quote account for every pickup."
  },
  "brea": {
    "heading": "John Wayne Airport transportation for Brea",
    "copy": "Brea airport trips may involve residences, hotels, offices, shopping or event destinations. Provide the complete street address and correct passenger entrance, and include the requested arrival time for meetings or events. Groups should list passengers, luggage and any oversized items before the vehicle is confirmed.",
    "returnCopy": "For Brea to SNA, share the airline, departure time and exact pickup address. If passengers are being collected in Fullerton, Yorba Linda or another city, request those stops in advance so the schedule and quote include them."
  },
  "cypress": {
    "heading": "Private SNA transportation for Cypress",
    "copy": "For Cypress arrivals, identify the exact residence, hotel, office or event address and any gate or visitor-entry instructions. Business travelers should include appointment times, while families should provide passenger, luggage and child-seat request details before booking.",
    "returnCopy": "For Cypress to John Wayne Airport, provide the departure flight and pickup location. Add any intermediate hotel, office or residential stop before the reservation is confirmed so the vehicle plan and quote match the itinerary."
  },
  "seal-beach": {
    "heading": "SNA car service to Seal Beach homes and coastal destinations",
    "copy": "Seal Beach transfers should include the exact residence, hotel, business or waterfront address. Tell reservations about beach equipment, golf bags or oversized luggage before the vehicle is selected. If the destination is within a gated community, include access instructions and a working passenger mobile number.",
    "returnCopy": "For Seal Beach to SNA, share the flight details and precise pickup address. Request additional stops in advance and confirm the pickup recommendation against your airline’s check-in guidance."
  },
  "westminster": {
    "heading": "John Wayne Airport car service for Westminster",
    "copy": "For Westminster arrivals, provide the full home, hotel, office, restaurant or event address and the correct passenger entrance. If several travelers are meeting from different locations, list each pickup as part of the itinerary rather than adding it during the trip.",
    "returnCopy": "For Westminster to SNA, provide the airline, departure time, passenger count and luggage. Ask for a pickup recommendation based on the complete itinerary and confirm any additional stop before travel."
  },
  "los-alamitos": {
    "heading": "Private SNA transportation for Los Alamitos",
    "copy": "Los Alamitos airport transfers should be reserved to a complete residence, hotel, office or appointment address. Include building, gate or visitor-entry instructions when useful, and identify any required arrival time. Passenger and luggage details help determine the appropriate vehicle.",
    "returnCopy": "For Los Alamitos to John Wayne Airport, share the flight time and exact pickup entrance. If the itinerary includes another pickup in Seal Beach, Cypress or a nearby city, arrange it as a multi-stop reservation in advance."
  },
  "la-habra": {
    "heading": "John Wayne Airport transportation to La Habra",
    "copy": "For La Habra arrivals, provide the exact residential, hotel, business or event address and any gated-access instructions. Groups should identify all passengers, luggage and requested stops before the reservation is confirmed, especially when travelers are arriving on different flights.",
    "returnCopy": "For La Habra to SNA, provide the departure flight and pickup location. Multiple household pickups should be included in the quote request so the recommended schedule accounts for each stop."
  },
  "placentia": {
    "heading": "SNA car service for Placentia",
    "copy": "Placentia airport transportation should be booked to the exact residence, hotel, office or event address. Include gate instructions, building names and requested arrival times when applicable. Families and groups should provide luggage and oversized-item details before selecting a vehicle.",
    "returnCopy": "For Placentia to John Wayne Airport, share the airline, flight time and pickup address. If the trip includes a pickup in Yorba Linda, Fullerton or Anaheim, request that stop before confirmation."
  },
  "laguna-woods": {
    "heading": "Private John Wayne Airport transportation for Laguna Woods",
    "copy": "For Laguna Woods arrivals, provide the complete residence or community address, gate information and a working passenger contact number. If a traveler has mobility-related requirements, discuss the specific vehicle and assistance needed with reservations before booking; standard airport transportation should not be assumed to provide medical transport.",
    "returnCopy": "For Laguna Woods to SNA, share the departure flight, exact pickup location, passenger count and luggage. Allow time for community access and loading, and confirm any additional stop before the trip."
  },
  "avalon": {
    "heading": "SNA to a mainland ferry terminal for Avalon",
    "copy": "Avalon is on Catalina Island. Your ground transfer covers the mainland journey from John Wayne Airport to the ferry terminal you have booked; the ferry crossing is a separate part of the trip. Share the ferry operator, departure port, sailing time and check-in requirement before reserving the car. Do not use your Avalon hotel address as the mainland drop-off location.",
    "returnCopy": "For the return journey, reserve pickup at the mainland ferry terminal where your boat arrives, then continue by car to SNA. Allow for ferry check-in, the crossing, baggage collection and possible schedule changes when planning flights. Ferry tickets and island transportation are separate arrangements; confirm current sailings directly with the operator."
  }
};

function Brand(){return <Link href="/" className="brand premiumBrand"><span className="jwMark">JW<Plane size={15}/></span><strong>JOHN WAYNE<small>AIRPORT LIMOUSINE</small></strong></Link>}

export default async function RoutePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const r=ROUTES.find(x=>x.slug===slug); if(!r)notFound();
  const detail=ROUTE_DETAILS[slug];
  const neighbors:Record<string,string[]>={"anaheim":["orange","buena-park","garden-grove","irvine"],"irvine":["newport-beach","tustin","costa-mesa","orange"],"newport-beach":["costa-mesa","irvine","laguna-beach","dana-point"],"laguna-beach":["newport-beach","dana-point","laguna-niguel"],"dana-point":["san-clemente","laguna-beach","san-juan-capistrano"],"san-clemente":["dana-point","san-juan-capistrano","mission-viejo"],"orange":["anaheim","tustin","irvine"],"avalon":["dana-point","long-beach","newport-beach"]};
  const related=(neighbors[slug] || ROUTES.filter(x=>x.slug!==slug && x.county===r.county).map(x=>x.slug).slice(0,6)).map(key=>ROUTES.find(x=>x.slug===key)!).filter(Boolean);
  const schema={"@context":"https://schema.org","@type":"Service",name:r.title,url:`${SITE_URL}/routes/${slug}`,areaServed:[r.city,r.county],serviceType:"John Wayne Airport private car and limousine service",provider:{"@id":BUSINESS_ID}};
  return <>
    <header className="topbar"><div className="shell nav"><Brand/><nav><Link href="/">Airport Service</Link><Link href="/private-aviation">Private Aviation</Link><Link href="/fleet">Fleet</Link><Link href="/service-areas">All Cities</Link><Link href="/#why">Why Us</Link></nav><div className="headerActions"><MobileMenu/><a className="phone" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></header>
    <main>
      <section className="routeHero"><div className="shell"><nav aria-label="Breadcrumb" className="back"><Link href="/">Home</Link> / <Link href="/service-areas">Service areas</Link> / <span>{r.city}</span></nav><p className="kicker">SNA AIRPORT TRANSPORTATION · {r.county.toUpperCase()}</p><h1>{r.title}</h1><p className="lead">{r.copy}</p><div className="actions"><a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Reserve this route <ArrowUpRight size={18}/></a><a className="btn dark" href={PHONE_HREF}><Phone size={18}/>{PHONE_DISPLAY}</a></div></div></section>
      <section className="routeBody shell"><div><p className="eyebrow">Private airport transfer</p><h2>SNA to {r.city}, planned around your trip.</h2><p>{slug==="avalon" ? "Reserve a private transfer from John Wayne Airport to your selected mainland ferry terminal for onward travel to Avalon." : `Reserve direct transportation between John Wayne Airport and ${r.city} with a professional chauffeur and a vehicle selected for your passengers and luggage.`} Arrival service can be coordinated using current flight information, while departing travelers can plan pickup around the time they want to reach the terminal.</p><p>For travelers in {r.county}, this service provides a private alternative to shared shuttles and on-demand rides, with one-way, round-trip and multi-stop reservations available.</p>{detail && <><h2>{detail.heading}</h2><p>{detail.copy}</p><h2>{slug==="avalon" ? "Returning from Catalina Island to SNA" : `${r.city} to John Wayne Airport`}</h2><p>{detail.returnCopy}</p><p>Review the <Link href="/fleet">airport vehicle options</Link> and include all passengers, bags and requested stops when requesting a quote. Confirm the total, waiting terms and any special arrangements before booking.</p></>}<ul><li><CheckCircle2/>{slug==="avalon" ? "Mainland airport-to-ferry transportation" : "Private door-to-door transportation"}</li><li><CheckCircle2/>Terminal A, B and C service</li><li><CheckCircle2/>Sedan, SUV and Sprinter options</li><li><CheckCircle2/>Flight-aware arrival coordination</li></ul></div><aside><b>Need help planning?</b><p>Call for airport pickups, group transportation, meet-and-greet requests or multi-stop itineraries.</p><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></aside></section>
      {slug==="anaheim" && <section className="shell serviceRelated"><h2>Private SNA transfers for Disneyland visits</h2><p>For a Disneyland-area stay, name the exact hotel and its passenger entrance when booking. Tell reservations about strollers, child-seat requests and all suitcases before choosing a vehicle. A hotel transfer and a theme-park drop-off may use different locations; confirm the address you want for each journey.</p><h3>Hotel arrivals and return flights</h3><p>If your flight arrives before hotel check-in, coordinate luggage storage directly with the hotel. For the return trip, reserve pickup from the hotel or another agreed location and provide your departure flight. A park closing time should not be used as the only basis for planning an airport departure.</p><h3>Anaheim convention travel</h3><p>For convention arrivals, include the hotel address, meeting time and any additional passengers collected along the way. Separate airport transfers from transportation between hotels and event venues so the quote reflects each requested journey.</p><p><Link href="/sna-airport-pickup">Read the SNA private pickup guide</Link> or review <Link href="/fleet">vehicles and luggage planning</Link>.</p></section>}
      {detail && <section className="shell" style={{paddingBottom:40,maxWidth:1000}}><h2>Planning your {r.city} airport transfer</h2><h3>Where will I meet the chauffeur at SNA?</h3><p>Confirm the meeting location in your reservation and contact your chauffeur after landing and collecting checked bags. Share your airline, flight number and a working mobile number. Meet-and-greet service and special assistance must be arranged in advance. The <a href="https://www.ocair.com/travelers/parking-transport/transportation/">airport transportation guide</a> provides general information; follow your confirmed pickup instructions for your reserved service.</p><h3>What should I include when requesting a quote?</h3><p>Include your travel date, flight details, complete destination address, passenger count, luggage and requested stops. Ask reservations to confirm the full price, waiting charges, cancellation terms and any child-seat request before paying. Pricing depends on the itinerary and vehicle; a request is subject to availability and confirmation.</p><h3>{slug==="avalon" ? "Does the car booking include the ferry?" : `Can I book the return trip from ${r.city}?`}</h3><p>{slug==="avalon" ? "The car reservation covers the mainland transfer. Book the ferry separately and confirm its port and sailing time before arranging the airport ride." : "Request both journeys together, including the return flight and pickup address. Confirm each pickup time and tell reservations about any differences in passengers, luggage or stops on the return trip."}</p></section>}
      <section className="shell serviceInlineLinks"><Link href="/sna-airport-pickup">SNA airport pickup guide</Link><Link href="/private-aviation">SNA private aviation transportation</Link></section><section className="related shell"><p className="eyebrow">More {r.county} routes</p><div className="routeGrid">{related.map(x=><Link href={`/routes/${x.slug}`} className="routeCard" key={x.slug}><span>SNA →</span><h3>{x.city}</h3><b>View route <ArrowRight size={15}/></b></Link>)}</div></section>
    </main>
    <footer><div className="shell credits">John Wayne Airport Limousine · Private SNA transportation to {r.city} · {PHONE_DISPLAY}</div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE_URL},{"@type":"ListItem",position:2,name:"Service areas",item:`${SITE_URL}/service-areas`},{"@type":"ListItem",position:3,name:r.city,item:`${SITE_URL}/routes/${slug}`}]})}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
