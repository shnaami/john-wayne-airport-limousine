"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF, POPULAR_ROUTE_SLUGS, ROUTES } from "./site-data";

const popularCities = POPULAR_ROUTE_SLUGS
  .map(slug => ROUTES.find(route => route.slug === slug))
  .filter(Boolean) as (typeof ROUTES)[number][];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="mobileMenuWrap">
      <button
        className="mobileMenuButton"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
      >
        {open ? <X size={22} /> : <Menu size={24} />}
      </button>

      {open && (
        <>
          <button className="mobileMenuBackdrop" aria-label="Close navigation menu" onClick={close} />
          <aside className="mobileMenuPanel" aria-label="Mobile navigation">
            <div className="mobileMenuTop">
              <strong>Menu</strong>
              <button type="button" aria-label="Close navigation menu" onClick={close}>
                <X size={24} />
              </button>
            </div>

            <nav className="mobileMenuPrimary">
              <Link href="/" onClick={close}>Home</Link>
              <Link href="/#service" onClick={close}>Airport Service</Link>
              <Link href="/fleet" onClick={close}>Luxury Fleet</Link>
              <Link href="/#routes" onClick={close}>Popular Routes</Link>
              <Link href="/service-areas" onClick={close}>All Cities</Link>
              <Link href="/#why" onClick={close}>Why Us</Link>
            </nav>

            <div className="mobileMenuCities">
              <span>Popular cities</span>
              <div>
                {popularCities.map(route => (
                  <Link key={route.slug} href={`/routes/${route.slug}`} onClick={close}>
                    {route.city}
                  </Link>
                ))}
              </div>
              <Link className="viewAllCities" href="/service-areas" onClick={close}>
                View all {ROUTES.length} service areas →
              </Link>
            </div>

            <div className="mobileMenuActions">
              <a className="btn primary" href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={close}>
                Reserve your ride
              </a>
              <a className="mobileMenuPhone" href={PHONE_HREF} onClick={close}>
                <Phone size={18} /> {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
