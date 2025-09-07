import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold text-white">
            <img src="/images/madrasa-logo.webp" alt="Madrasa Logo" height="40" className="me-2" />
            Islamic Madrasa
          </Link>
          <button className="navbar-toggler" type="button" onClick={() => setNavbar(!navbar)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbar ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link href="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/features" className="nav-link">Features</Link>
              </li>
              <li className="nav-item">
                <Link href="/ourservices" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link href="/students" className="nav-link">Students</Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery" className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link href="/donation" className="nav-link text-warning fw-bold">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero text-center text-white bg-dark py-5">
        <div className="container">
          <h1 className="fw-bold">Support Our Madrasa & Help Educate the Next Generation</h1>
          <p className="lead">Your donations provide education, shelter, and a brighter future for our students.</p>
          <Link href="/donate" className="btn btn-warning btn-lg mt-3">Donate Now</Link>
        </div>
      </section>
    </header>
  );
}
