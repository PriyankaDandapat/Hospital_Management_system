import "../../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/photos/Logo.png";
import CentriImg from "../../assets/photos/About/Patient Centricity2.svg";
import IntegImg from "../../assets/photos/About/Integrity2.svg";
import TeamImg from "../../assets/photos/About/Team Work2.svg";
import OwnImg from "../../assets/photos/About/Ownership2.svg";
import Final from "../../assets/photos/finalbg2.png";
import Carousel3 from "../../assets/photos/carousels/Carousel3.png";
import SmileDr from "../../assets/photos/services/About-3600x1200-centered.webp";
import { CopyrightFooter } from "./Signup_logindecor";
import Nav from "../components/Nav";

function About() {
  return (
    <>
      <Nav />
      <div className="about-wholepg">
        <section className="about" id="about">
          {/* <h1 className='heading'> <span>About</span>us</h1> */}
          <div className="about-row">
            <div className="image">
              <img src={Logo} alt=""></img>
            </div>
            <div className="content">
              <h2>About Us</h2>
              <h3>Multiple Ways One Vision</h3>
              <p>
                At our core, we are driven by a shared vision that guides us
                through multiple avenues to provide exceptional healthcare. Our
                journey is defined by a commitment to excellence, compassion,
                and innovation. Each team member contributes to a collective
                vision where patient care is at the forefront.
              </p>
              <p>
                Discover the essence of our mission as we strive to make a
                positive impact on the lives of those we serve. Welcome to a
                healthcare experience where your health and comfort are our top
                priorities
              </p>
            </div>
          </div>
        </section>
        <div className="About-img d-flex justify-content-center align-items-center">
          <img
            src={Final}
            alt="logo here"
            className="m-4 "
            style={{
              width: "25rem",
              height: "18rem",
              border: "1px solid grey",
              boxShadow: "0.2rem 0.2rem 0.2rem grey",
            }}
          ></img>
          <img
            src={Carousel3}
            alt="logo here"
            className="m-4 "
            style={{
              width: "25rem",
              height: "18rem",
              border: "1px solid grey",
              boxShadow: "0.2rem 0.2rem 0.2rem grey",
            }}
          ></img>
          <img
            src={SmileDr}
            alt="logo here"
            className="m-4 "
            style={{
              width: "25rem",
              height: "18rem",
              border: "1px solid grey",
              boxShadow: "0.2rem 0.2rem 0.2rem grey",
            }}
          ></img>
        </div>

        {/* Bach k */}

        <div className="parent-parent-container">
          <div className="values">
            <h3 class="heading2">Our Values</h3>
          </div>
          <div className="Parent-Container">
            <div className="Child">
              <span class="value-icon">
                {" "}
                <img src={CentriImg} alt="Icon" />
                <span class="value-heading">Patient Centricity</span>
              </span>
              <div className="points">
                <ul>
                  <li>
                    Commit to ‘best outcomes and experience’ for our patients
                  </li>
                  <li>
                    Treat patients and their caregivers with compassion, care
                  </li>
                  <li>Our patients’ needs will come first</li>
                </ul>
              </div>
            </div>
            <div className="Child">
              <span class="value-icon">
                {" "}
                <img src={IntegImg} alt="Icon" />
                <span class="value-heading">Integrity</span>
              </span>
              <div className="points">
                <ul>
                  <li>Be principled, open and honest</li>
                  <li>Model and live our ‘Values’</li>
                  <li>
                    Demonstrate moral courage to speak up and do the right
                    things
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Part */}
          <div className="Parent-Container">
            <div className="Child">
              <span class="value-icon">
                {" "}
                <img src={TeamImg} alt="Icon" />
                <span class="value-heading">Teamwork</span>
              </span>
              <div className="points">
                <ul>
                  <li>
                    Proactively support each other and operate as one team
                  </li>
                  <li>Respect and value people at all levels with different</li>
                  <li>
                    Demonstrate moral courage to speak up and do the right
                  </li>
                </ul>
              </div>
            </div>
            <div className="Child">
              <span class="value-icon">
                {" "}
                <img src={OwnImg} alt="Icon" />
                <span class="value-heading">Ownership</span>
              </span>
              <div className="points">
                <ul>
                  <li>Be responsible and take pride in our actions</li>
                  <li>Take initiative and go beyond the call of duty</li>
                  <li>Deliver commitment and agreement made.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </>
  );
}

export default About;
