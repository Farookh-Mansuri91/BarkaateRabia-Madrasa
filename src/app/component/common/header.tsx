'use client';

import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-success text-white py-2 d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <FaPhoneAlt className="me-2" />+91 9767622650 | <FaEnvelope className="ms-3 me-2" /> info@barkaterabia.com
          </div>
          <div>
            <a href="#" className="text-white me-3"><FaFacebook size={20} /></a>
            <a href="#" className="text-white me-3"><FaInstagram size={20} /></a>
            <a href="#" className="text-white"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold text-white">
            <img src="/images/madrasa-logo.jpg" alt="Madrasa Logo" height="40" className="me-2" />
            Jamia-Tul-Banaat-Barkate-Rabia
          </Link>
          <button className="navbar-toggler" type="button" onClick={() => setNavbar(!navbar)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbar ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link href="/home" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link href="/features" className="nav-link">Features</Link></li>
              <li className="nav-item"><Link href="/courses" className="nav-link">Courses</Link></li>
              <li className="nav-item"><Link href="/donor" className="nav-link">Sadqa</Link></li>
              <li className="nav-item"><Link href="/gallery" className="nav-link">Gallery</Link></li>
              <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
              <li className="nav-item"><Link href="/donation" className="nav-link text-warning fw-bold">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
