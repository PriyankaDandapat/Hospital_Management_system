import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

import "../styles/BookingPage.css";

// ... (imports)

const BookingPage = () => {
    //debugger;
    //console.log('Component rendered successfully!');
   
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    const [doctors, setDoctors] = useState({});
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isAvailable, setIsAvailable] = useState(false);
    const dispatch = useDispatch();
  
    // login user data
    const getUserData = async () => {
      try {
        const res = await axios.post(
          "/api/v1/doctor/getDoctorById",
          { doctorId: params.doctorId },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (res.data.success) {
          setDoctors(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    // booking func
    const handleBooking = async () => {
        try {
            setIsAvailable(true);
            if (!date || !time) {
                return alert("Date and Time Required");
            }
    
            dispatch(showLoading());
    
    
            const res = await axios.post(
                "/api/v1/user/book-appointment",
                {
                    doctorId: params.doctorId,
                    userId: user._id,
                    doctorInfo: doctors,
                    userInfo: user,
                    date: date,
                    time:time,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
    
            dispatch(hideLoading());
    
            if (res.data.success) {
                message.success(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.error(error);
        }
    };
    
      
    // handle availability
    const handleAvailability = async () => {
        try {
          if (!date || !time) {
            return alert("Date and Time Required");
          }
      
        //   console.log('Selected Date (before formatting):', date);
        //   console.log('Selected Time (before formatting):', time);
      
          dispatch(showLoading());
      
          const formattedDate = moment.utc(date, "DD-MM-YYYY").toISOString();  // Set to true for UTC
          const formattedTime = moment.utc(time, "HH:mm").toISOString();      // Set to true for UTC
      
        //   console.log('Formatted Date:', formattedDate);
        //   console.log('Formatted Time:', formattedTime);
      
          const requestData = {
            doctorId: params.doctorId,
            date: formattedDate,
            time: formattedTime,
          };
      
          // Move the set state after making the requestData object
          // This ensures that you send the original date and time in the API request
          // while still updating the state for the subsequent use in the component
          setDate(formattedDate);
          setTime(formattedTime);
      
          const res = await axios.post(
            '/api/v1/user/booking-availability',
            requestData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          );
      
          dispatch(hideLoading());
      
          if (res.data.success) {
            setIsAvailable(true);
            message.success(res.data.message);
          } else {
            message.error(res.data.message);
          }
        } catch (error) {
          dispatch(hideLoading());
          console.error(error);
        }
      };
      
  
    useEffect(() => {
      getUserData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <Layout>
        <div className="booking-container">
          <div className="header-cooking-conatiner">
            <h2 className="text-center">Booking Page</h2>
          </div>
  
          <div className="container">
            {doctors && (
              <div>
                <div className="doctor-info">
                  <div className="doctor-icon">
                    <i className="fa-solid fa-user-doctor"></i>
                  </div>
                  <div className="doctor-info-body">
                    <h4>
                      Doctor: {doctors.firstName} {doctors.lastName}
                    </h4>
                    <h5>Fees: {doctors.feesPerConsultation}</h5>
                    <h5>
                      Timings: {doctors.timings && doctors.timings[0]} -{" "}
                      {doctors.timings && doctors.timings[1]}
                    </h5>
                  </div>
                </div>
                <div className="d-flex flex-column w-1000">
                <DatePicker
                aria-required={"true"}
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) => {
                  setDate(moment(value).format("DD-MM-YYYY"));
                }}
              />
              <TimePicker
                aria-required={"true"}
                format="HH:mm"
                className="mt-3"
                onChange={(value) => {
                  setTime(moment(value).format("HH:mm"));
                }}
              />
  
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleAvailability}
                  >
                    Check Availability
                  </button>
  
                  <button className="btn btn-dark mt-2" onClick={handleBooking}>
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  };
  
  export default BookingPage;
  
