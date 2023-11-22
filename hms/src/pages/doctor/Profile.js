import Layout from "./../../components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import moment from "moment";
import "../../styles/ApplyDoctor.css";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  // Update doc ==========
  
  // Handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());

        // Ensure that timings are valid dates before formatting
      const formattedTimings = values.timings.map((timing) => {
        return moment.isMoment(timing) ? timing.format("HH:mm") : timing;
      });

      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        {
          ...values,
          userId: user._id,
          timings: formattedTimings,
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
        navigate("/");
      } else {
        message.error(res.data.message);
      }

    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
    console.log(values);
  };

  // Get doctor details
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
  }, []);

  return (
    <Layout>
      <h1>Profile</h1>
      {doctor && (
        <div className="applydrform">
          <Form
            onFinish={handleFinish}
            className="m-3"
            initialValues={{
              ...doctor,
                timings: [
                  moment(doctor.timings[0], "HH:mm"),
                  moment(doctor.timings[1], "HH:mm"),
                ],
            }}
          >
            <div className="FormDr">
              <h2 className="title text-center">Manage Profile</h2>
              <h6 className="subtitle text-center">Personal Details</h6>
              <Row gutter={20}>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="First Name:"
                    name="firstName"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Last Name:"
                    name="lastName"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>{" "}
                </Col>
              </Row>
              <Row gutter={20}>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Phone:"
                    name="phone"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Email:"
                    name="email"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Website:"
                    name="website"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Address:"
                    name="address"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <h6 className="subtitle text-center">Professional Details</h6>
              <Row gutter={20}>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Specialization:"
                    name="specialization"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Experience:"
                    name="experience"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Fees Per Consultation:"
                    name="feesPerConsultation"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                <Form.Item
    label="Your work Timings:"
    name="timings"
    required
    rules={[{ required: true }]}
  >
    <TimePicker.RangePicker
      format="HH:mm"
      onChange={(values) => {
        // Handle the selected time range and set it in the form
        form.setFieldsValue({ timings: values });
      }}
    />
  </Form.Item>
                </Col>
              </Row>
              <div className="d-flex justify-content-center align-items-center text-center">
                <button className="btn-submit" type="submit">
                  Update
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
