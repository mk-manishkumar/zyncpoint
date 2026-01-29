"use client";

import { motion, useScroll, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { SERVICES, HERO_CONTENT, INTRO_CONTENT, WHY_CHOOSE_US, CTA_CONTENT, ARSENAL_SECTION, type Service, type Feature } from "../../scripts/constants";

// Service card component
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }} className="service-card relative mb-32 md:mb-48">
      {/* Service number */}
      <div className="absolute -top-8 left-0 md:-left-16">
        <motion.span initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }} className="text-8xl md:text-[12rem] font-bold text-white/5 leading-none">
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </div>

      {/* Content container */}
      <div className="relative z-10 grid md:grid-cols-12 gap-8 md:gap-12">
        {/* Left column - Title and hook */}
        <div className="md:col-span-5">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{service.name}</h3>
            <div className="w-20 h-1 bg-accent mb-8"></div>
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">{service.hook}</p>
          </motion.div>
        </div>

        {/* Right column - Details */}
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }} className="space-y-8">
            {/* Problem */}
            <div className="border-l-2 border-primary pl-6">
              <h4 className="text-sm uppercase tracking-widest text-primary mb-3 font-semibold">The Problem</h4>
              <p className="text-text-secondary leading-relaxed">{service.problem}</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">What You Get</h4>
              {service.features.map((feature: Feature, idx: number) => (
                <motion.div key={feature.title} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }} transition={{ duration: 0.6, delay: index * 0.2 + 0.6 + idx * 0.1 }} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{feature.title}</h5>
                    <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefit callout */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }} className="bg-linear-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <p className="text-lg leading-relaxed">
                <span className="text-accent font-semibold">Bottom line:</span> {service.benefit}
              </p>
            </motion.div>

            {/* Testimonial if exists */}
            {service.testimonial && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: index * 0.2 + 1 }} className="relative pl-6 border-l-2 border-accent italic text-text-secondary">
                <p className="mb-2">&ldquo;{service.testimonial.quote}&rdquo;</p>
                <p className="text-sm not-italic text-text-secondary/70">{service.testimonial.author}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative bg-dark overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Progress indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary origin-left z-50" style={{ scaleX: scrollYProgress }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-4 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm uppercase tracking-widest text-primary font-semibold">{HERO_CONTENT.eyebrow}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {HERO_CONTENT.title.line1}
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary">{HERO_CONTENT.title.line2}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={HERO_CONTENT.cta.primary.href} className="px-8 py-4 bg-linear-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              {HERO_CONTENT.cta.primary.text}
            </a>
            <a href={HERO_CONTENT.cta.secondary.href} className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
              {HERO_CONTENT.cta.secondary.text}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p className="text-2xl md:text-3xl font-light text-text mb-8">{INTRO_CONTENT.heading}</p>

            {INTRO_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <p className="text-text text-2xl font-light pt-6">{INTRO_CONTENT.closing}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {ARSENAL_SECTION.title} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">{ARSENAL_SECTION.titleHighlight}</span>
            </h2>
            <div className="w-32 h-1 bg-linear-to-r from-primary to-accent"></div>
          </motion.div>

          {SERVICES.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{WHY_CHOOSE_US.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.items.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-dark p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">{CTA_CONTENT.title}</h2>

            <div className="max-w-3xl mx-auto mb-12 space-y-6 text-lg md:text-xl text-text-secondary">
              <p>{CTA_CONTENT.paragraphs[0]}</p>

              <p className="text-text text-xl font-light">{CTA_CONTENT.highlight}</p>

              <p>{CTA_CONTENT.paragraphs[2]}</p>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
              <Link href={CTA_CONTENT.button.href} className="group relative inline-block px-12 py-5 bg-linear-to-r from-primary to-accent text-white font-bold text-lg rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 cursor-pointer">
                <span className="relative z-10">{CTA_CONTENT.button.text}</span>
                <motion.div className="absolute inset-0 bg-white/20" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} />
              </Link>

              <p className="text-sm text-text-secondary mt-6">{CTA_CONTENT.subtext}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
