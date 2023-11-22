import React from "react";
import { useNavigate } from "react-router-dom";
//import { Types } from "mongoose";

import "../styles/Doctorlist.css"

const Doctorlist = ({ doctor }) => {
  const navigate = useNavigate();
  console.log(doctor._id);
  
  
  return (
    <div
      className="card m-3"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      //   onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <div className="overlay-card">
        <div className="card-header">
          <i class="fa-solid fa-user-doctor"></i>
          <b>Dr.  </b>
          {doctor.firstName} {doctor.lastName}
        </div>

        <div className="card-body">
          <p>
            <b>Specialization:</b>
            {doctor.specialization}
          </p>
        </div>
        <div className="card-body">
          <p>
            <b>Experience: </b>
            {doctor.experience}
          </p>
        </div>
        <div className="card-body">
          <p>
            <b> Fees Per Consultation:</b>
            {doctor.feesPerConsultation}
          </p>
        </div>
        <div className="card-body">
          <p>
            <b>Timings:</b>
            {doctor.timings[0]}-{doctor.timings[1]}
          </p>
        </div>
      </div>
    </div>
  );
};


export default Doctorlist;
