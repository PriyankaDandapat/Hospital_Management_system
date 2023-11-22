import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Logo from "../assets/Logo.png"; // Import the path to your logo
import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post('/api/v1/user/register', values);
      dispatch(hideLoading());

      if (res.data.success) {
        message.success("Registered successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      message.error("Something went wrong");
    }
  }

  return (
    <div className="wholepage_signup">
      <div className="overlay-whole">
        <div className="form-img-container">
          <div className="side-image-signup">
            <div className="overlay-signup">
              <img src={Logo} alt="logo here" />
              <h3>Pristyn Hospital</h3>
              <p>
                "At HealthFirst, we strive for excellence in every aspect of
                your journey to wellness, offering a comforting environment
                where expertise meets empathy. "
              </p>
            </div>
          </div>

          <div className="signupform">
            <Form
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinishHandler}
              className="signup-form"
            >
              <h2>SignUp</h2>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input email!" }]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
              >
                <Input type="password" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit-signup"
              >
                <h5>Sign Up</h5>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
