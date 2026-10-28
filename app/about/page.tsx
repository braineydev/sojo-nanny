import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About Sojo Nanny | Thoughtful Childcare",
  description: "Meet Sojo Nanny and learn about our thoughtful day, overnight and travel childcare support.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />
      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-intro-heading">
          <p className="eyebrow">Care that feels like family</p>
          <h1 id="about-title">Meet Sojo Nanny.</h1>
          <p>Thoughtful childcare support for the moments that matter at home and away. Learn more about our approach and the care we offer in this short introduction.</p>
        </div>
        <video className="about-video" src="/ABOUT_SOJONANNY.MOV" controls playsInline preload="metadata">
          Your browser does not support video playback.
        </video>
        <div className="about-details">
          <article>
            <h2>Care shaped around your family</h2>
            <p>Every home has its own rhythm. We listen to what matters to your family and provide practical, attentive support around your routines, whether you need a steady hand through the day, overnight help, or care while travelling.</p>
          </article>
          <article>
            <h2>Experience you can feel</h2>
            <p>With more than seven years of childcare experience, Sojo Nanny brings warmth, reliability and peace of mind to the everyday moments that help families feel supported.</p>
          </article>
        </div>
        <div className="about-intro-heading">
          <Link className="about-back" href="/#services">Explore our care services {"\u2193"}</Link>
        </div>
      </section>
    </main>
  );
}
