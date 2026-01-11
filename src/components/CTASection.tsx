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
    <section className="scroll-mt-22.5 px-6 py-20 bg-linear-to-br from-[rgba(50,184,198,0.1)] to-[rgba(255,107,53,0.1)] border-t border-b border-[rgba(50,184,198,0.2)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div className="absolute w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", filter: "blur(80px)", top: "5%", right: "10%" }} animate={{ x: ["0vw", "-15vw", "0vw"], y: ["0vh", "10vh", "0vh"], scale: [1, 1.2, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />

        <motion.div className="absolute w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)", filter: "blur(70px)", bottom: "10%", left: "5%" }} animate={{ x: ["0vw", "10vw", "0vw"], y: ["0vh", "-8vh", "0vh"], scale: [1, 1.15, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      </div>

      <div className="max-w-175 mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}>
            Ready to Zync Your Vision?
          </motion.h2>
          <motion.p className="text-base md:text-lg text-text-secondary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
            Tell us about your project and we&apos;ll get back within 24 hours.
          </motion.p>
        </div>

        <motion.form onSubmit={handleSubmit} className="bg-dark-secondary border border-[rgba(50,184,198,0.2)] rounded-2xl p-8 md:p-12 shadow-lg" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <label htmlFor="name" className="block text-sm mb-2 text-text-secondary">
                Full Name <span className="text-accent">*</span>
              </label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full rounded-[10px] bg-dark px-4 py-3.5 text-text border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary transition-colors duration-300" placeholder="Enter your full name" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              <label htmlFor="email" className="block text-sm mb-2 text-text-secondary">
                Email Address <span className="text-accent">*</span>
              </label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-[10px] bg-dark px-4 py-3.5 text-text border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary transition-colors duration-300" placeholder="Enter your email" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
              <label htmlFor="phone" className="block text-sm mb-2 text-text-secondary">
                Phone Number
              </label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-[10px] bg-dark px-4 py-3.5 text-text border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary transition-colors duration-300" placeholder="Enter your phone number" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
              <label htmlFor="company" className="block text-sm mb-2 text-text-secondary">
                Company / Brand
              </label>
              <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full rounded-[10px] bg-dark px-4 py-3.5 text-text border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary transition-colors duration-300" placeholder="Enter your company or brand name" />
            </motion.div>

            <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
              <label htmlFor="projectType" className="block text-sm mb-2 text-text-secondary">
                Project Type
              </label>
              <select name="projectType" value={form.projectType} onChange={handleChange} className="w-full rounded-[10px] bg-dark px-4 py-3.5 text-text border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary transition-colors duration-300">
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="saas">SaaS Platform</option>
                <option value="ai-integration">AI Integration</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9 }}>
              <label htmlFor="message" className="block text-sm mb-2 text-text-secondary">
                Project Details <span className="text-accent">*</span>
              </label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full rounded-[10px] bg-dark px-4 py-3.5 text-text border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary resize-none transition-colors duration-300" placeholder="Enter your proposal" />
            </motion.div>
          </div>

          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1 }}>
            <motion.button type="submit" disabled={isSubmitting} className="cursor-pointer inline-flex items-center justify-center bg-primary text-white px-3 py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            <p className="mt-4 text-sm text-text-secondary">We typically respond within 24 hours.</p>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default CTASection;
