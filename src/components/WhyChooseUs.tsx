"use client";

import { motion } from "motion/react";

interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

const whyItems: WhyItem[] = [
  { icon: "⚡", title: "Performance-Driven", description: "Speed, efficiency, and optimization at every level" },
  { icon: "🔒", title: "Security First", description: "Enterprise-grade security practices and compliance" },
  { icon: "🤝", title: "Collaborative Approach", description: "Partners in your success, not just vendors" },
  { icon: "📈", title: "Proven Results", description: "Measurable impact on business growth and ROI" },
  { icon: "🔬", title: "Innovation-Focused", description: "Always at the forefront of technology" },
  { icon: "🎯", title: "Precision Execution", description: "Meticulous attention to every detail" },
];

const WhyChoose = () => {
  return (
    <section className="scroll-mt-22.5 px-6 py-16 bg-dark-secondary relative overflow-hidden">
      {/* Background Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div className="absolute w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", filter: "blur(60px)", top: "10%", left: "5%" }} animate={{ x: ["0vw", "15vw", "5vw", "0vw"], y: ["0vh", "10vh", "5vh", "0vh"], scale: [1, 1.1, 1.05, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />

        <motion.div className="absolute w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)", filter: "blur(70px)", bottom: "10%", right: "10%" }} animate={{ x: ["0vw", "-10vw", "-5vw", "0vw"], y: ["0vh", "-8vh", "-4vh", "0vh"], scale: [1, 1.15, 1.08, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-text" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}>
          Why Choose ZyncPoint
        </motion.h2>

        <motion.p className="text-base md:text-lg text-text-secondary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
          Key advantages that set us apart
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {whyItems.map((item, index) => (
          <motion.div key={item.title} className="text-center group" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}>
            <motion.div className="text-6xl mb-4 inline-block" whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }} transition={{ rotate: { duration: 0.5 }, scale: { duration: 0.2 } }}>
              {item.icon}
            </motion.div>

            <motion.h3 className="text-xl font-semibold mb-4 text-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}>
              {item.title}
            </motion.h3>

            <motion.p className="text-text-secondary leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}>
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
