"use client";
import { Button, Form, Input, Modal, message } from "antd";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const { TextArea } = Input;

const ContactForm = ({ isOpen, setIsOpen }) => {
  const [loading, setLoading] = useState(false);

  const emailPattern =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const mobilePattern = /^[6-9]\d{9}$/;

  const inputClass =
    "rounded-lg text-black bg-white/90 h-11 border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30";

  const onFinish = async (values) => {
     try {
      setLoading(true)
      await emailjs.send(
        "service_0ep68ge",
        "template_0l6tzvs",
        {
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          description: values.description,
        },
        "XkLDKO5TjXJYYEBF9"
      );

      message.success("Thanks for contacting us! Email sent 📩");
      setIsOpen(false);
    } catch (error) {
      message.error("Failed to send email. Try again.");
    }finally{
      setLoading(false)
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
      centered
      className="contact-modal"
    >
      <div className=" rounded-xl">
        <h2 className="text-white text-2xl font-semibold mb-2">
          Contact Us
        </h2>
        <p className="text-gray-300 text-sm mb-6">
          Fill the form and we’ll get back to you shortly
        </p>

        <Form layout="vertical" onFinish={onFinish}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="name"
              label={<span className="text-white">Name</span>}
              rules={[{ required: true, message: "Please enter name" }]}
            >
              <Input placeholder="John Doe" className={inputClass} />
            </Form.Item>

            <Form.Item
              name="email"
              label={<span className="text-white">Email</span>}
              rules={[
                { required: true, message: "Please enter email" },
                { pattern: emailPattern, message: "Enter valid email" },
              ]}
            >
              <Input placeholder="john@email.com" className={inputClass} />
            </Form.Item>

            <Form.Item
              name="mobile"
              label={<span className="text-white">Mobile</span>}
              rules={[
                { required: true, message: "Please enter mobile" },
                { pattern: mobilePattern, message: "Enter valid mobile" },
              ]}
            >
              <Input
                maxLength={10}
                placeholder="9876543210"
                className={inputClass}
              />
            </Form.Item>

           
          </div>
           <Form.Item
              name="description"
              label={<span className="text-white">Message</span>}
              rules={[{ required: true, message: "Please enter message" }]}
            >
              <TextArea
                rows={2}
                placeholder="Tell us about your requirement..."
                className="rounded-lg"
              />
            </Form.Item>

          <div className="flex justify-end mt-4">
            <Button
            style={{background:"#1d55a9",color:"white"}}
              htmlType="submit"
              loading={loading}
              className="bg-primary text-white px-6 h-11 rounded-lg border-none"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ContactForm;
