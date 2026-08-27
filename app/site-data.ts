export const SITE_URL = "https://johnwayneairportlimousine.com";
export const PHONE_DISPLAY = "(949) 680-5466";
export const PHONE_HREF = "tel:+19496805466";
export const EMAIL = "info@johnwayneairportlimousine.com";
export const BOOKING_URL = "https://book.mylimobiz.com/v4/scltinc";

const orangeCounty = [
  "Aliso Viejo","Anaheim","Brea","Buena Park","Costa Mesa","Cypress","Dana Point","Fountain Valley","Fullerton","Garden Grove","Huntington Beach","Irvine","La Habra","La Palma","Laguna Beach","Laguna Hills","Laguna Niguel","Newport Beach","Orange","Placentia","Rancho Santa Margarita","San Clemente","San Juan Capistrano","Santa Ana","Seal Beach","Stanton","Tustin","Villa Park","Westminster","Yorba Linda","Laguna Woods","Lake Forest","Los Alamitos","Mission Viejo"
] as const;

const losAngelesCounty = [
  "Agoura Hills","Alhambra","Arcadia","Artesia","Avalon","Azusa","Baldwin Park","Bell","Bell Gardens","Bellflower","Beverly Hills","Bradbury","Burbank","Calabasas","Carson","Cerritos","Claremont","Commerce","Compton","Covina","Cudahy","Culver City","Diamond Bar","Downey","Duarte","El Monte","El Segundo","Gardena","Glendale","Glendora","Hawaiian Gardens","Hawthorne","Hermosa Beach","Irwindale","La Canada Flintridge","La Habra Heights","La Mirada","La Puente","La Verne","Lancaster","Lakewood","Lawndale","Lomita","Long Beach","Los Angeles","Lynwood","Malibu","Manhattan Beach","Maywood","Monrovia","Montebello","Monterey Park","Norwalk","Palmdale","Palos Verdes Estates","Paramount","Pasadena","Pico Rivera","Pomona","Rancho Palos Verdes","Redondo Beach","Rolling Hills","Rolling Hills Estates","Rosemead","San Dimas","San Gabriel","San Marino","Santa Clarita","Santa Fe Springs","Santa Monica","Sierra Madre","Signal Hill","South El Monte","South Gate","South Pasadena","Temple City","Torrance","Vernon","Walnut","West Covina","West Hollywood","Westlake Village","Whittier","Hidden Hills","Huntington Park","Industry","Inglewood","San Fernando"
] as const;

const slugify = (city:string) => city.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

const specialCopy: Record<string,string> = {
  "Newport Beach":"Private SNA airport transportation to Newport Beach, Newport Coast, Balboa, Fashion Island and area hotels.",
  "Irvine":"Executive and private airport transportation between SNA and Irvine offices, hotels, UC Irvine and residential neighborhoods.",
  "Laguna Beach":"Prearranged SNA transfers to Laguna Beach resorts, downtown, residences, weddings and coastal destinations.",
  "Anaheim":"Private transportation from SNA to Anaheim hotels, convention destinations and the Anaheim Resort area.",
  "Mission Viejo":"Door-to-door airport transportation between SNA and Mission Viejo homes, businesses and hotels.",
  "Laguna Niguel":"Private SNA transportation for Laguna Niguel residents, guests, resorts and business travelers.",
  "Dana Point":"Airport transfers to Dana Point Harbor, coastal resorts, residences, weddings and business destinations.",
  "San Clemente":"Comfortable airport transportation south to San Clemente for homes, hotels, events and coastal travel.",
  "Costa Mesa":"Fast, prearranged airport transportation to South Coast Plaza, Segerstrom Center, hotels and businesses.",
  "Tustin":"Private airport transportation from SNA to Tustin residences, offices, hotels and nearby destinations.",
  "Long Beach":"Private John Wayne Airport transportation to Long Beach hotels, downtown, the waterfront, cruise terminals and Long Beach Airport connections.",
  "Los Angeles":"Reserved SNA car service to Los Angeles hotels, business districts, residences, studios and event destinations.",
  "Beverly Hills":"Private airport transportation from SNA to Beverly Hills hotels, residences, shopping and business appointments.",
  "Santa Monica":"Prearranged chauffeur service from John Wayne Airport to Santa Monica hotels, residences, offices and coastal destinations.",
  "Pasadena":"Private SNA airport transportation to Pasadena hotels, residences, meetings, events and the surrounding San Gabriel Valley.",
  "Inglewood":"Reserved transportation from SNA to Inglewood hotels, residences, events and nearby entertainment venues."
};

export type Route = { slug:string; city:string; county:"Orange County"|"Los Angeles County"; title:string; copy:string };

function buildRoute(city:string, county:Route["county"]):Route {
  const copy = specialCopy[city] || (county === "Orange County"
    ? `Private John Wayne Airport transportation between SNA and ${city} for homes, hotels, business travel, events and local destinations.`
    : `Prearranged John Wayne Airport car service between SNA and ${city}, with private chauffeured transportation for business and leisure travel.`);
  return { slug:slugify(city), city, county, title:`John Wayne Airport to ${city} Car Service`, copy };
}

export const ROUTES: Route[] = [
  ...orangeCounty.map(city=>buildRoute(city,"Orange County")),
  ...losAngelesCounty.map(city=>buildRoute(city,"Los Angeles County"))
];

export const POPULAR_ROUTE_SLUGS = ["newport-beach","irvine","laguna-beach","anaheim","mission-viejo","laguna-niguel","dana-point","san-clemente","costa-mesa","tustin","long-beach","los-angeles"];
