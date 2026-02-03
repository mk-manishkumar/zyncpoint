"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { toast, Bounce } from "react-toastify";

const CTASection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) throw new Error("Submission failed");

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      if (process.env.NODE_ENV === "development") console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div className="absolute top-1/4 -right-64 w-125 h-125 bg-primary rounded-full blur-[160px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", }} />
        <motion.div className="absolute bottom-1/4 -left-64 w-125 h-125 bg-accent rounded-full blur-[160px]"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.5, 0.3], }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", }} />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <div className="relative z-10 w-full max-w-350 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-linear-to-r from-transparent via-primary to-transparent" />
            <span className="text-xs tracking-[0.3em] text-text-secondary font-medium uppercase">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-linear-to-r from-transparent via-primary to-transparent" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-light to-accent"> Zync Your Vision?</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Tell us about your project and we&apos;ll get back within 24 hours.
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative bg-linear-to-br from-dark-secondary to-dark rounded-3xl p-8 md:p-12 border border-primary/20 overflow-hidden">
            {/* Form Glow Effect */}
            <motion.div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5" animate={{ opacity: [0.3, 0.5, 0.3], }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

            {/* Form Content */}
            <div className="relative z-10 space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-text">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl bg-dark px-5 py-4 text-text border border-text-secondary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-text-secondary/50" placeholder="Enter your full name" />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-text">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl bg-dark px-5 py-4 text-text border border-text-secondary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-text-secondary/50" placeholder="Enter your email" />
                </motion.div>
              </div>

              {/* Phone & Company Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-text">Phone Number
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-xl bg-dark px-5 py-4 text-text border border-text-secondary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-text-secondary/50" placeholder="Enter your phone number" />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9 }}>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-text">Company / Brand</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full rounded-xl bg-dark px-5 py-4 text-text border border-text-secondary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-text-secondary/50" placeholder="Enter your company name" />
                </motion.div>
              </div>

              {/* Project Type */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.0 }}>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-text">Project Type
                </label>
                <select name="projectType" value={form.projectType} onChange={handleChange} className="w-full rounded-xl bg-dark px-5 py-4 text-text border border-text-secondary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 cursor-pointer">
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="saas">SaaS Platform</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.1 }}>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text">Project Details <span className="text-accent">*</span>
                </label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6} className="w-full rounded-xl bg-dark px-5 py-4 text-text border border-text-secondary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all duration-300 placeholder:text-text-secondary/50" placeholder="Tell us about your project, goals, and timeline..." />
              </motion.div>

              {/* Submit Button */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.2 }} className="flex flex-col items-center gap-4 pt-4">
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group relative px-12 py-4 bg-linear-to-r from-primary to-accent text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                  <motion.div className="absolute inset-0 bg-linear-to-r from-primary-dark to-primary" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <p className="text-sm text-text-secondary">
                  We typically respond within 24 hours.
                </p>
              </motion.div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-accent/10 to-transparent rounded-tr-full" />
          </form>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div className="absolute top-20 right-20 w-24 h-24 border-2 border-primary/10 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-accent/10 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
    </section>
  );
};

export default CTASection;