"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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

const FORMSPREE_FORM_ID = 'xkgnnyww';

const Contact = () => {
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formState.phone)) {
      setStatus({
        type: 'error',
        message: 'Phone number must be exactly 10 digits.'
      });
      return false;
    }

    const emptyFields = Object.entries(formState).filter(([_, value]) => !value.trim());
    if (emptyFields.length > 0) {
      setStatus({
        type: 'error',
        message: 'All fields are required.'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Form submission failed');
      }

      setFormState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {status.message && (
              <div 
                className={`mb-6 p-4 rounded-lg text-white text-center ${
                  status.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s connect :)</h3>
              <p className="text-white/60">I&apos;m just a message away.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={formState.firstname}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="bg-[#1F1F23]"
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  value={formState.lastname}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="bg-[#1F1F23]"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formState.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="bg-[#1F1F23]"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formState.phone}
                  onChange={handleInputChange}
                  maxLength="10"
                  disabled={isSubmitting}
                  className="bg-[#1F1F23]"
                />
              </div>
              
              <Textarea
                name="message"
                placeholder="Type your message here."
                value={formState.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="h-[100px] bg-[#1F1F23]"
              />
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="max-w-40"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
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
};

export default Contact;