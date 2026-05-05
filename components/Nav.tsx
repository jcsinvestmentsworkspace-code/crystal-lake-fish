"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    {
      label: "About Us",
      href: "/about",
      children: [
        { href: "/about", label: "Overview" },
        { href: "/about#mission", label: "Our Mission" },
        { href: "/about#values", label: "Core Values" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { href: "/services", label: "All Services" },
        { href: "/services#fingerlings", label: "Fingerling Supply" },
        { href: "/services#rearing", label: "Fish Rearing" },
        { href: "/services#pond", label: "Pond Management" },
        { href: "/services#advisory", label: "Farm Advisory" },
      ],
    },
  ];

  return (
    <>
      <nav className="nav-wrap">
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div className="logo-mark">🐟</div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 900, color: "var(--forest)", lineHeight: 1.1 }}>
                Crystal Lake Fish
              </div>
              <div style={{ fontSize: "0.66rem", color: "var(--sage)", letterSpacing: "1.7px", textTransform: "uppercase" }}>
                Aquaculture Excellence
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul style={{ display: "flex", alignItems: "center", gap: 2, listStyle: "none" }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.href} style={{ position: "relative" }} className="nav-item">
                <Link
                  href={link.href}
                  style={{
                    display: "flex", alignItems: "center", gap: 4,
                    padding: "7px 15px", borderRadius: 8,
                    fontSize: "0.87rem", fontWeight: 500,
                    color: pathname === link.href ? "var(--forest)" : "var(--ink2)",
                    background: pathname === link.href ? "var(--pale)" : "transparent",
                    transition: "background 0.2s, color 0.2s",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                  {link.children && <span style={{ fontSize: "0.65rem", transition: "transform 0.2s" }}>▾</span>}
                </Link>
                {link.children && (
                  <div className="nav-dropdown">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        style={{ display: "block", padding: "10px 18px", fontSize: "0.84rem", color: "var(--ink2)", borderBottom: "1px solid var(--mist)", transition: "background 0.12s", textDecoration: "none" }}
                        className="dropdown-link"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact"
                style={{
                  background: "var(--forest)", color: "var(--white)",
                  padding: "8px 20px", borderRadius: "50px",
                  fontWeight: 600, fontSize: "0.87rem",
                  boxShadow: "0 2px 12px rgba(12,51,24,.28)",
                  transition: "background 0.2s", textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              display: "none", flexDirection: "column", gap: 5,
              padding: 8, background: "none", border: "none", cursor: "pointer",
            }}
            className="hamburger-btn"
          >
            <span style={{ display: "block", width: 22, height: 2, background: "var(--forest)", borderRadius: 2 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "var(--forest)", borderRadius: 2 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "var(--forest)", borderRadius: 2 }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mob-menu ${menuOpen ? "open" : ""}`}>
        <a onClick={() => setMenuOpen(false)} href="/">🏠 Home</a>
        <div className="mob-sep">About</div>
        <a href="/about" onClick={() => setMenuOpen(false)}>Overview</a>
        <a href="/about#mission" onClick={() => setMenuOpen(false)}>Our Mission</a>
        <a href="/about#values" onClick={() => setMenuOpen(false)}>Core Values</a>
        <div className="mob-sep">Services</div>
        <a href="/services" onClick={() => setMenuOpen(false)}>All Services</a>
        <a href="/services#fingerlings" onClick={() => setMenuOpen(false)}>Fingerling Supply</a>
        <a href="/services#rearing" onClick={() => setMenuOpen(false)}>Fish Rearing</a>
        <a href="/services#pond" onClick={() => setMenuOpen(false)}>Pond Management</a>
        <a href="/contact" onClick={() => setMenuOpen(false)} className="mob-cta">Contact Us</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        .nav-item .nav-dropdown {
          display: none;
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          min-width: 196px;
          box-shadow: 0 8px 36px rgba(12,51,24,.13);
          overflow: hidden;
          z-index: 200;
          animation: dropIn 0.18s ease both;
        }
        .nav-item:hover .nav-dropdown { display: block; }
        @keyframes dropIn { from{opacity:0;transform:translateY(-5px)} to{opacity:1;transform:translateY(0)} }
        .dropdown-link:hover { background: var(--pale) !important; color: var(--forest) !important; font-weight: 500 !important; }
        .dropdown-link:last-child { border-bottom: none !important; }
      `}</style>
    </>
  );
}
