import type { FormProps } from "antd";
import { Button, Typography, Form, Input, message } from "antd";
const { Title } = Typography;
import { useSignInMutation } from "../../../redux/api/authApi";
import { signIn } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { useEffect } from "react";
import { openAuth } from "../../../redux/slices/modalSlice";
import useSearchParamsHook from "../../../hooks/UseQueryParams";

export type FieldType = {
  username?: string;
  password?: string;
};



const SignIn = () => {
  const [form] = Form.useForm<FieldType>();
  const [signInRequest, { data, isSuccess }] = useSignInMutation();
  const { removeParam} = useSearchParamsHook()
  const dispatch = useDispatch<AppDispatch>();

  


  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signInRequest(values);
    console.log(values);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Sign in successfully");
      dispatch(signIn({ token: data.token }));
      form.resetFields();
      removeParam('auth')
      dispatch(openAuth(false));
    }
  }, [isSuccess]);

  console.log(data);

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col items-center py-10 px-14">
      <Title level={2}>Sign In</Title>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        className="w-full"
        initialValues={{ username: "emilys", password: "emilyspass" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="emilys" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="emilyspass" />
        </Form.Item>

        <Form.Item className="text-center w-full mt-10">
          <Button
            type="primary"
            size="large"
            className="!bg-[#56b280] w-full max-w-[150px] "
            htmlType="submit"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
