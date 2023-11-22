import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Col,
  Form,
  Row,
  Input,
  TimePicker,
  RangePicker,
  message,
  Steps,
} from "antd";
import "../styles/ApplyDoctor.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import moment from "moment";
//import { BugTwoTone, LoginOutlined } from "@ant-design/icons";

const ApplyDoctor = () => {

  const { user } = useSelector((state) => state.user);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [details, setDetails] = useState(null);
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
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
      message.error("Somthing Went Wrong ");
    }
  };


  return (
    <Layout>
      <div className="body_whole ">
        <div className="container-drform">
          <div className="applydrform">
            <Form onFinish={handleFinish} className="m-3">
              <div className="FormDr">
                <h6 className="subtitle text-center">Personal Details</h6>
                <Row gutter={20}>
                  <Col xs={24} lg={8}>
                    <Form.Item
                      label="First Name:"
                      name="firstName"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text"></Input>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={8}>
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
                  <Col xs={24} lg={8}>
                    <Form.Item
                      label="Phone:"
                      name="phone"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text"></Input>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={8}>
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
                  <Col xs={24} lg={8}>
                    <Form.Item
                      label="Website:"
                      name="website"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text"></Input>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={8}>
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
                  <Col xs={24} lg={8}>
                    <Form.Item
                      label="Specialization:"
                      name="specialization"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text"></Input>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={8}>
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
                  <Col xs={24} lg={8}>
                    <Form.Item
                      label="Fees Per Consultation:"
                      name="feesPerConsultation"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text"></Input>
                    </Form.Item>
                  </Col>
                  <Col xs={24}  lg={8}>
                
                <Form.Item
                  label="Your work Timings:"
                  name="timings"
                  required
                  rules={[{ required: true }]}
                >
                  <TimePicker.RangePicker />
                </Form.Item>
              </Col>
                </Row>

                <div className="d-flex justify-content-center">
                  <button className="btn-submit" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyDoctor;
