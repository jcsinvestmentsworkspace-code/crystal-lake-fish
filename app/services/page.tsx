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

const services = [
  {
    id: "fingerlings",
    num: "01",
    icon: "🐣",
    title: "Fingerling Supply",
    img: "/cat-fin1.jpeg",
    alt: "Fish fingerlings",
    body1: "At Crystal Lake Fish, we specialize in breeding and supplying high-quality fingerlings, carefully raised to ensure strong survival rates and healthy growth. Our fingerlings are nurtured under optimal conditions using modern techniques that maximize health and resilience.",
    body2: "Whether you need a small batch for a starter pond or bulk supply for a commercial operation, we have the capacity and expertise to deliver.",
    features: ["Bred for high survival and fast growth rates", "Disease-screened and health-certified stock", "Available in varying sizes and quantities", "Suitable for ponds, tanks, and cage systems"],
    cta: "Order Fingerlings",
  },
  {
    id: "rearing",
    num: "02",
    icon: "🌊",
    title: "Fish Rearing Services",
    img: "/Ghanaian_fish_farming.jpg",
    alt: "Fish farming nets",
    body1: "Our fish rearing service handles the entire production cycle on your behalf. From initial stocking to final harvest, our experienced team manages every aspect of your fish farm with professional care, precision feeding, health monitoring, and timely intervention.",
    body2: "This is ideal for clients who want to invest in fish farming without managing the day-to-day complexities of production.",
    features: ["Full-cycle management from stocking to harvest", "Regular health checks and growth monitoring", "Optimal feeding regimes for maximum yield", "Harvest coordination and post-harvest support"],
    cta: "Enquire About Rearing",
    reverse: true,
  },
  {
    id: "pond",
    num: "03",
    icon: "🏞️",
    title: "Pond Management Support",
    img: "/fish-pond.jpg",
    alt: "Fish pond management",
    body1: "Proper pond management is the backbone of successful fish farming. Our service covers everything from initial setup and stocking recommendations to ongoing water quality monitoring, aeration management, and emergency response.",
    body2: "",
    features: ["Pond setup, liming, and preparation", "Water quality testing and management", "Stocking density optimization", "Seasonal pond management planning"],
    cta: "Get Pond Support",
  },
  {
    id: "advisory",
    num: "04",
    icon: "📋",
    title: "Farm Advisory Services",
    img: "/catfish.jpeg",
    alt: "Fish farm planning",
    body1: "Whether you're planning your first pond or scaling an existing operation, our experts provide practical, actionable guidance tailored to your specific situation. We assess your resources, goals, and constraints to develop a farming plan that maximizes your return.",
    body2: "",
    features: ["Farm planning and feasibility assessments", "Species selection and stocking recommendations", "Business model and profitability guidance", "Ongoing support and performance review"],
    cta: "Book a Consultation",
    reverse: true,
  },
  {
    id: "feeding",
    num: "05",
    icon: "🌿",
    title: "Feeding Guidance",
    img: "/catfishes.jpg",
    alt: "Feeding guidance",
    body1: "Proper nutrition is critical to achieving consistent growth and profitability. Our feeding guidance provides science-backed feeding schedules, feed selection advice, and nutritional planning tailored to your fish species, life stage, and production goals.",
    body2: "",
    features: ["Customized feeding schedules by fish size and age", "Feed type and quality recommendations", "Feed conversion ratio monitoring", "Cost-effective feeding strategies"],
    cta: "Get Feeding Advice",
  },
];

export default function Services() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      {/* PAGE HERO */}
      <div className="page-hero">
        <img className="page-hero-img" src="/til-fin1.jpeg" alt="Fish harvest" />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href="/" style={{ color: "#6ee89b" }}>Home</Link> / Services</div>
          <h1>Our Services</h1>
          <p>From fingerling supply to full farm management — reliable, sustainable aquaculture solutions tailored to your goals and scale.</p>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path fill="#ffffff" d="M0,30 C400,60 1040,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="section services-dark">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 44 }}>
            <span className="eyebrow eyebrow-light">At a Glance</span>
            <h2 className="headline headline-light" style={{ marginTop: 10 }}>Everything You Need to Succeed</h2>
            <p className="subtext subtext-light" style={{ marginTop: 20, margin: "20px auto 0" }}>A comprehensive range of aquaculture services designed to support every stage of your fish farming journey.</p>
          </div>
          <div className="srv-overview">
            {services.map((s, i) => (
              <a key={i} href={`#${s.id}`} className={`sv-ov-card reveal d${Math.min(i, 4)}`}>
                <div className="sv-ov-icon">{s.icon}</div>
                <h4>{s.title}</h4>
              </a>
            ))}
            <div className="sv-ov-card reveal d2" onClick={() => {}} style={{ cursor: "default" }}>
              <div className="sv-ov-icon">🤝</div>
              <h4>Custom Solutions</h4>
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.83rem" }}>Bespoke packages designed for your specific operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 56 }}>
            <span className="eyebrow">What We Do</span>
            <h2 className="headline" style={{ marginTop: 10 }}>Our Services in Detail</h2>
          </div>

          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="srv-detail"
              style={s.reverse ? { direction: "rtl" } : {}}
            >
              <div className="srv-detail-img reveal" style={s.reverse ? { direction: "ltr" } : {}}>
                <img src={s.img} alt={s.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={s.reverse ? { direction: "ltr" } : {}}>
                <div className="srv-num reveal">{s.num}</div>
                <h3 className="reveal d1">{s.title}</h3>
                <p className="body-text reveal d1">{s.body1}</p>
                {s.body2 && <p className="body-text reveal d2">{s.body2}</p>}
                <ul className="feat-list reveal d2">
                  {s.features.map((f, fi) => <li key={fi}>{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-dark reveal d3">{s.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <h2 className="reveal">Ready to Get Started?</h2>
        <p className="reveal d1">Talk to our team about your aquaculture needs and we'll design the perfect solution for your farm.</p>
        <Link href="/contact" className="btn btn-white reveal d2">Contact Us Now</Link>
      </div>

      <Footer />
    </div>
  );
}
