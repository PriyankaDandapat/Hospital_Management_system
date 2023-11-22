import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Row } from "antd";
import Doctorlist from "../components/Doctorlist";

const Dashboard = () => {
  const [doctors, setDoctors] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <div className="homepage-cards ">
        <h1
          className="text-center"
          style={{
            color: "rgb(10, 91, 213)",
            paddingTop: "0.5rem",
          }}
        >
          Home Page
        </h1>
        <Row>
          {doctors &&
            doctors.map((doctor) =>
              doctor ? <Doctorlist key={doctor._id} doctor={doctor} /> : null
            )}
        </Row>
      </div>
    </Layout>
  );
};

export default Dashboard;
