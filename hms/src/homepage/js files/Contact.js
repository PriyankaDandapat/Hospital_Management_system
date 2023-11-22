import React from "react";
import Nav from "../components/Nav.js";
import "../../styles/Contact.css";
import Logo from "../../assets/photos/Logo.png";
import { Link } from "react-router-dom";
import { CopyrightFooter } from "../js files/Signup_logindecor.js";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-header-overlay ">
            <img src={Logo} alt="logo here"></img>Contact Information
          </div>
        </div>
        <h2>Contact us </h2>
        <div className="contact-info">
          <div className="contact-phone-email">
            <div className="contact-first">
              <div className="contact-first-icon">
                <i class="fa-solid fa-phone-volume"></i>
              </div>
              <div className="contact-first-content">
                <h4>Phone Number </h4>
                <span>+91 8786890023</span>
              </div>
            </div>
            <div className="contact-first">
              <div className="contact-first-icon">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div className="contact-first-content">
                <h4>Email Addresss </h4>
                <span>pristynhospital123@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="contact-socialmedia">
            <div className="contact-second">
              <a href="https://twitter.com/login?lang=en">
                <div className="contact-second-icon">
                  <i class="fa-brands fa-square-twitter"></i>
                </div>
                <div className="contact-second-content">
                  {" "}
                  <h4>Pristyn Hospital</h4>
                </div>
              </a>
            </div>
            <div className="contact-second">
              <a href="https://www.instagram.com/accounts/login/">
                <div className="contact-second-icon">
                  <i class="fa-brands fa-square-instagram"></i>
                </div>
                <div className="contact-second-content">
                  {" "}
                  <h4>Pristyn_Hospital</h4>
                </div>
              </a>
            </div>
            <div className="contact-second">
              <a href="https://www.facebook.com/">
                <div className="contact-second-icon">
                  <i class="fa-brands fa-square-facebook"></i>
                </div>
                <div className="contact-second-content">
                  {" "}
                  <h4>Pristyn Hospital</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
        <h2>Locate us at</h2>
        <div className="contact-location-info">
          <div className="contact-location-info-content">
            <h4>
              We are located in the eastern periphery of the city of Kolkata Bus
            </h4>

            <p>
              360, Panchasayar Rd, Sahid Smirity Colony, Pancha Sayar, Kolkata,
              West Bengal 700094
            </p>
            <h4> Train / Metro </h4>
            <p>2 mins drive from Kavi Subhas Metro Rail Station</p>
            <p>2 mins drive from New Garia Railway Station </p>
            <p>5 mins drive from Baghajatin Railway Station</p>
          </div>
          <div className="contact-location-info-api">
            <iframe
              width="500"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=%20hospital,%20New%20York,%20United%20States+(Lenox%20Hill%20Hospital)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">Population mapping</a>
            </iframe>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </>
  );
};

export default Contact;
