"use client";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* About Madrasa */}
          <div className="col-md-4">
            <h5 className="fw-bold">About Us</h5>
            <p>
            Hamara madrasa sirf ladkiyon ke liye hai, jahan hum Islami aqdar ke saath behtareen taleem faraham karte hain. Hum ek mehfooz aur poshtpan mahol dete hain jahan betiyan deeni aur duniyavi taleem hasil kar sakein. Hamara maqsad unki akhlaqi tarbiyat aur roshan mustaqbil ke liye tayyari karna hai.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/about" className="text-white">About Us</Link></li>
              <li><Link href="/features" className="text-white">Our Features</Link></li>
              <li><Link href="/gallery" className="text-white">Gallery</Link></li>
              <li><Link href="/donation" className="text-white">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p><FaMapMarkerAlt className="me-2" /> Pachdaura Dohriya,Bhojipura, Bareilly, India</p>
            <p><FaPhoneAlt className="me-2" /> +91 9767622650</p>
            <p><FaEnvelope className="me-2" /> info@barkaaterabiya.com</p>
            <div>
              <a href="#" className="text-white me-3"><FaFacebook size={20} /></a>
              <a href="#" className="text-white me-3"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Jamia-Tul-Banaat-Barkaate-Rabiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
