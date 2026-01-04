"use client";

import { useState } from "react";

const CTASection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="scroll-mt-22.5 px-6 py-20 bg-linear-to-br from-[rgba(50,184,198,0.1)] to-[rgba(255,107,53,0.1)] border-t border-b border-[rgba(50,184,198,0.2)]">
      <div className="max-w-175 mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text">Ready to Zync Your Vision?</h2>
          <p className="text-base md:text-lg text-text-secondary">Tell us about your project and we&apos;ll get back within 24 hours.</p>
        </div>

        {/* Form */}
        <form className="bg-dark-secondary border border-[rgba(50,184,198,0.2)] rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm mb-[8px] text-text-secondary">
                Full Name <span className="text-accent">*</span>
              </label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className="w-full rounded-[10px] bg-dark px-4 py-3.5 scroll-py-3.5 text-text placeholder:text-text-secondary/60 border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-[8px] text-text-secondary">
                Email Address <span className="text-accent">*</span>
              </label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required className="w-full rounded-[10px] bg-dark px-[16px] py-3.5 text-text placeholder:text-text-secondary/60 border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary" />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm mb-[8px] text-text-secondary">
                Phone Number <span className="text-text-secondary/60">(optional)</span>
              </label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full rounded-[10px] bg-dark px-[16px] py-3.5 text-text placeholder:text-text-secondary/60 border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary" />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm mb-[8px] text-text-secondary">
                Company / Brand
              </label>
              <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="ZyncPoint" className="w-full rounded-[10px] bg-dark px-[16px] py-3.5 text-text placeholder:text-text-secondary/60 border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary" />
            </div>

            {/* Project Type */}
            <div className="md:col-span-2">
              <label htmlFor="project-type" className="block text-sm mb-[8px] text-text-secondary">
                Project Type
              </label>
              <select name="projectType" value={form.projectType} onChange={handleChange} className="w-full rounded-[10px] bg-dark px-[16px] py-3.5 text-text border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary">
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="saas">SaaS Platform</option>
                <option value="ai-integration">AI Integration</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm mb-[8px] text-text-secondary">
                Project Details <span className="text-accent">*</span>
              </label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your goals, timeline, and expectations..." rows={5} required className="w-full rounded-[10px] bg-dark px-[16px] py-3.5 text-text placeholder:text-text-secondary/60 border border-[rgba(50,184,198,0.2)] focus:outline-none focus:border-primary resize-none" />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="inline-flex items-center justify-center bg-primary text-white px-3 py-2 rounded-full font-semibold hover:bg-primary-light hover:-translate-y-0.5 cursor-pointer transition-all duration-300">
              Send Message
            </button>

            <p className="mt-[16px] text-sm text-text-secondary">We typically respond within 24 hours.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
