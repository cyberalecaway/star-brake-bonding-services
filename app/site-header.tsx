"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { business } from "./business-data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell page-wrap">
        <a className="brand-lockup" href="#home" aria-label="Star Brake Bonding Services home">
          <span className="brand-mark"><Image src="/starbrake.png" alt="" width={48} height={48} /></span>
          <span className="brand-name">Star Brake <small>Bonding Services</small></span>
        </a>
        <nav className={`primary-nav${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <a href={link.href} key={link.label} onClick={() => setIsOpen(false)}>{link.label}</a>
          ))}
        </nav>
        <a className="nav-directions" href={business.directionsUrl} target="_blank" rel="noreferrer">
          Get Directions <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>
      <nav className={`mobile-nav${isOpen ? " is-open" : ""}`} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!isOpen}>
        {links.map((link) => (
          <a href={link.href} key={link.label} onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>{link.label}</a>
        ))}
        <a className="mobile-nav-directions" href={business.directionsUrl} target="_blank" rel="noreferrer" tabIndex={isOpen ? 0 : -1}>
          Get Directions <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}