import React from "react";
import "../../styles/Services.css";
import HosImg from "../../assets/photos/services/Service-Hospital.webp";
import Nav from "../components/Nav";
import { CopyrightFooter } from "./Signup_logindecor";

export default function Services() {
  return (
    <div>
      <Nav />
      <div className="About-image-container">
        <div className="About-overlay-text">
          <h1>Leading Integrated Healthcare Services Provider in India</h1>
        </div>
      </div>

      <div className="About-Section">
        <div className="content-section">
          <h3>Specialities & Services</h3>
          <p>
            Our comprehensive range of specialized services is designed to meet
            the diverse healthcare needs of our patients. From advanced medical
            treatments to personalized care plans, we strive to deliver
            excellence in every aspect. Our team of skilled professionals is
            dedicated to providing top-notch services that prioritize your
            well-being.
          </p>
        </div>
      </div>
      <div className="clear-after-floats list-container">
        <ul className="List">
          <li>Bloodless surgery and medicine</li>
          <li>Cancer care</li>
          <li>Cosmetic Lounge</li>
          <li>Emergency room</li>
          <li>Endoscopy</li>
          <li>Heart care services</li>
        </ul>
        {/* Second Unordered List */}
        <ul className="List">
          <li>Intensive Care Unit</li>
          <li>Neonatal Intensive Care Unit</li>
          <li>Nutrition counseling</li>
          <li>Orthopedics</li>
          <li>Stroke care</li>
          <li>Skilled nursing facility</li>
        </ul>
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="right">
            <div className="corousel-section">
              <h3>Seating Serenity: A Space for Your Well-Being</h3>
              <p>
                Welcome to our modern and comfortable hospital facility. Our
                spacious and well-designed seating areas are crafted to provide
                a welcoming environment for our patients and their families.
                Whether you're awaiting a consultation, treatment, or
                accompanying a loved one, our thoughtfully arranged seating
                ensures a relaxing and supportive atmosphere.
              </p>
              {/* Add more lines as needed */}
            </div>
          </div>
          <div className="left">
            <img src={HosImg} alt="" />
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  );
}
