import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../Component/Divider";
import { LoginUser } from "../../apicall/users";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetLoader } from "../../redux/loaderSlice";
import store from "../../redux/store";
import { Provider } from "react-redux";
import axios from "axios";

const rules = [
  {
    required: true,
    message: "Field required",
  },
];

function Login() {
  const redirectUser = useNavigate();
  const loaderDispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      loaderDispatch(SetLoader(true));
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/login",
        values
      );
      loaderDispatch(SetLoader(false));

      if (response.status === 200) {
        message.success("Login successful");
        localStorage.setItem("token", response.data);
        redirectUser("/");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error(error);
      loaderDispatch(SetLoader(false));
      message.error("Login unsuccessful");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      redirectUser("/");
    }
  }, [redirectUser]);

  return (
    <Provider store={store}>
      <div className="h-screen bg-primary flex justify-center items-center">
        <div className="bg-white p-4 rounded w-[475px]">
          <h1 className="text-primary py-4 text-center">
            Administration <span className="text-orange-500"></span>
            <br />
            Login Page
          </h1>
          <Divider />

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={rules}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={rules}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block className="mt-3">
              Login
            </Button>
            <div className="mt-5 text-center">
              <span className="text-orange-700">
                Don’t have an account?{" "}
                <Link className="text-primary" to="/signup">
                  Signup
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </Provider>
  );
}

export default Login;
