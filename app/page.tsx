"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    el.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden", background: "var(--forest)" }}>
        <img
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=1600&q=80"
          alt="Fish farm pond at sunrise"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.38) saturate(1.1)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(12,51,24,.82) 0%, rgba(12,51,24,.45) 60%, transparent 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 60, paddingBottom: 120 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)",
              backdropFilter: "blur(8px)", padding: "7px 16px", borderRadius: 50,
              marginBottom: 28, fontSize: "0.78rem", letterSpacing: 2, textTransform: "uppercase",
              color: "#a8f0c0", fontWeight: 500,
            }}>
              🐠 Premium Aquaculture · Ghana
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", color: "var(--white)",
              lineHeight: 1.08, marginBottom: 22,
            }}>
              Want <em style={{ color: "#6ee89b", fontStyle: "normal" }}>The Best</em><br />Fishes In Ghana?
            </h1>
            <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,.8)", lineHeight: 1.78, marginBottom: 38 }}>
              Crystal Lake Fish serves you the best kind of fishes. CLF specializes in breeding and supplying high-quality fingerlings and providing full-cycle professional fish rearing services — helping you achieve consistent yields and long-term success.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/services" className="btn btn-white">Our Services</Link>
              <Link href="/contact" className="btn btn-ghost">Get In Touch</Link>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path fill="#ffffff" d="M0,35 C400,70 1040,0 1440,35 L1440,70 L0,70 Z" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="stats-inner">
          {[["500+", "Clients Served"], ["10K+", "Fingerlings Supplied"], ["100%", "Quality Assured"], ["5+", "Years Experience"]].map(([num, lbl], i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{num}</div>
              <div className="stat-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WELCOME */}
      <section className="section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-img-wrap reveal">
              <div className="welcome-img-main">
                <img src="/tilapia-fingerlings.jpg" alt="Fish farm pond" />
              </div>
              <div className="welcome-img-accent">
                <img src="/til-fin1.jpeg" alt="Fingerlings in water" />
              </div>
            </div>
            <div>
              <span className="eyebrow reveal">Welcome to Crystal Lake Fish</span>
              <h2 className="headline reveal d1" style={{ marginTop: 10 }}>Ghana's Trusted Aquaculture Partner</h2>
              <p className="subtext reveal d2" style={{ marginTop: 20 }}>
                We are a forward-thinking aquaculture company dedicated to supplying high-quality fingerlings and professionally rearing fish for clients across diverse needs — combining modern practices with hands-on care.
              </p>
              <ul className="check-list reveal d2">
                {[
                  "High-quality fingerlings with strong survival rates",
                  "Full-cycle fish rearing — from stocking to harvest",
                  "Pond management, feeding guidance & advisory",
                  "Scalable solutions for small and commercial farms",
                ].map((item, i) => (
                  <li key={i}><span style={{ color: "var(--sage)" }}>✅</span>{item}</li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-dark reveal d3">Read More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-dark">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 48 }}>
            <span className="eyebrow eyebrow-light">What We Do</span>
            <h2 className="headline headline-light" style={{ marginTop: 10 }}>Our Core Services</h2>
            <p className="subtext subtext-light" style={{ marginTop: 20, margin: "20px auto 0" }}>
              From fingerling supply to full farm management — reliable, sustainable aquaculture solutions tailored to your needs.
            </p>
          </div>
          <div className="srv-grid">
            {[
              { icon: "🐣", title: "Fingerling Supply", desc: "Premium fingerlings carefully bred for strong survival rates and healthy, fast growth at every development stage." },
              { icon: "🌊", title: "Fish Rearing Services", desc: "We manage the full rearing process — from stocking to harvest — with professional care and expert monitoring." },
              { icon: "🏞️", title: "Pond Management", desc: "Expert pond setup, water quality monitoring, aeration, and seasonal management to maximize your yields." },
              { icon: "📋", title: "Farm Advisory", desc: "Tailored consulting for new and experienced farmers — covering planning, species selection, and profitability." },
              { icon: "🌿", title: "Feeding Guidance", desc: "Science-backed feeding schedules and nutritional planning to reduce waste and maximize fish growth rates." },
              { icon: "🤝", title: "Consulting & Support", desc: "Personalized end-to-end consultation to help you build a profitable and sustainable fish farming operation." },
            ].map((s, i) => (
              <Link key={i} href="/services" className={`srv-card reveal ${i > 0 ? `d${Math.min(i, 4)}` : ""}`}>
                <div className="srv-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="srv-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="section bg-mist">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Who We Are</span>
            <h2 className="headline" style={{ marginTop: 10 }}>Mission, Vision & Values</h2>
          </div>
          <div className="mv-grid">
            {[
              { icon: "🎯", title: "Our Mission", text: "To supply high-quality fingerlings and deliver professional fish farming solutions that support both small-scale and commercial operations, ensuring healthy growth, optimal yields, and long-term value for every client." },
              { icon: "🔭", title: "Our Vision", text: "To become Ghana's most trusted aquaculture enterprise — combining modern practices with hands-on care to help our customers build profitable and sustainable fish farming ventures for generations to come." },
              { icon: "💚", title: "Core Values", text: "Sustainability · Quality · Integrity · Client Success · Innovation. These values guide every fingerling we breed, every pond we manage, and every farmer we support across Ghana." },
            ].map((m, i) => (
              <div key={i} className={`mv-card reveal d${i}`}>
                <div className="mv-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="section-sm">
        <div className="container">
          <div className="img-strip reveal">
            {[
              ["/cat-fin1.jpeg", "Fish pond farming"],
              ["/catfish.jpeg", "Aquaculture nets"],
              ["/til-fin1.jpeg", "Fresh fish harvest"],
            ].map(([src, alt], i) => (
              <div key={i} className="img-strip-item">
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <h2 className="reveal">Ready to Start Your Fish Farming Journey?</h2>
        <p className="reveal d1">Contact Crystal Lake Fish today and let's build your sustainable aquaculture venture together.</p>
        <Link href="/contact" className="btn btn-white reveal d2">Contact Us Today</Link>
      </div>

      <Footer />
    </div>
  );
}
