import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/Logo.png"; // Import the path to your logo
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      dispatch(hideLoading());

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login successful");
        navigate("/dashboard");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      message.error("Something went wrong");
    }
  };

  return (
    <div className="wholepage_login">
      <div className="overlay-whole">
        <div className="form-img-container">
          <div className="side-image">
            <div className="overlay">
              <img src={Logo} alt="logo here"></img>
              <h3>Pristyn Hospital</h3>
              <p>
                "At HealthFirst, we strive for excellence in every aspect of
                your journey to wellness, offering a comforting environment
                where expertise meets empathy."
              </p>
            </div>
          </div>
          <div className="form-body">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinishHandler}
            >
              <h2>Login</h2>
              <Form.Item label="UserName" name="email">
                <Input
                  prefix={
                    <UserOutlined className="site-form-item-icon inputs" />
                  }
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item label="Password " name="password">
                <Input
                  prefix={
                    <LockOutlined className="site-form-item-icon inputs" />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <Link to="/register">register now!</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
