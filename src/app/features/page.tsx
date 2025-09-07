"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center text-white bg-dark py-5">
        <div className="container">
          <h1 className="fw-bold">Taleem ke zariye bachiyon ko ba-ikhtiyar banana</h1>
          <p className="lead">
          Hamara madrasa Islami aur jadeed taleem ka imtizaj faraham karta hai taake bachiyon ko roshan mustaqbil ke liye tayar kiya ja sake.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">Hamara madrasa kyun muntakhib karein?</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="/images/gallery/madrasa-student-4.jpeg" alt="Education" className="img-fluid mb-3 rounded shadow" />
            <h4>Islami aur jadeed taleem</h4>
            <p>Hum Islami taleemat aur jadeed mazameen ke sath ek mutawazan nisab faraham karte hain.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="/images/gallery/madrasa-student-6.jpeg" alt="Scholarship" className="img-fluid mb-3 rounded shadow" />
            <h4>Maali Muawinat</h4>
            <p>Hum mustahiq talaba ke liye maali muawinat faraham karte hain.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="/images/gallery/madrasa-student-12.jpeg" alt="Safe Environment" className="img-fluid mb-3 rounded shadow" />
            <h4>Mahfooz taleemi mahol</h4>
            <p>Larkiyon ke liye ek mahfooz, dostana aur munazzam mahol jahan woh aitmad ke sath taleem hasil kar sakein.</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Hamare Courses</h2>
          <div className="row">
            <div className="col-md-6">
              <h4 className="fw-bold">Islamic Courses</h4>
              <ul>
                <li><strong>Nazra:</strong> Learning to read the Quran with proper tajweed.</li>
                <li><strong>Qariya:</strong> Advanced Quran recitation and tajweed.</li>
                <li><strong>Alima:</strong> Comprehensive Islamic studies covering Hadith, Fiqh, and Tafsir.</li>
                <li><strong>Fazila:</strong> Higher-level Islamic education focusing on scholarly teachings.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Modern Subjects</h4>
              <ul>
                <li>Hindi & English Language</li>
                <li>Science & Mathematics</li>
                <li>Computer Basics</li>
                <li>Social Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-success text-white">
        <h2 className="fw-bold">Hamare saath roshan mustaqbil banane mein shareek hon.</h2>
        <p>Aaj hi dakhla lein aur hama-jihat taleem ki taraf pehla qadam barhain.</p>
        <Link href="/contact" className="btn btn-light btn-lg">Get in Touch</Link>
      </section>
    </>
  );
}
