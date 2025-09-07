// pages/index.js
"use client";
import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  return (
    <>
    <div>
      {/* Hero Section */}
      <section className="hero text-center text-white bg-dark py-5">
        <div className="container">
          <h1 className="fw-bold">Khush Aamdeed Hamare Islami Madrasa Mein</h1>
          <h2 className="lead">"Taleem hasil karna har Musalman mard aur aurat par farz hai." – Hazrat Muhammad ﷺ</h2>
          <p className="lead">Roshan mustaqbil ke liye Islami aqdar ke saath behtareen taleem faraham karna.</p>
          <Link href="/donation" className="btn btn-warning btn-lg mt-3">Hamara saath dein</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">Hamari Khususiyaat</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="/images/masjid2.jpeg" alt="Education" className="img-fluid mb-3" />
            <h4>Umda Taleem</h4>
            <p>Humare madrasa mein hum Islami aqdar ke saath behtareen taleem faraham karte hain. Hamara maqsad sirf kitaabi ilm nahi, balki betiyon ki akhlaqi tarbiyat aur hunar ko bhi barhawa dena hai. Hum ek mehfooz aur roshni bhara mustaqbil banane ke liye taleem ko behtareen tareeqe se pesh karte hain.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="/images/masjid1.png" alt="Spiritual Growth" className="img-fluid mb-3" />
            <h4>Roohani Taraqqi</h4>
            <p>Hamara madrasa sirf taleem ka markaz nahi, balki roohani taraqqi ka safar bhi hai. Hum betiyon ke dilon mein iman, taqwa aur islami akhlaq ki roshni jagate hain.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="/images/gallery/madrasa-student-4.jpeg" alt="Support" className="img-fluid mb-3" />
            <h4>Awami Ta'awon</h4>
            <p>Hum apne talab-e-ilm ke liye ek mu'awin mahol yaqeeni banate hain taaki woh taraqqi kar sakein.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Hamara Saath Dein</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="/images/madrasa-student-4.jpeg" alt="Student 1" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-4">
              <img src="/images/madrasa-student-2.jpeg" alt="Student 1" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-4">
              <img src="/images/madrasa-student-12.jpeg" alt="Student 3" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-4">
              <img src="/images/madrasa-student-6.jpeg" alt="Student 2" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-4">
              <img src="/images/madrasa-student-7.jpeg" alt="Student 3" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-4">
              <img src="/images/madrasa-student-9.jpeg" alt="Student 3" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-success text-white">
        <h2 className="fw-bold">Hamara saath dein aur qaum ki betiyon ko taleem hasil karne mein madad karein!</h2>
        <p>Aapki madad se hum apne talib-e-ilm ko behtareen taleem aur dekhbhaal faraham kar sakte hain.</p>
        <Link href="/donation" className="btn btn-light btn-lg">Donate Now</Link>
      </section>
    </div>
    </>
  );
}
