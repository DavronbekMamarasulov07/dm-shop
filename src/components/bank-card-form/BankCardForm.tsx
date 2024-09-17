import { Input, Button, Form, message } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import "./BankCardForm.css"
import { CardFormValues } from "../../types";
import useSearchParamsHook from "../../hooks/UseQueryParams";
import { useNavigate } from "react-router-dom";



const BankCardForm = ({total }: {total: number}) => {
  const [form] = Form.useForm<CardFormValues>();
  const {removeParam} = useSearchParamsHook();
  const navigate = useNavigate();

  const handleSubmit = (values: CardFormValues) => {
    if (values.cardNumber.length !== 16) {
      message.error("The card number must consist of 16 digits");
      return;
    }
    if (values.expiryDate.length !== 5) {
      message.error("Shelf life should be in MM / YY format");
      return;
    }
    if (values.cvv.length !== 3) {
      message.error("CVV should consist of 3 digits");
      return;
    }

    message.success("Payment was made successfully");

    form.resetFields();
    removeParam("modal");

    navigate("/");
    localStorage.removeItem("cart");

  };

  return (
    <div className="bank-card-content">
      <div className="modal-title text-2xl font-semibold mb-5 text-green-700">
        <CreditCardOutlined /> Bank Card
      </div>
      <Form<CardFormValues>
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          name="cardNumber"
          rules={[
            { required: true, message: "Please, enter your card number" },
          ]}
        >
          <Input
            placeholder="1234 5678 9012 3456"
            maxLength={16}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              form.setFieldsValue({ cardNumber: value });
            }}
          />
        </Form.Item>
        <Form.Item
          name="cardHolder"
          rules={[
            {
              required: true,
              message: "Please, enter the name on the card",
            },
          ]}
        >
          <Input
            placeholder="John Doe"
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              form.setFieldsValue({ cardHolder: value });
            }}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="expiryDate"
            rules={[
              {
                required: true,
                message: "Please, enter the expiration date",
              },
            ]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input
              placeholder="MM/YY"
              maxLength={5}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 2) {
                  value = value.slice(0, 2) + "/" + value.slice(2);
                }
                form.setFieldsValue({ expiryDate: value });
              }}
            />
          </Form.Item>
          <Form.Item
            name="cvv"
            rules={[{ required: true, message: "Please, enter the CVV" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input
              placeholder="CVV"
              maxLength={3}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                form.setFieldsValue({ cvv: value });
              }}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <div className="mt-5 w-full flex justify-between items-center">
            <h3 className="text-xl font-bold ">
              Total: <span className="text-green-700">${total}</span>
            </h3>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full max-w-[200px] text-xl !py-5"
            >
              Pay
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BankCardForm;
