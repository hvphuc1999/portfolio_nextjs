"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import axios from "axios";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { cn } from "@/lib/utils";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 357 766 241",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hoangvanphuc16@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Binh Chanh District, Ho Chi Minh City",
  },
];

interface IContactValue {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (
    values: IContactValue,
    { resetForm }: { resetForm: () => void }
  ) => {
    await axios.post("/api/contact", { ...values });
    setIsSubmitted(true);
    resetForm();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, errors, touched, isSubmitting }) => (
                <Form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                  <h3 className="text-4xl text-accent">
                    Let&apos;s work together
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="firstName"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        className={cn("w-full", {
                          "border border-red-500":
                            errors.firstName && touched.firstName,
                        })}
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="text-sm text-red-500 mt-2 ml-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        name="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        className={cn("w-full", {
                          "border border-red-500":
                            errors.lastName && touched.lastName,
                        })}
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="text-sm text-red-500 mt-2 ml-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        name="email"
                        placeholder="Email Address"
                        value={values.email}
                        onChange={handleChange}
                        className={cn("w-full", {
                          "border border-red-500":
                            errors.email && touched.email,
                        })}
                      />
                      {errors.email && touched.email && (
                        <p className="text-sm text-red-500 mt-2 ml-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        className={cn("w-full", {
                          "border border-red-500":
                            errors.phone && touched.phone,
                        })}
                      />
                      {errors.phone && touched.phone && (
                        <p className="text-sm text-red-500 mt-2 ml-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Type your message here"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      className={cn("w-full h-[200px]", {
                        "border border-red-500":
                          errors.message && touched.message,
                      })}
                    />
                    {errors.message && touched.message && (
                      <p className="text-sm text-red-500 mt-2 ml-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  {isSubmitted && (
                    <div className="text-green-500">
                      Your message has been sent successfully. I will get back
                      to you soon.
                    </div>
                  )}
                  <Button
                    size="md"
                    className="max-w-40"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting ? "Send message" : "Sending..."}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
