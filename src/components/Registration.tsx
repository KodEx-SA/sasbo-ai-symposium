"use client";
import { supabase } from "../../supabaseClient";


import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    role: "",
    interests: [] as string[],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const interestOptions = [
    "AI & Development",
    "Ethics & Regulation",
    "Data & Analytics",
    "Financial Innovation",
    "Worker Protection",
    "Career Development",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const { error } = await supabase.from("registrations").insert([
    {
      full_name: formData.name,
      email: formData.email,
      organization: formData.organization,
      role: formData.role,
      interests: formData.interests,
      message: formData.message || null,
    },
  ]);

  if (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
    setIsSubmitting(false);
    return;
  }

  alert(
    "Thank you for registering! We will contact you soon with confirmation details."
  );

  setFormData({
    name: "",
    email: "",
    organization: "",
    phone: "",
    role: "",
    interests: [],
    message: "",
  });

  setIsSubmitting(false);
};


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <section
      id="register"
      className="section-container relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light-blue/10 rounded-full blur-3xl" />

      {/* Section Header */}
      <ScrollAnimation>
        <div className="text-center mb-6 relative z-10">
          <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wider">
            Secure Your Spot
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Before the Capsule <span className="gradient-text">Closes</span>
          </h2>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
          Secure your spot at the defining event that will shape South Africa's
          financial sector for years to come
        </p>
      </ScrollAnimation>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Info Cards */}
          <ScrollAnimation
            direction="left"
            delay={0.2}
            className="lg:col-span-1 space-y-6"
          >
            {/* Deadline Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-900/40 to-orange-900/20 rounded-2xl p-6 border border-red-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">
                    Registration Deadline
                  </h3>
                  <p className="text-red-400 text-sm font-semibold">
                    April 1, 2026
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Limited spots available. Register early to guarantee your
                participation.
              </p>
            </motion.div>

            {/* Event Details Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/20 rounded-2xl p-6 border border-primary-cyan/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-cyan/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Event Location</h3>
                  <p className="text-primary-cyan text-sm font-semibold">
                    Johannesburg, SA
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Exact venue details will be shared upon registration
                confirmation.
              </p>
            </motion.div>

            {/* What's Included Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-6 border border-primary-light-blue/30 backdrop-blur-sm"
            >
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                What's Included
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-primary-cyan mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Access to all symposium sessions
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-primary-cyan mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Networking opportunities
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-primary-cyan mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Workshop materials
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-primary-cyan mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Certificate of participation
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-primary-cyan mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Post-event resources
                </li>
              </ul>
            </motion.div>
          </ScrollAnimation>

          {/* Right: Registration Form */}
          <ScrollAnimation
            direction="right"
            delay={0.3}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 to-primary-light-blue/20 rounded-2xl blur-2xl" />

              <div className="relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-8 md:p-10 border border-primary-light-blue/30 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2 text-gray-300"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                          placeholder="John Doe"
                        />
                        {focusedField === "name" && (
                          <motion.div
                            layoutId="activeField"
                            className="absolute inset-0 border-2 border-primary-cyan rounded-xl pointer-events-none"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2 text-gray-300"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                          placeholder="john@example.com"
                        />
                        {focusedField === "email" && (
                          <motion.div
                            layoutId="activeField"
                            className="absolute inset-0 border-2 border-primary-cyan rounded-xl pointer-events-none"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Organization and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-semibold mb-2 text-gray-300"
                      >
                        Organization / Company *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("organization")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                          placeholder="Your organization"
                        />
                        {focusedField === "organization" && (
                          <motion.div
                            layoutId="activeField"
                            className="absolute inset-0 border-2 border-primary-cyan rounded-xl pointer-events-none"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2 text-gray-300"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                          placeholder="+27 (optional)"
                        />
                        {focusedField === "phone" && (
                          <motion.div
                            layoutId="activeField"
                            className="absolute inset-0 border-2 border-primary-cyan rounded-xl pointer-events-none"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-semibold mb-2 text-gray-300"
                    >
                      Your Role *
                    </label>
                    <div className="relative">
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("role")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 rounded-xl bg-primary-dark/50 border border-primary-light-blue/30 text-white focus:outline-none focus:border-primary-cyan transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-primary-dark">
                          Select your role
                        </option>
                        <option
                          value="union-leader"
                          className="bg-primary-dark"
                        >
                          Union Leader
                        </option>
                        <option
                          value="financial-expert"
                          className="bg-primary-dark"
                        >
                          Financial Expert
                        </option>
                        <option value="policymaker" className="bg-primary-dark">
                          Policymaker
                        </option>
                        <option
                          value="technologist"
                          className="bg-primary-dark"
                        >
                          Technologist
                        </option>
                        <option value="academic" className="bg-primary-dark">
                          Academic/Researcher
                        </option>
                        <option value="worker" className="bg-primary-dark">
                          Union Member/Worker
                        </option>
                        <option value="other" className="bg-primary-dark">
                          Other
                        </option>
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {focusedField === "role" && (
                        <motion.div
                          layoutId="activeField"
                          className="absolute inset-0 border-2 border-primary-cyan rounded-xl pointer-events-none"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interestOptions.map((interest) => (
                        <motion.button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 rounded-xl text-sm font-medium transition-all ${
                            formData.interests.includes(interest)
                              ? "bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white border-2 border-primary-cyan"
                              : "bg-primary-dark/50 text-gray-400 border border-primary-light-blue/30 hover:border-primary-cyan/50"
                          }`}
                        >
                          {interest}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2 text-gray-300"
                    >
                      Why do you want to attend? (Optional)
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 rounded-xl bg-primary-dark/50 border border-primary-light-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors resize-none"
                        placeholder="Share your motivations and expectations..."
                      />
                      {focusedField === "message" && (
                        <motion.div
                          layoutId="activeField"
                          className="absolute inset-0 border-2 border-primary-cyan rounded-xl pointer-events-none"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl shadow-primary-cyan/30 transition-all flex items-center justify-center gap-3 ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:shadow-2xl hover:shadow-primary-cyan/50"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Processing...
                        </>
                      ) : (
                        <>
                          Register for Symposium
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </>
                      )}
                    </motion.button>

                    {/* Privacy Notice */}
                    <p className="text-center text-xs text-gray-500 mt-4">
                      By registering, you agree to receive event updates and
                      communications from Sasbo. We respect your privacy and
                      will never share your information.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Bottom Stats */}
      <ScrollAnimation delay={0.5}>
        <div className="max-w-4xl mx-auto mt-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Expected Attendees" },
              { number: "20+", label: "Expert Speakers" },
              { number: "2", label: "Days of Learning" },
              { number: "∞", label: "Networking Opportunities" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-primary-light-blue/20 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
