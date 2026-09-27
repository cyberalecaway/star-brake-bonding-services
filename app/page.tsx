import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "./site-header";
import {
  business,
  galleryImages,
  openingHours,
  phoneNumbers,
  serviceGroups,
} from "./business-data";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: business.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lawaan I",
    addressLocality: "Talisay City",
    addressRegion: "Cebu",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.258766,
    longitude: 123.82507,
  },
  telephone: phoneNumbers[0].tel,
  contactPoint: phoneNumbers.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.tel,
    contactType: `${phone.label} phone`,
  })),
  openingHours: "Mo-Su 08:00-17:00",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="home">
          <div
            className="hero-backdrop"
            role="img"
            aria-label="Automotive repair workshop with a car raised for service"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(17, 19, 20, .97) 0%, rgba(17, 19, 20, .89) 37%, rgba(17, 19, 20, .45) 72%, rgba(17, 19, 20, .22) 100%), linear-gradient(0deg, rgba(17, 19, 20, .54), transparent 50%), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2200&q=88')",
            }}
          />
          <div className="hero-inner page-wrap">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-rule" /> Lawaan I, Talisay City, Cebu
              </p>
              <p className="hero-brand">Star Brake Bonding Services</p>
              <h1>Reliable Brake &amp; Automotive Services in Cebu</h1>
              <p className="hero-description">
                Professional brake bonding, clutch lining, underchassis,
                transmission, and automotive repair services.
              </p>
              <div className="hero-actions">
                <a className="button button-red" href={business.directionsUrl} target="_blank" rel="noreferrer">
                  Get Directions <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="button button-ghost" href={`tel:${phoneNumbers[0].tel}`}>
                  <Phone size={17} aria-hidden="true" /> Call Now
                </a>
              </div>
              <a className="hero-location-note" href="#location">
                <MapPin size={15} aria-hidden="true" /> Accessible from Cebu South Road
                <ArrowDownRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-open-card">
              <span className="open-indicator" />
              <div>
                <span className="open-card-label">Open every day</span>
                <strong>8:00 AM - 5:00 PM</strong>
              </div>
              <Clock3 size={21} aria-hidden="true" />
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">01 / CEBU</div>
        </section>

        <section className="quick-strip" aria-label="Shop information">
          <div className="page-wrap quick-strip-inner">
            <p><span className="quick-dot" /> Brake &amp; clutch services</p>
            <p><span className="quick-dot" /> Automotive repairs</p>
            <p><span className="quick-dot" /> Open Monday to Sunday</p>
            <a href="#contact">Talk to the shop <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="page-wrap">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow"><span className="eyebrow-rule" /> What we do</p>
                <h2>Services for the road ahead.</h2>
              </div>
              <p className="section-lede">
                From brake and clutch lining to broader automotive repairs,
                find the service your vehicle needs.
              </p>
            </div>
            <div className="service-grid">
              {serviceGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <article className="service-card" key={group.name}>
                    <div className="service-card-top">
                      <span className="service-icon"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
                      <span className="service-number">0{index + 1}</span>
                    </div>
                    <h3>{group.name}</h3>
                    <p className="service-summary">{group.description}</p>
                    <ul className="service-list">
                      {group.services.map((service) => (
                        <li key={service}><Check size={14} aria-hidden="true" /> {service}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="page-wrap about-layout">
            <div className="about-photo-wrap">
              <div
                className="about-photo"
                role="img"
                aria-label="Close view of a vehicle's suspension and brake assembly during underchassis inspection"
                style={{ backgroundImage: "url('/carefulinspection.png')" }}
              />
              <div className="about-photo-caption"><span>01</span> Underchassis inspection</div>
            </div>
            <div className="about-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-rule" /> About the shop</p>
              <h2>Practical automotive care, close to home.</h2>
              <p>
                Star Brake Bonding Services provides brake, clutch,
                underchassis, transmission, and automotive repair services in
                Lawaan, Talisay City, Cebu.
              </p>
              <p>
                The shop is accessible from Cebu South Road. Use the map
                directions to find the shop entrance in Lawaan I.
              </p>
              <a className="text-link text-link-light" href="#location">
                Find the shop <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="section reasons-section">
          <div className="page-wrap">
            <div className="section-heading section-heading-center">
              <p className="eyebrow"><span className="eyebrow-rule" /> At your service</p>
              <h2>What you can count on.</h2>
            </div>
            <div className="reasons-grid">
              <article className="reason-item"><span className="reason-index">01</span><h3>Brake &amp; clutch</h3><p>Bonding and re-lining services for brake and clutch linings.</p></article>
              <article className="reason-item"><span className="reason-index">02</span><h3>Underchassis</h3><p>Removal, installation, and repair services for underchassis work.</p></article>
              <article className="reason-item"><span className="reason-index">03</span><h3>Automotive repair</h3><p>Air-conditioning, engine troubleshooting, and overhaul services.</p></article>
              <article className="reason-item"><span className="reason-index">04</span><h3>Lawaan location</h3><p>Find the shop entrance using directions from Cebu South Road.</p></article>
              <article className="reason-item"><span className="reason-index">05</span><h3>Open all week</h3><p>Visit Monday to Sunday, 8:00 AM to 5:00 PM.</p></article>
              <article className="reason-item"><span className="reason-index">06</span><h3>Direct contact</h3><p>Call Smart, Globe, or the landline to reach the shop.</p></article>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="page-wrap">
            <div className="section-heading section-heading-row gallery-heading">
              <div>
                <p className="eyebrow eyebrow-light"><span className="eyebrow-rule" /> In the workshop</p>
                <h2>A closer look at the work.</h2>
              </div>
              <p className="section-lede section-lede-light">
                A few views of automotive service and repair work.
              </p>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <figure className={`gallery-item gallery-item-${index + 1}`} key={image.alt}>
                  <div
                    className="gallery-image"
                    role="img"
                    aria-label={image.alt}
                    style={{ backgroundImage: `url('${image.src}')` }}
                  />
                  <figcaption><span>0{index + 1}</span>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="location-section section" id="location">
          <div className="page-wrap">
            <div className="section-heading section-heading-row location-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-rule" /> Visit us</p>
                <h2>Find Star Brake Bonding Services</h2>
              </div>
              <p className="section-lede">
                Our shop is accessible from Cebu South Road. Follow the map
                directions to reach the shop entrance.
              </p>
            </div>
            <div className="location-layout">
              <div className="location-details">
                <MapPin size={22} aria-hidden="true" />
                <h3>Lawaan I, Talisay City, Cebu</h3>
                <p>Entrance pin: 10.258766, 123.825070</p>
                <div className="location-actions">
                  <a className="button button-red" href={business.directionsUrl} target="_blank" rel="noreferrer">
                    Get Directions <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  <a className="text-link" href={business.mapsUrl} target="_blank" rel="noreferrer">
                    Open Google Maps <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Map showing Star Brake Bonding Services in Lawaan I, Talisay City"
                  src={business.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a className="map-pin-label" href={business.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin size={15} aria-hidden="true" /> Star Brake Bonding Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-wrap contact-layout">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-rule" /> Get in touch</p>
              <h2>Need a hand with your vehicle?</h2>
              <p>Call the shop directly to ask about a service or plan your visit.</p>
              <a className="button button-red" href={`sms:${phoneNumbers[0].tel}`}>
                Send a message <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-numbers">
              {phoneNumbers.map((phone) => (
                <div className="contact-number-row" key={phone.label}>
                  <div><span>{phone.label}</span><strong>{phone.display}</strong></div>
                  <a className="call-circle" href={`tel:${phone.tel}`} aria-label={`Call ${phone.label}`}>
                    <Phone size={18} aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="hours-section section" id="hours">
          <div className="page-wrap hours-layout">
            <div className="hours-intro">
              <p className="eyebrow"><span className="eyebrow-rule" /> Plan your visit</p>
              <h2>Open every day.</h2>
              <p>Stop by during business hours in Lawaan I, Talisay City.</p>
              <span className="hours-badge"><Clock3 size={15} aria-hidden="true" /> Monday - Sunday</span>
            </div>
            <div className="hours-table" aria-label="Business hours">
              {openingHours.map((day) => (
                <div className="hours-row" key={day.day}>
                  <span>{day.day}</span><span>8:00 AM - 5:00 PM</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-main">
          <div className="footer-brand">
            <a className="brand-lockup footer-lockup" href="#home">
              <span className="brand-mark"><Image src="/starbrake.png" alt="" width={48} height={48} /></span>
              <span className="brand-name">Star Brake <small>Bonding Services</small></span>
            </a>
            <p>Lawaan I, Talisay City, Cebu</p>
            <a className="footer-directions" href={business.directionsUrl} target="_blank" rel="noreferrer">
              Get Directions <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-column">
            <h2>Quick links</h2>
            <a href="#services">Services</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#location">Location</a>
          </div>
          <div className="footer-column">
            <h2>Contact</h2>
            {phoneNumbers.map((phone) => <a href={`tel:${phone.tel}`} key={phone.label}>{phone.label}: {phone.display}</a>)}
          </div>
          <div className="footer-column footer-hours">
            <h2>Business hours</h2>
            <p>Monday to Sunday</p><p>8:00 AM - 5:00 PM</p>
          </div>
        </div>
        <div className="page-wrap footer-bottom">
          <span>© {new Date().getFullYear()} Star Brake Bonding Services</span>
          <span>Automotive services in Talisay City, Cebu</span>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
