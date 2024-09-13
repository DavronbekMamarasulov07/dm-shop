

import type { FormProps } from "antd";
import { Button, Typography, Form, Input, message } from "antd";
import { useSignUpMutation } from "../../../redux/api/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export type FieldType = {
  firstname?: string;
  lastname?: string;
  password?: string;
};

const SignUp = () => {
  const [SignUpRequest, { data, isSuccess }] = useSignUpMutation();
  const [form] = Form.useForm<FieldType>();
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    SignUpRequest(values);
    console.log(values);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("User created successfully");
      form.resetFields(); 
      navigate("?auth=signIn");
    }
  }, [isSuccess]);

  console.log(data)

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col items-center py-10 px-14">
      <Title level={2}>Sign Up</Title>
      <Form
        name="basic"
        layout="vertical"
        className="w-full"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Firstname"
          name="firstname"
          rules={[{ required: true, message: "Please input your firstname!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Lastname"
          name="lastname"
          rules={[{ required: true, message: "Please input your lastname!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="text-center w-full mt-10">
          <Button
            type="primary"
            size="large"
            className="!bg-[#56b280] w-full max-w-[150px] "
            htmlType="submit"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
