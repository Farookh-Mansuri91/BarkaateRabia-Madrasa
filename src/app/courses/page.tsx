"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center text-white bg-dark py-5">
        <div className="container">
          <h1 className="fw-bold">Hamare Courses</h1>
          <p className="lead">Hamare jami' Islami aur jadeed taleemi programs daryaft karein.</p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">Islamic Courses</h2>
        <div className="row g-4">
          {[
            { title: "Nazra", duration: "1 Year", description: "Quran parhna seekhein sahih Tajweed aur Talafuz ke saath." },
            { title: "Qariya", duration: "2 Years", description: "Quran ki Tilawat aur Hifz ke jadeed tareeqe." },
            { title: "Alima", duration: "4 Years", description: "Hadees, Tafseer, Fiqh aur Arabi zuban ka gehrai se mutala." },
            { title: "Fazila", duration: "6 Years", description: "Aala Islami taleem, talaba ko ilmi kirdar ke liye tayar karna" },
          ].map((course, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card shadow h-100 text-center p-3 border-0 course-tile">
                <div className="card-body">
                  <h4 className="fw-bold text-success">{course.title}</h4>
                  <p className="text-muted">Muddat: {course.duration}</p>
                  <p>{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admission & Testimonials */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Dakhla ka tareeqa kar</h2>
          <p className="text-center">Shamooliyat mein dilchaspi hai? In marahil par amal karein.</p>
          <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: "600px" }}>
            <li className="list-group-item">1. Online darkhwast form pur karein.</li>
            <li className="list-group-item">2. Dakhla test mein shirkat karein.</li>
            <li className="list-group-item">3. Rehnumai ke liye hamari dakhla team se mulaqat karein.</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center py-5 bg-success text-white">
        <h2 className="fw-bold">Hamare Talibaat kya kehte hain</h2>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>“Alima course ne mere Islam ke fahm ko mukammal tor par badal diya. Alima ilm wali aur mu'awin hain.”</p>
                <footer className="blockquote-footer text-white">Farheen Noori.</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>“Maine Qariya course mukammal kiya aur ab naujawan talaba ko Tajweed sikhati hoon. Waqai yeh ek zindagi badal dene wala tajurba hai!”</p>
                <footer className="blockquote-footer text-white">Tabassum Fatima</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-dark text-white">
        <h2 className="fw-bold">Aaj hi dakhla lein!</h2>
        <p>Islami taleem aur roshni ki taraf pehla qadam barhain.</p>
        <Link href="/contact" className="btn btn-warning btn-lg">Abhi darkhwast dein</Link>
      </section>

      <style jsx>{`
        .course-tile {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .course-tile:hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
