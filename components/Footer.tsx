import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="fb-name">🐟 Crystal Lake Fish</div>
          <p>A forward-thinking aquaculture company dedicated to supplying high-quality fingerlings and professionally rearing fish for clients across Ghana.</p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li><Link href="/services#fingerlings">Fingerling Supply</Link></li>
            <li><Link href="/services#rearing">Fish Rearing</Link></li>
            <li><Link href="/services#pond">Pond Management</Link></li>
            <li><Link href="/services#advisory">Farm Advisory</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>📞 <a href="tel:0256040611">0256040611</a></p>
          <p>📞 <a href="tel:0302986381">0302986381</a></p>
          <p>✉️ <a href="mailto:info@crystal-lake-fish.com">info@crystal-lake-fish.com</a></p>
          <p>🕐 Mon–Fri: 8:00am – 4:00pm</p>
          <p>🕐 Sat: 8:00am – 1:00pm</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Crystal Lake Fish. All rights reserved.</span>
        <span>Sustainable Aquaculture · Ghana</span>
      </div>
    </footer>
  );
}
