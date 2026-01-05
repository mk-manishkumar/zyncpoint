"use client";

import { motion } from "motion/react";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "creative-web-development",
    icon: "🎨",
    title: "Creative Web Development",
    description: "We don't just build websites; we engineer digital experiences. From high-conversion SaaS platforms to immersive web applications, we focus on clean code, rapid performance, and intuitive UI/UX that drives user engagement.",
  },
  {
    id: "ai-solutions-integration",
    icon: "🤖",
    title: "AI Solutions & Integration",
    description: "Moving beyond the hype, we deliver practical, AI-native solutions. Whether automating workflows with LLMs, integrating predictive analytics, or building custom AI agents, we help you leverage intelligence to optimize operations.",
  },
  {
    id: "programming-consultancy",
    icon: "💡",
    title: "Programming & Development Consultancy",
    description: "Think of us as your fractional CTO or technical architects. We provide deep-dive consultancy to help companies choose the right tech stacks, audit existing codebases, and strategize for long-term scalability and security.",
  },
  {
    id: "cloud-deployment-infrastructure",
    icon: "☁️",
    title: "Cloud Deployment & Infrastructure",
    description: "Seamless infrastructure setup, deployment pipelines, and cloud architecture optimization. We ensure your applications run at peak performance with reliability, security, and cost-efficiency across all major cloud platforms.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="scroll-mt-22.5 px-6 py-24 bg-dark-secondary relative overflow-hidden">
      {/* ================= BACKGROUND FX ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute w-125 h-125 rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)", filter: "blur(120px)", top: "-10%", left: "-10%" }} animate={{ x: ["0%", "20%", "0%"], y: ["0%", "15%", "0%"] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} />

        <motion.div className="absolute w-150 h-150 rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(255,107,53,0.35) 0%, transparent 70%)", filter: "blur(140px)", bottom: "-20%", right: "-10%" }} animate={{ x: ["0%", "-15%", "0%"], y: ["0%", "-10%", "0%"] }} transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      {/* ================= HEADING ================= */}
      <motion.div className="text-center mb-20 relative z-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
        <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Our Core Services
        </motion.h2>

        <motion.p variants={cardVariants} className="text-base md:text-lg text-text-secondary max-w-150 mx-auto">
          Comprehensive solutions across the entire digital transformation spectrum
        </motion.p>
      </motion.div>

      {/* ================= SERVICES GRID ================= */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-350 mx-auto relative z-10" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
        {services.map((service) => (
          <motion.div key={service.id} variants={cardVariants} whileHover={{ y: -12, rotateX: 4, rotateY: -4 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} className="group relative bg-linear-to-br from-[rgba(50,184,198,0.08)] to-[rgba(255,107,53,0.08)] border border-[rgba(50,184,198,0.2)] rounded-xl p-12 overflow-hidden">
            {/* Gradient sweep */}
            <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-[rgba(50,184,198,0.18)] to-transparent transition-all duration-500 pointer-events-none" />

            {/* Motion shine */}
            <motion.div className="absolute inset-0 -left-full bg-linear-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent pointer-events-none" whileHover={{ left: "100%" }} transition={{ duration: 0.6, ease: "easeOut" }} />

            {/* Icon */}
            <motion.div className="text-5xl mb-6 relative z-10" whileHover={{ scale: 1.3, rotate: [0, -8, 8, 0] }} transition={{ rotate: { duration: 0.4 }, scale: { duration: 0.25 } }}>
              {service.icon}
            </motion.div>

            {/* Title */}
            <motion.h3 className="text-2xl font-semibold mb-4 text-text relative z-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p className="text-text-secondary leading-relaxed relative z-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
