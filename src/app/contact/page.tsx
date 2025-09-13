"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h4>Hum se rabta karein</h4>
          <p><FaMapMarkerAlt />Pachdaura Dohriya,Bhojipura, Bareilly, India</p>
          <p><FaPhoneAlt />+91 9756622650</p>
          <p><FaEnvelope /> info@barkaterabiya.com</p>
        </div>
        <div className="col-md-6">
          <h4>Send Us a Message</h4>
          {submitted && <div className="alert alert-success">Thank you for contacting us!</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" name="message" rows={4} value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
