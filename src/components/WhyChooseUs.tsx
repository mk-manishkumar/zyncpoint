"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { WHY_CHOOSE_US_FEATURES, WHY_CHOOSE_US_SECTION, type WhyChooseUsFeature } from "../../scripts/constants";

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 });

    const currentSection = sectionRef.current;

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary rounded-full blur-[140px]" animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute -bottom-32 -left-48 w-96 h-96 bg-accent rounded-full blur-[140px]" animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: ` linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <div className="relative z-10 w-full max-w-350 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-linear-to-r from-transparent via-primary to-transparent" />
            <span className="text-xs tracking-[0.3em] text-text-secondary font-medium uppercase">{WHY_CHOOSE_US_SECTION.eyebrow}</span>
            <div className="h-px w-8 bg-linear-to-r from-transparent via-primary to-transparent" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
            {WHY_CHOOSE_US_SECTION.title.prefix} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-light to-accent">{WHY_CHOOSE_US_SECTION.title.highlight}</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            {WHY_CHOOSE_US_SECTION.description}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_FEATURES.map((feature: WhyChooseUsFeature, index: number) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: feature.delay }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)} className="group relative">
              {/* Card Background with Border Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-dark-secondary to-dark rounded-2xl" />
              <motion.div className={`absolute inset-0 bg-linear-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Animated Border */}
              <motion.div className="absolute inset-0 rounded-2xl" style={{ background: `linear-gradient(135deg, transparent 0%, ${hoveredIndex === index ? "#6366f1" : "transparent"} 50%, transparent 100%)`, padding: "1px" }} animate={{ background: hoveredIndex === index ? ["linear-gradient(0deg, transparent, #6366f1, transparent)", "linear-gradient(360deg, transparent, #6366f1, transparent)"] : "linear-gradient(135deg, transparent, transparent, transparent)" }} transition={{ duration: 2, repeat: Infinity }}>
                <div className="w-full h-full bg-dark-secondary rounded-2xl" />
              </motion.div>

              {/* Content */}
              <div className="relative p-8 lg:p-10">
                {/* Icon */}
                <motion.div className="mb-6 relative inline-block" animate={hoveredIndex === index ? { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] } : {}} transition={{ duration: 0.5 }}>
                  <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${feature.color} p-0.5`}>
                    <div className="w-full h-full bg-dark-secondary rounded-xl flex items-center justify-center">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <motion.div className={`absolute inset-0 rounded-xl bg-linear-to-br ${feature.color} blur-xl -z-10`} animate={hoveredIndex === index ? { opacity: [0, 0.5, 0] } : { opacity: 0 }} transition={{ duration: 1.5, repeat: Infinity }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-text mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-primary-light transition-all duration-300">{feature.title}</h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed group-hover:text-text transition-colors duration-300">{feature.description}</p>

                {/* Hover Indicator */}
                <motion.div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" animate={hoveredIndex === index ? { x: [0, 5, 0] } : { x: 0 }} transition={{ duration: 1, repeat: Infinity }}>
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>

                {/* Corner Accent */}
                <motion.div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" animate={hoveredIndex === index ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } : {}} transition={{ duration: 2, repeat: Infinity }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/10 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent/10 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
    </section>
  );
}
