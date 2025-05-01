"use client";

import type React from "react";

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Information
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Get in touch with the temple administration for inquiries about
            visits, special pujas, or any other information.
          </p>
        </div>

        <div className="grid grid-cols-0 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6">
                Temple Contact Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone Numbers</h4>
                    <p className="text-gray-700">
                      Temple Office: +91-9422714413
                    </p>
                    <p className="text-gray-700">
                      Visitor Information: +91-9422714413
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-700">akshayvaidya5004@gmail.com</p>
                    {/* <p className="text-gray-700">
                      admin@grishneshwartemple.org
                    </p> */}
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Office Hours</h4>
                    <p className="text-gray-700">
                      Monday to Saturday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-700">Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-gray-700">
                      Grishneshwar Temple Trust,
                      <br />
                      Verul, Ellora,
                      <br />
                      Aurangabad District,
                      <br />
                      Maharashtra, India - 431102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Important Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  For special puja arrangements, please contact the temple
                  office at least 3 days in advance.
                </li>
                <li>
                  Photography is restricted in certain areas of the temple.
                </li>
                <li>
                  Dress modestly when visiting the temple as a mark of respect.
                </li>
                <li>
                  The temple gets crowded during weekends and festivals, so plan
                  accordingly.
                </li>
              </ul>
            </div> */}
          </div>
          {/* TODO: include this in next version */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Important Information
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    For special puja arrangements, please contact the temple
                    office at least 3 days in advance.
                  </li>
                  <li>
                    Photography is restricted in certain areas of the temple.
                  </li>
                  <li>
                    Dress modestly when visiting the temple as a mark of
                    respect.
                  </li>
                  <li>
                    The temple gets crowded during weekends and festivals, so
                    plan accordingly.
                  </li>
                </ul>
              </div>
              {/* <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
