import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { BackToTop } from "@/components/BackToTop";
import { InquiryForm } from "@/components/InquiryForm";
import { ServiceCard } from "@/components/ServiceCard";

const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254704690779";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <Hero />

      <section className="trust-strip" aria-label="About Sojo Nanny">
        <p><span className="trust-mark">01</span> Thoughtful care, shaped around your family</p>
        <p><span className="trust-mark">02</span> Day, overnight and travel support</p>
        <p><span className="trust-mark">03</span> More than seven years of experience</p>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading">
          <div><p className="eyebrow">Care for the season you&apos;re in</p><h2>Support that fits<br />real family life.</h2></div>
          <p className="section-intro">Every family&apos;s rhythm is different. Explore the kind of support you need and tell us what would make home feel a little easier.</p>
        </div>
        <div className="services-grid">
          <ServiceCard title="Day care" serviceType="Day Care" hours="A STEADY HAND THROUGH THE DAY" body="Feeding, naps, play and everyday routines, cared for while you work or take time for yourself." image="/nanny-playtime.jpeg" number="01" />
          <ServiceCard title="Overnight care" serviceType="Overnight Care" hours="RESTFUL SUPPORT AFTER DARK" body="Gentle overnight support for newborns and infants, helping your family find more room to rest." image="/newborn-night-care.jpeg" number="02" />
          <ServiceCard title="Travel nanny" serviceType="Travel Nanny" hours="CARE THAT COMES ALONG" body="A nanny travelling with your family to help keep familiar routines in place, at home or away." image="/stroller-care.jpeg" number="03" />
        </div>
        <p className="service-note">Not sure which kind of care is right? <a href="#book">Tell us what you need <span aria-hidden="true">↗</span></a></p>
      </section>

      <section id="approach" className="approach-section">
        <div className="approach-image" role="img" aria-label="A caregiver gently holding a newborn" />
        <div className="approach-copy">
          <p className="eyebrow">A little more peace of mind</p>
          <h2>Care is personal.<br /><em>It should feel that way.</em></h2>
          <p>Inviting someone into your family&apos;s day takes trust. Sojo Nanny brings more than seven years of childcare experience to practical, attentive support shaped around your home and routines.</p>
          <p>Start with a conversation about what your family needs. We&apos;ll learn more about the care you&apos;re looking for and talk through a suitable next step.</p>
          <a className="text-link" href="#book">Tell us about your family <span aria-hidden="true">↗</span></a>
          <span className="approach-caption">Thoughtful support, at your family&apos;s pace</span>
        </div>
      </section>

      <section className="steps-section" aria-labelledby="steps-title">
        <div className="steps-heading"><p className="eyebrow">A clear place to begin</p><h2 id="steps-title">Getting started is simple.</h2></div>
        <ol className="steps-list">
          <li><span>01</span><h3>Share what you need</h3><p>Choose a care option and tell us a little about your family, location and timing.</p></li>
          <li><span>02</span><h3>Let&apos;s talk it through</h3><p>We&apos;ll use your enquiry to understand your needs and discuss the right support.</p></li>
          <li><span>03</span><h3>Plan your next step</h3><p>Connect with us to talk through what comes next for your family&apos;s care.</p></li>
        </ol>
      </section>

      <section className="questions-section" aria-labelledby="questions-title">
        <div><p className="eyebrow">A few helpful notes</p><h2 id="questions-title">Questions parents<br />often have.</h2></div>
        <div className="questions-list">
          <details><summary>What kinds of care does Sojo Nanny offer?</summary><p>Day care, overnight care for newborns and infants, and travel nanny support. Share your circumstances in the enquiry and we can discuss what may suit.</p></details>
          <details><summary>How do I find out about availability and rates?</summary><p>Availability and rates depend on your care needs. Send an enquiry with your location, preferred timing and service, and contact Sojo Nanny to discuss the details.</p></details>
          <details><summary>What happens after I send an enquiry?</summary><p>Your request is sent to Sojo Nanny for follow-up. You can also call or message directly if you would prefer to speak with someone.</p></details>
        </div>
      </section>

      <section id="book" className="booking-section">
        <div className="booking-copy">
          <p className="eyebrow">Your family, your routine</p>
          <h2>A more supported<br />day starts here.</h2>
          <p>Tell us what kind of care you&apos;re looking for. We&apos;ll be in touch to learn more and talk through your next step.</p>
          <a className="booking-direct" href={`https://wa.me/${wa}`}>Prefer WhatsApp? Message us <span aria-hidden="true">↗</span></a>
        </div>
        <div className="booking-form">
          <p className="form-overline">A good place to begin</p><h3>Tell us what your family needs.</h3>
          <InquiryForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand-block"><a className="footer-brand" href="#top" aria-label="Sojo Nanny home"><Image src="/logo1.png" width={120} height={120} alt="Sojo Nanny Care" className="footer-logo" /></a><p>Thoughtful childcare support for the moments that matter at home and away.</p><span className="footer-location">KENYA · WORLDWIDE CARE</span></div>
        <section className="footer-contact" aria-labelledby="footer-contact-title"><h2 id="footer-contact-title">We&apos;re here to talk</h2><div className="footer-contact-grid">
          <a href={`https://wa.me/${wa}`}><span>WhatsApp</span><strong>+254 704 690 779</strong></a>
          <a href="tel:+254113781473"><span>Call</span><strong>+254 113 781 473</strong></a>
          <a href="https://www.instagram.com/sojonanny/" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@sojonanny</strong></a>
          <a href="#services"><span>Explore</span><strong>Our care services</strong></a>
        </div></section>
        <p className="footer-bottom">Sojo Nanny Services <span>Care that feels like family</span></p>
      </footer>
      <a href={`https://wa.me/${wa}`} aria-label="Chat with Sojo Nanny on WhatsApp" className="whatsapp-float">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.8 11.8 0 0 0 1.9 17.7L.3 23.5l6-1.57A11.8 11.8 0 0 0 20.52 3.48Zm-8.48 17.1c-1.78 0-3.52-.48-5.04-1.4l-.36-.22-3.56.93.95-3.47-.23-.36A9.34 9.34 0 1 1 12.04 20.6Z"/><path d="M16.94 13.92c-.27-.14-1.62-.8-1.88-.9-.25-.1-.44-.14-.62.14-.19.28-.72.9-.88 1.08-.16.19-.32.21-.6.07-.27-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.19-.27.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.35-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.19 1.93 2.96 4.68 4.15.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.2.16-1.31-.07-.12-.25-.19-.53-.33Z"/></svg>
      </a>
      <BackToTop />
    </main>
  );
}
