import React from "react";
import HospImg from "../../assets/photos/home/second-carousal.jpg";
import DocImg from "../../assets/photos/home/third-carousal.630";
import First from "../../assets/photos/home/samplebg.jpeg";
import "../../styles/Home.css";
// import { CopyrightFooter } from "../components/Signup_logindecor.js";
import B1 from "../../assets/photos/home/b1.jpg";
import B2 from "../../assets/photos/home/b2.jpeg";
import B3 from "../../assets/photos/home/b3.jpg";
import B4 from "../../assets/photos/home/b4.jpg";
import B5 from "../../assets/photos/home/b5.jpeg";
import B6 from "../../assets/photos/home/b6.jpg";
import Nav from "../components/Nav";
import { CopyrightFooter } from "./Signup_logindecor";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="content-container">
        <div className="overlay-home">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
            style={{
              width: "100%",
              height: "40rem",
              padding: "0",
              margin: "0",
            }}
          >
            <div class="carousel-inner">
              <div class="carousel-item active ">
                <img src={First} class="d-block w-100" alt="carousel" />
              </div>
              <div class="carousel-item">
                <img src={HospImg} class="d-block w-100" alt="carousel" />
              </div>
              <div class="carousel-item">
                <img src={DocImg} class="d-block w-100" alt="carousel" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <img src={bgImage} alt="background" className="bg-iamge" /> */}
        {/* For content over the image */}
        <div className="overlay-text">
          <h1>Pristyn Hospital</h1>
          <h4>Your Health Is Our Priority</h4>
          <p>
            At our healthcare center, we prioritize your health above all else.
          </p>
        </div>
      </div>
      <div className="home-content">
        <h2>Why choose us?</h2>
        <div className="home-content-subgroup">
          <div className="home-content-card">
            <img
              src={B1}
              alt="image here"
              style={{
                width: "15rem",
                height: "10rem",
                marginBottom: "1.5rem",
                border: "0.3rem solid white",
              }}
            ></img>
            <h3>Exceptional Medical Expertise</h3>
            <p>
              Your hospital boasts a team of highly skilled and experienced
              healthcare professionals across various specialties, ensuring
              top-notch medical care and expertise.
            </p>
          </div>
          <div className="home-content-card">
            <img
              src={B2}
              alt="image here"
              style={{
                width: "15rem",
                height: "10rem",
                marginBottom: "1.5rem",
                border: "0.3rem solid white",
              }}
            ></img>
            <h3>Cutting-Edge Technology</h3>
            <p>
              {" "}
              Embracing the latest advancements in medical technology and
              equipment, your hospital provides state-of-the-art facilities for
              accurate diagnoses and innovative treatments.
            </p>
          </div>
          <div className="home-content-card">
            <img
              src={B3}
              alt="image here"
              style={{
                width: "15rem",
                height: "10rem",
                marginBottom: "1.5rem",
                border: "0.3rem solid white",
              }}
            ></img>
            <h3>Patient-Centric Approach</h3>
            <p>
              Focused on patient well-being, your hospital prioritizes
              personalized care, empathy, and a compassionate approach, ensuring
              that patients feel valued and supported throughout their
              healthcare journey.
            </p>
          </div>
        </div>
        <div className="home-content-subgroup">
          <div className="home-content-card">
            <img
              src={B4}
              alt="image here"
              style={{
                width: "15rem",
                height: "10rem",
                marginBottom: "1.5rem",
                border: "0.3rem solid white",
              }}
            ></img>
            <h3>Comprehensive Services</h3>
            <p>
              Offering a wide range of medical services and specialties under
              one roof, your hospital provides comprehensive healthcare
              solutions, reducing the need for multiple referrals or transfers.
            </p>
          </div>
          <div className="home-content-card">
            <img
              src={B5}
              alt="image here"
              style={{
                width: "15rem",
                height: "10rem",
                marginBottom: "1.5rem",
                border: "0.3rem solid white",
              }}
            ></img>
            <h3>Commitment to Community Health</h3>
            <p>
              Actively involved in community health initiatives, your hospital
              contributes to the overall well-being of the community through
              educational programs, health screenings, and outreach efforts.
            </p>
          </div>
          <div className="home-content-card">
            <img
              src={B6}
              alt="image here"
              style={{
                width: "15rem",
                height: "10rem",
                marginBottom: "1.5rem",
                border: "0.3rem solid white",
              }}
            ></img>
            <h3>Focus on Innovation and Research</h3>
            <p>
              Engaging in research and fostering innovation in healthcare
              practices, your hospital constantly strives to improve treatment
              methods and outcomes, ensuring patients benefit from the latest
              developments in medicine.
            </p>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  );
};
export default Home;
