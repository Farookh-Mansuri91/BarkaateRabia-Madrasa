"use client";

import { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./gallery.module.css";

const galleryImages = [
  "/images/gallery/madrasa-student-4.jpeg",
  "/images/gallery/madrasa-student-13.jpeg",
  "/images/gallery/madrasa-student-8.jpeg",
  "/images/gallery/madrasa-student-5.jpeg",
  "/images/gallery/madrasa-student-6.jpeg",
  "/images/gallery/madrasa-student-7.jpeg",
  "/images/gallery/madrasa-student-9.jpeg",
 
  "/images/gallery/madrasa-student-11.jpeg",
  "/images/gallery/madrasa-student-12.jpeg",
  "/images/gallery/madrasa-student-2.jpeg",
   "/images/gallery/madrasa-stduent-new.jpeg",
    "/images/gallery/madrasa-stduent-new2.jpeg"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold text-success mb-4">Gallery</h1>
      <p className="text-center text-muted mb-4">
      Hamare madrasa ke haseen lamhat is khubsurat gallery ke zariye daryaft karein.
      </p>

      <div className="row g-3">
        {galleryImages.map((src, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className={styles.imageContainer} onClick={() => setSelectedImage(src)}>
              <Image src={src} alt={`Gallery Image ${index + 1}`} width={400} height={300} className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent}>
            <Image src={selectedImage} alt="Enlarged Image" width={800} height={600} className="img-fluid rounded" />
          </div>
        </div>
      )}
    </div>
  );
}
