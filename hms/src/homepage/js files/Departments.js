import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Department.css";
import Carousel1 from "../../assets/photos/carousels/Carousel1.png";
import Carousel2 from "../../assets/photos/carousels/Carousel2.png";
import Carousel3 from "../../assets/photos/carousels/Carousel3.png";
import Surgery from "../../assets/photos/departments/Surgery.webp";
import Medicines from "../../assets/photos/departments/Medicines.webp";
import Diabetes from "../../assets/photos/departments/Diabetes.jpg";
import Critical from "../../assets/photos/departments/Critical.jpg";
import Cardiology from "../../assets/photos/departments/Cardiology.jpg";
import Bloodbank from "../../assets/photos/departments/Bloodbank.jpg";
import { CopyrightFooter } from "./Signup_logindecor";
import Nav from "../components/Nav.js";

const Departments = () => {
  return (
    <>
      <Nav />
      <div className="department-wholepage">
        {/* carousel waala part */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide overflow-hidden bg-dark"
          data-bs-ride="carousel"
          style={{ width: "100%", height: "39rem", padding: "0", margin: "0" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img
                src={Carousel1}
                className="d-block w-100"
                alt="..."
                style={{
                  width: "100%",
                  height: "39rem",
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    color: "white",
                    fontSize: "4rem",
                    fontWeight: "bold",
                  }}
                >
                  Departments
                </h5>
                <p
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  "Discover excellence in care and expertise - welcome to our
                  Hospital's Department Page, where cutting-edge advancements
                  and compassionate care converge to serve your health needs."
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={Carousel2}
                className="d-block w-100"
                alt="..."
                style={{
                  width: "100%",
                  height: "39rem",
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    color: "white",
                    fontSize: "4rem",
                    fontWeight: "bold",
                  }}
                >
                  Departments
                </h5>
                <p
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  "Discover excellence in care and expertise - welcome to our
                  Hospital's Department Page, where cutting-edge advancements
                  and compassionate care converge to serve your health needs."
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={Carousel3}
                className="d-block w-100"
                alt="..."
                style={{
                  width: "100%",
                  height: "39rem",
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    color: "white",
                    fontSize: "4rem",
                    fontWeight: "bold",
                  }}
                >
                  Departments
                </h5>
                <p
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  "Discover excellence in care and expertise - welcome to our
                  Hospital's Department Page, where cutting-edge advancements
                  and compassionate care converge to serve your health needs."
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* carousel part ends */}

        <div className="department-content">
          <div className="department-content-header">
            <h2>How can we help you at Pristyn ?</h2>
            <p>
              Welcome to our hospital, where excellence in healthcare converges
              with specialized expertise across various departments. Each
              department is committed to delivering exceptional care, employing
              cutting-edge technology, and fostering a patient-centric approach.
              Here's an overview of our key departments:
            </p>
          </div>
          <div className="department-content-body">
            <div className="department-content-cards">
              <div className="department-content-cards-img">
                <img src={Medicines} alt="surgery image here"></img>
              </div>
              <div className="department-content-cards-body">
                <h3>General Medicine Department</h3>
                <p>
                  The department provides the quality diagnosis, prevention &
                  treatment of advance diseases. It has a wide pool of patients
                  from West Bengal and its surrounding North Eastern and Eastern
                  parts of the country. Our Physicians are qualified to deal
                  with a host of problems a patient presents with no matter how
                  simple or complex they may be.
                </p>
              </div>
            </div>
            <div className="department-content-cards">
              <div className="department-content-cards-body">
                <h3>General Surgery Department</h3>
                <p>
                  General Surgery is a concept which has ably withstood the
                  onslaught of compartmentalization since it provides the
                  necessary bridge between different sub-specialties of surgery.
                  The department deals with a wide range of surgical problems of
                  Stomach, Intestine, Colon, Liver, Gall bladder and mainly
                  other abdominal organs. Whenever possible, the latest
                  non-invasive and minimally invasive techniques are utilized.
                  For problems that cannot be treated with these methods,
                  traditional open operative methods are used. It also provides
                  a multi -disciplinary approach to the management of complex
                  gastrointestinal problems with input from gastroenterologists,
                  radiologists and pathologists, as well as the surgeons in this
                  Department.
                </p>
              </div>
              <div className="department-content-cards-img">
                <img src={Surgery} alt="surgery image here"></img>
              </div>
            </div>
            <div className="department-content-cards">
              <div className="department-content-cards-img">
                <img src={Cardiology} alt="surgery image here"></img>
              </div>
              <div className="department-content-cards-body">
                <h3>Cardiology Department</h3>
                <p>
                  An excellent team of dedicated cardiologists, cardiothoracic
                  surgeons, anaesthetists, perfusionists, nursing and other
                  paramedical staff make cardiac care complete and affordable at
                  Peerless Hospital. We have dedicated cath lab, modular
                  operation theatres, 30 bedded modular ICCU, ITU, 6 bedded CTVS
                  ITU, cardiac step down ward to ensure safe treatment and
                  finally ambulances for comfortable transportation.
                </p>
              </div>
            </div>
            <div className="department-content-cards ">
              <div className="department-content-cards-body">
                <h3>Critical Care Medicine Department</h3>
                <p>
                  The department is led by two full-time critical care
                  consultants and highly experienced team of resident
                  doctors.All the beds are connected with 6 channel bed side
                  monitors A central monitoring system is always connected with
                  all the beds which contains multi-parameter recording
                  facilities Invasive (most advanced ventilator with advanced
                  modalities) and non-invasive ventilator facilities round the
                  clock for every patient In house facilities for haemodialysis,
                  peritoneal dialysis and plasmapheresis Advanced haemodynamic
                  monitoring system (PICO), etc. facilities are available.
                </p>
              </div>
              <div className="department-content-cards-img">
                <img src={Critical} alt="surgery image here"></img>
              </div>
            </div>
            <div className="department-content-cards">
              <div className="department-content-cards-img">
                <img src={Diabetes} alt="surgery image here"></img>
              </div>
              <div className="department-content-cards-body">
                <h3>Diabetology & Endocrinology Department</h3>
                <p>
                  The department of Diabetology & Endocrinology aims to provide
                  the best possible patient care by incorporating the latest
                  therapeutic advances for the prevention and management of
                  Diabetes. In this area of clinical science, our services
                  include diagnosis, treatment and follow-up. Apart from
                  regulating medication (e.g. insulin) dosage and timing, we are
                  equipped with excellent facility to deal with the potential
                  consequences of diabetes, e.g. retinopathy, nephropathy and
                  peripheral neuropathy, strokes & heart attack and many other
                  associated diseases.
                </p>
              </div>
            </div>
            <div className="department-content-cards">
              <div className="department-content-cards-body">
                <h3>Laboratory and Blood Bank Department</h3>
                <p>
                  The hospital has a fully computerized NABL accredited
                  laboratory with the highest quality standards in patient care.
                  The lab. houses Biochemistry, Microbiology, Infectious Disease
                  Serology & Immunology, Molecular Testing, Clinical Pathology &
                  Hematology, Histopathology & Cytopathology units equipped with
                  state-of-the-art equipment and supervised by experienced &
                  competent Consultants and Executives. Stringent quality
                  control measures are implemented in all the sections of the
                  lab., including participation in external quality assurance
                  schemes conducted by CAP/ NABL approved/ accredited
                  international/ national organizations.
                </p>
              </div>
              <div className="department-content-cards-img">
                <img src={Bloodbank} alt="surgery image here"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </>
  );
};

export default Departments;
