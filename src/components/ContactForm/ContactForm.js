"use client";
import { Button, Form, Input, Modal, message } from "antd";

const ContactForm = ({ isOpen, setIsOpen }) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regular expression for email format
  const mobilePattern = /^[6-9]\d{9}$/; // Regular expression for valid mobile number format
  const inputClass =
    "rounded-none text-black bg-gray-200 h-12 focus:bg-gray-200 hover:bg-gray-200 border-none focus:border-none outline-none focus:outline-none";
  return (
    <Modal
      closeIcon={<p className="text-white">X</p>}
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
    >
      <Form onFinish={()=>{
        message.success("Thanks For Contacting Us.")
        setIsOpen(false)
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 place-items-center gap-x-4 gap-y-0 md:gap-y-4">
          <Form.Item className="w-full"
            name={"name"}
            rules={[{ required: true, message: "Please enter name" }]}
            label={<p className="p-0 text-white font-semibold">Name</p>}
            labelCol={{ span: 24 }}
          >
            <Input maxLength={25} className={inputClass} placeholder="Enter Name" />
          </Form.Item>
          <Form.Item className="w-full"
            name={"email"}
            rules={[
              { required: true, message: "Please enter email" },
              { pattern: emailPattern, message: "Enter valid email" },
            ]}
            label={<p className="p-0 text-white font-semibold">Email</p>}
            labelCol={{ span: 24 }}
          >
            <Input className={inputClass} placeholder="Enter Name" />
          </Form.Item>{" "}
          <Form.Item className="w-full"
            name={"mobile"}
            rules={[
              { required: true, message: "Please enter mobile" },
              { pattern: mobilePattern, message: "Enter valid mobile" },
            ]}
            label={<p className="p-0 text-white font-semibold">Mobile</p>}
            labelCol={{ span: 24 }}
          >
            <Input maxLength={10} className={inputClass} placeholder="Enter Name" />
          </Form.Item>{" "}
          <Form.Item className="w-full"
            name={"description"}
            rules={[{ required: true, message: "Please enter description" }]}
            label={<p className="p-0 text-white font-semibold">Description</p>}
            labelCol={{ span: 24 }}
          >
            <Input className={inputClass} placeholder="Enter Name" />
          </Form.Item>
        </div>
        <div className="flex justify-end items-center">
          <Form.Item>
            <Button
              htmlType="submit"
              className="bg-primary text-white rounded-none border-none focus:border-none hover:bg-primary h-10 w-24"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default ContactForm;
