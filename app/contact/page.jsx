"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "chndrsh25@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "New Chandigarh, Mohali, INDIA, 140901"
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (submissionSuccess) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide the alert after 3 seconds
      setSubmissionSuccess(false);
    }
  }, [submissionSuccess]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    // Custom validation logic
    if (!form.firstname.value || !form.lastname.value || !form.email.value || !form.phone.value || !form.message.value) {
      alert("All fields are required.");
      return;
    }

    // Phone number validation: must be exactly 10 digits long
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(form.phone.value)) {
      alert("Phone number must be exactly 10 digits long.");
      return;
    }
      console.log(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT)

    // Submit the form using Formspree
    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value,
      }),
    });

    if (response.ok) {
      setFormState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });
      setSubmissionSuccess(true);
    } else {
      alert("There was an error submitting your form. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {showAlert && (
              <div className="alert alert-success mb-6 p-4 rounded-md bg-green-500 text-white text-center">
                Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s connect :)</h3>
              <p className="text-white/60">I&apos;m just a message away.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" id="firstname" name="firstname" placeholder="Firstname" value={formState.firstname} onChange={handleInputChange} required />
                <Input type="text" id="lastname" name="lastname" placeholder="Lastname" value={formState.lastname} onChange={handleInputChange} required />
                <Input type="email" id="email" name="email" placeholder="Email address" value={formState.email} onChange={handleInputChange} required />
                <Input type="tel" id="phone" name="phone" placeholder="Phone number" value={formState.phone} onChange={handleInputChange} maxLength="10" required />
              </div>
              <Textarea
                id="message"
                name="message"
                className="h-[100px]"
                placeholder="Type your message here."
                value={formState.message}
                onChange={handleInputChange}
                required
              />
              {/* btn */}
              <Button type="submit" size="md-2" className="max-w-40">Send </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
