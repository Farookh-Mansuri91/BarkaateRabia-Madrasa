"use client";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Correct import for QRCodeSVG
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./donate.module.css"; // Custom CSS (if any)

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(event.target.value);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="text-center text-white bg-dark py-5">
        <div className="container">
          <h1 className="fw-bold">Hamare Islami Madrasa ki himayat karein</h1>
          <p className="lead">
          Aapka atiyah hamare talba ko taleem,kitabein,rehne ki sahulat aur dusri madad faraham karne mein madad karta hai.
          </p>
        </div>
      </section>

      {/* Donation Information */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Aapka atiyah kaise madad karta hai?</h2>
            <p>
            Aapka atiyah barah-e-raast hamare madrasa ke talaba ko taleemi mawaad, ustadon, aur zaroori madadi khidmaat faraham karne mein madad deta hai. Yeh dekhein ke aapka atiyah kaise farq paida karta hai:
            </p>
            <ul>
              <li>Nasaabi kitabein aur taleemi waseelay faraham karta hai</li>
              <li>Ustadon aur amlay ki tankhwaon mein madad karta hai</li>
              <li>Talaba ki dastaar mein madad karta hai (khana, transport, waghera)</li>
            </ul>
            <p><b>Aap ki himayat hamare mission ke liye intehai zaroori hai.</b></p>
          </div>

          {/* QR Code Section */}
          <div className="col-md-6 text-center">
            <h2 className="fw-bold mb-4">Donate with QR Code</h2>
            <QRCodeSVG
              value="upi://pay?pa=9756622650@ybl&pn=mohd%20nazim%20raza&mc=0000&mode=02&purpose=00" // Replace with your payment gateway link
              size={256}
              className="mx-auto"
            />
             <h4 className="fw-bold mb-4">Mohammad Nazim Raza</h4>
             <p className="mt-3" style={{ color: "green",fontWeight: "bold" }}>
  Is QR code ko scan karein taake aap apni pasandeeda adaigi ke tareeqe se barah-e-raast atiyah kar sakein.
</p> </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Donate Online</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Donation Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                value={donationAmount}
                onChange={handleAmountChange}
                placeholder="Enter your donation amount"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="paymentMethod" className="form-label">
                Select Payment Method
              </label>
              <select
                className="form-select"
                id="paymentMethod"
                required
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success btn-lg w-100">
              Donate Now
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-5 bg-success text-white">
        <h2 className="fw-bold">Har atiyah tabdili lata hai.</h2>
        <p>Aap ki sakhawat zindagiyan badalne aur hamare talaba ke mustaqbil ko ba-ikhtiyar banane mein madad deti hai.</p>
      </section>
    </>
  );
}
