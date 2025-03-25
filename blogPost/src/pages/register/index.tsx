// src/components/Register.js
import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './register.css'
import { userService } from '../../services/userService';
import { useUser } from '../../providers/userProvider';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const {login}=useUser();
  const navigate = useNavigate();
  const onFinish = (values:any) => {
    console.log('Received values:', values);
    message.success('Registration successful!');
    userService.register(values).then((token)=>{
      login(token)
      navigate("/app/profile")
    });
  };

  return (
    <div className="flex items-center justify-center register-container">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <Form
          name="register"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Please input your name!' },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Name"
              className="shadow-md"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please input a valid email!' },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              className="shadow-md"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Password must be at least 6 characters long' },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              className="shadow-md"
            />
          </Form.Item>

         

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-900 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
            >
              Register
            </Button>
            <div>
            <span className="">
              <span>have an account ? </span>
              <Link to="/app/profile" className="underline text-blue-900">
                Login
              </Link>
            </span>
          </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
