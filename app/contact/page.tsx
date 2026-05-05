"use client";
import { useEffect, useRef, useState } from "react";
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

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ fname: "", lname: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (!form.fname || !form.email || !form.message) {
    alert("Please fill in your name, email, and message.");
    return;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
  access_key: "3e7558c1-7a13-4584-93cb-a1ae464e10e2",
  subject: "New Crystal Lake Fish Website Message",
  from_name: "Crystal Lake Fish Website",
  name: `${form.fname} ${form.lname}`,
  email: form.email,
  phone: form.phone,
  message: form.message,
  botcheck: false,
}),
    });

    const result = await response.json();
console.log("Web3Forms result:", result);
    if (result.success) {
      setSent(true);
      alert("Message sent successfully ✅");
    } else {
      alert(result.message || "Message failed to send ❌");
    }
  } catch (error) {
    console.error(error);
    alert("Message failed to send ❌");
  }
}

  return (
    <div ref={ref}>
      {/* PAGE HERO */}
      <div className="page-hero">
        <img className="page-hero-img" src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=1400&q=80" alt="Peaceful fish pond" />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href="/" style={{ color: "#6ee89b" }}>Home</Link> / Contact Us</div>
          <h1>Get In Touch</h1>
          <p>Have questions about our fingerlings, rearing services, or pond management? Our team is ready to help you build a successful fish farming venture.</p>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path fill="#f4f9f6" d="M0,30 C400,60 1040,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* CONTACT MAIN */}
      <section className="section bg-mist">
        <div className="container">
          <div className="contact-grid">
            {/* Info Cards */}
            <div>
              <span className="eyebrow reveal">Reach Us</span>
              <h2 className="headline reveal d1" style={{ marginTop: 10 }}>We'd Love to Hear From You</h2>
              <p className="subtext reveal d2" style={{ marginTop: 20, marginBottom: 32 }}>
                Whether you're a new farmer just starting out or an experienced operator looking to scale, our team is here with expert guidance.
              </p>
              <div className="ci-cards">
                {[
                  { icon: "📞", title: "Phone Numbers", content: <><a href="tel:0256040611">0256040611</a><br /><a href="tel:0302986381">0302986381</a></> },
                  { icon: "✉️", title: "Email Address", content: <><a href="mailto:info@crystal-lake-fish.com ">info@crystal-lake-fish.com </a><br /><span style={{ color: "var(--ink3)", fontSize: "0.83rem" }}>We respond within 24 hours.</span></> },
                  { icon: "🕐", title: "Business Hours", content: <>Monday – Friday: 8:00am – 4:00pm<br />Saturday: Closed<br />Sunday: Closed</> },
                  { icon: "📍", title: "Location", content: <>Ghana<br />Contact us for our exact farm location.</> },
                ].map((card, i) => (
                  <div key={i} className={`ci-card reveal d${i}`}>
                    <div className="ci-icon">{card.icon}</div>
                    <div>
                      <h4>{card.title}</h4>
                      <p>{card.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="form-box reveal d1">
              <h3>Send Us a Message</h3>
              <p className="form-sub">Fill in the form below and our team will get back to you promptly.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="fgroup">
                    <label>First Name</label>
                    <input type="text" placeholder="John" value={form.fname} onChange={e => setForm({ ...form, fname: e.target.value })} />
                  </div>
                  <div className="fgroup">
                    <label>Last Name</label>
                    <input type="text" placeholder="Mensah" value={form.lname} onChange={e => setForm({ ...form, lname: e.target.value })} />
                  </div>
                </div>
                <div className="fgroup">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="fgroup">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="0XX XXX XXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="fgroup">
                  <label>Service of Interest</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                    <option value="">— Select a Service —</option>
                    <option>Fingerling Supply</option>
                    <option>Fish Rearing Services</option>
                    <option>Pond Management</option>
                    <option>Farm Advisory</option>
                    <option>Feeding Guidance</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="fgroup">
                  <label>Your Message</label>
                  <textarea placeholder="Tell us about your farm, your goals, or any questions you have..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="submit-btn" disabled={sent} style={sent ? { background: "var(--sage)" } : {}}>
                  {sent ? "✅ Message Sent!" : "Send Message →"}
                </button>
                {sent && (
                  <div className="success-msg">
                    ✅ Thank you! Your message has been received. We'll be in touch within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="section-sm">
        <div className="container">
          <div className="img-strip reveal">
            {[
              ["/Ghanaian_fish_farming.jpg", "Fish farming"],
              ["/catfishes.jpg", "Aquaculture"],
              ["/til-fin1.jpeg", "Fish harvest"],
            ].map(([src, alt], i) => (
              <div key={i} className="img-strip-item"><img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="section services-dark">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 44 }}>
            <span className="eyebrow eyebrow-light">When to Reach Us</span>
            <h2 className="headline headline-light" style={{ marginTop: 10 }}>Business Hours</h2>
          </div>
          <div className="hours-grid">
            <div className="hours-card reveal">
              <h4>🗓️ Weekdays</h4>
              {[["Monday","8:00am – 4:00pm"],["Tuesday","8:00am – 4:00pm"],["Wednesday","8:00am – 4:00pm"],["Thursday","8:00am – 4:00pm"],["Friday","8:00am – 4:00pm"]].map(([d,t]) => (
                <div key={d} className="hours-row"><span className="day">{d}</span><span className="time">{t}</span></div>
              ))}
            </div>
            <div className="hours-card reveal d1">
              <h4>📅 Weekend</h4>
              <div className="hours-row"><span className="day">Saturday</span><span className="cls">Closed</span></div>
              <div className="hours-row"><span className="day">Sunday</span><span className="cls">Closed</span></div>
            </div>
            <div className="hours-card reveal d2">
              <h4>📬 Email Response</h4>
              <div className="hours-row"><span className="day">Weekdays</span><span className="time">Within 24hrs</span></div>
              <div className="hours-row"><span className="day">Weekends</span><span className="time">Next business day</span></div>
              <div className="hours-row"><span className="day">Urgent</span><span className="time">Call directly</span></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
