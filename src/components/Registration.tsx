"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for registering! We will contact you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="register" className="section-container">
      {/* Section Title */}
      <ScrollAnimation>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Before the Capsule Closes
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Secure your spot at the defining event that will shape South Africa's
          financial sector for years to come
        </p>
      </ScrollAnimation>

      {/* Registration Form */}
      <ScrollAnimation delay={0.2}>
        <div className="max-w-3xl mx-auto bg-blue-900/30 rounded-2xl p-8 md:p-12 border border-primary-light-blue/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email - Two columns on desktop */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Organization */}
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                Organization / Company *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                placeholder="Your organization"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                Why do you want to attend? (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors resize-none"
                placeholder="Tell us about your interest in the symposium..."
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Register Now
              </button>

              <button
                type="button"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
              >
                Learn More
              </button>
            </div>

            {/* Deadline note */}
            <p className="text-center text-sm text-gray-400 mt-4">
              Registration closes on{" "}
              <span className="text-primary-cyan font-semibold">
                1 April 2026
              </span>
            </p>
          </form>
        </div>
      </ScrollAnimation>
    </section>
  );
}
