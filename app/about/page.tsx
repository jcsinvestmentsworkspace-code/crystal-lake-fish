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

export default function About() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      {/* PAGE HERO */}
      <div className="page-hero">
        <img className="page-hero-img" src="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=1400&q=80" alt="Fish farm aerial" />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href="/" style={{ color: "#6ee89b" }}>Home</Link> / About Us</div>
          <h1>About Crystal Lake Fish</h1>
          <p>A forward-thinking aquaculture company built on sustainability, quality, and a genuine commitment to the success of every farmer we serve.</p>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path fill="#f4f9f6" d="M0,30 C400,60 1040,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="section bg-mist">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-main reveal">
              <img src="/fish-pond.jpg" alt="Crystal Lake fish pond" />
            </div>
            <div>
              <span className="eyebrow reveal">Our Story</span>
              <h2 className="headline reveal d1" style={{ marginTop: 10 }}>Who We Are</h2>
              <p className="about-lead reveal d2" style={{ marginTop: 20 }}>
                Crystal Lake Fish is a forward-thinking aquaculture company dedicated to supplying high-quality fingerlings and professionally rearing fish for clients across diverse needs.
              </p>
              <p className="about-body reveal d2">
                With a strong commitment to sustainability and efficiency, we provide reliable stock and tailored fish farming solutions that support both small-scale farmers and commercial operations. Our expertise ensures healthy growth, optimal yields, and long-term value for every client.
              </p>
              <p className="about-body reveal d3">
                At Crystal Lake Fish, we combine modern aquaculture practices with hands-on care to help our customers succeed in building profitable and sustainable fish farming ventures.
              </p>
              <Link href="/services" className="btn btn-dark reveal d3" style={{ marginTop: 20 }}>Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission" className="section services-dark">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 44 }}>
            <span className="eyebrow eyebrow-light">Purpose & Direction</span>
            <h2 className="headline headline-light" style={{ marginTop: 10 }}>Mission & Vision</h2>
          </div>
          <div className="mv2-grid">
            <div className="mv2-card reveal">
              <div style={{ fontSize: "2.8rem", marginBottom: 18 }}>🎯</div>
              <h3>Our Mission</h3>
              <p>To supply high-quality fingerlings and deliver professional fish farming solutions that support both small-scale farmers and commercial operations — ensuring healthy growth, optimal yields, and long-term value for every client we serve in Ghana and beyond.</p>
            </div>
            <div className="mv2-card reveal d1">
              <div style={{ fontSize: "2.8rem", marginBottom: 18 }}>🔭</div>
              <h3>Our Vision</h3>
              <p>To become the most trusted aquaculture enterprise in Ghana — combining modern aquaculture practices with hands-on care to help our customers succeed in building profitable and sustainable fish farming ventures for generations to come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section id="values" className="section">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 44 }}>
            <span className="eyebrow">What Drives Us</span>
            <h2 className="headline" style={{ marginTop: 10 }}>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: "🌱", title: "Sustainability", desc: "Responsible aquaculture that protects natural resources and ecosystems for future generations." },
              { icon: "⭐", title: "Quality", desc: "Every fingerling we breed meets the highest standards for health, growth potential, and survival." },
              { icon: "🤝", title: "Integrity", desc: "We build trust through transparency, honesty, and keeping our promises to every client." },
              { icon: "💡", title: "Innovation", desc: "Continuously adopting modern aquaculture techniques and technology to deliver better results." },
            ].map((v, i) => (
              <div key={i} className={`val-card reveal d${i}`}>
                <div className="val-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="section-sm bg-mist">
        <div className="container">
          <div className="img-strip reveal">
            {[
              ["/til-fin1.jpeg", "Fish fingerlings"],
              ["/til-fin3.jpeg", "Aquaculture nets"],
              ["/fish-pond.jpg", "Water reservoir"],
            ].map(([src, alt], i) => (
              <div key={i} className="img-strip-item"><img src={src} alt={alt} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 44 }}>
            <span className="eyebrow">Why Partner With Us</span>
            <h2 className="headline" style={{ marginTop: 10 }}>Why Choose Crystal Lake Fish?</h2>
            <p className="subtext" style={{ marginTop: 20 }}>We don't just supply fish — we invest in your success through expertise, care, and long-term partnership.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: "🐣", title: "Premium Quality Fingerlings", desc: "Carefully bred fingerlings with strong survival rates, disease resistance, and healthy growth from day one." },
              { icon: "📊", title: "Full-Cycle Management", desc: "Complete rearing services managing everything from initial stocking through to harvest with expert oversight." },
              { icon: "🧑‍🌾", title: "Experienced Team", desc: "Aquaculture specialists with years of hands-on experience for both new and established fish farmers." },
              { icon: "📈", title: "Scalable Solutions", desc: "Whether you're starting with a small pond or running a large commercial operation, we scale with your goals." },
            ].map((w, i) => (
              <div key={i} className={`why-item reveal d${i}`}>
                <div className="why-icon">{w.icon}</div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <h2 className="reveal">Let's Build Something Sustainable Together</h2>
        <p className="reveal d1">Reach out to our team and discover how Crystal Lake Fish can transform your aquaculture venture.</p>
        <Link href="/contact" className="btn btn-white reveal d2">Contact Us Today</Link>
      </div>

      <Footer />
    </div>
  );
}
