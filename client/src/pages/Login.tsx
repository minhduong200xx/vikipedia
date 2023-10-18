import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
const Login = () => {
  const [human, setHuman] = useState(false);
  const handleSubmit = (values: unknown) => {
    console.log(values);
  };
  const checkToken = (token: string | null) => {
    token ? setHuman(true) : setHuman(false);
  };
  return (
    <div className="mx-auto w-96 h-[500px]">
      <h2 className="font-bold text-xl p-3">Đăng nhập</h2>
      <Form
        name="login"
        className="bg-slate-100 p-10 rounded-lg flex flex-col gap-2"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tên đăng nhập"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <ReCAPTCHA
          className=""
          sitekey="6LdVipMoAAAAAKI2EvA4ks0wZsmOa5rkeba3XlI8"
          onChange={checkToken}
        />
        <Form.Item>
          <Button
            htmlType="submit"
            disabled={!human}
            className="shadow-md mx-2 bg-slate-100"
          >
            Đăng nhập
          </Button>
          Hoặc{" "}
          <Link to={"/register"} className="font-bold">
            Đăng ký!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
