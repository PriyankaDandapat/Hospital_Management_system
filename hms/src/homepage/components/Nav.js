// this is the navbar code

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/photos/Logo.png";
import "../../styles/Nav.css";

export const Nav = () => {
  return (
    <div>
      <nav class="navbar px-4 fixed-top">
        <a class="navbar-brand" href="/" to="/">
          <img
            src={Logo}
            alt="logo of hospital"
            width="60"
            height="50"
            class="d-inline-block align-text-top"
          ></img>
        </a>
        <div class="nav me-auto">
          <Link class="nav-link text-dark fw-bold" to="/">
            Home
          </Link>
          <Link class="nav-link text-dark fw-bold" to="/services">
            Services
          </Link>
          <Link class="nav-link text-dark fw-bold" to="/about">
            About Us
          </Link>
          <Link class="nav-link text-dark fw-bold" to="/departments">
            Departments
          </Link>
          <Link class="nav-link text-dark fw-bold" to="/contact">
            Contact
          </Link>
        </div>

        <Link className="nav-link " to="/login">
          <button to="Login" className="btn btn-primary-nav ">
            Login
          </button>
        </Link>
        <Link className="nav-link " to="/signup">
          <button className="btn btn-primary-nav ">Signup</button>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
