"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(() => ["Innovation", "Excellence", "Performance", "Vision"], []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / globalThis.innerWidth - 0.5) * 20,
        y: (e.clientY / globalThis.innerHeight - 0.5) * 20,
      });
    };

    globalThis.addEventListener("mousemove", handleMouseMove);
    return () => globalThis.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen bg-dark overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <motion.div className="absolute top-20 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 left-1/4 w-125 h-125 bg-accent rounded-full blur-[140px]" animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      {/* Floating Grid Pattern */}
      <motion.div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`, backgroundSize: "80px 80px", transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} transition={{ type: "spring", stiffness: 50, damping: 20 }} />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
              <div className="h-px w-12 bg-linear-to-r from-primary to-transparent" />
              <span className="text-xs tracking-[0.3em] text-text-secondary font-medium uppercase">Digital Solutions</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                <span className="block text-text">Transform</span>
                <span className="block text-text">Your Digital</span>
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-light to-accent">{words[currentWordIndex]}</span>
                  <motion.span className="absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary to-accent" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.6, delay: 0.5 }} />
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              We architect digital experiences that drive growth. From AI-powered solutions to scalable cloud infrastructure, we engineer success for forward-thinking businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href={"/contact"} className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden transition-all">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <motion.div className="absolute inset-0 bg-primary-dark" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href={"/portfolio"} className="inline-block px-8 py-4 border-2 border-text-secondary/30 text-text font-medium rounded-full hover:border-primary transition-all backdrop-blur-sm">
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:col-span-5 relative h-150 hidden lg:block">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative h-full">
              {/* Floating Cards */}
              <motion.div animate={{ y: [0, -20, 0], rotate: [2, -2, 2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-72 h-40 bg-linear-to-br from-dark-secondary to-dark border border-primary/20 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-primary">+47%</div>
                </div>
                <p className="text-sm text-text-secondary">Performance Boost</p>
              </motion.div>

              <motion.div animate={{ y: [0, 20, 0], rotate: [-2, 2, -2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-52 right-12 w-64 h-36 bg-linear-to-br from-dark-secondary to-dark border border-accent/20 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-text">AI Integration</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-dark-secondary/50 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-linear-to-r from-accent to-primary" initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 2, delay: 1 }} />
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 left-0 w-64 h-48 bg-linear-to-br from-dark-secondary to-dark/95 rounded-2xl backdrop-blur-xl border border-primary/20 p-6 shadow-2xl">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-1">
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">Analytics</p>
                    <div className="grid grid-cols-5 gap-3 items-end h-32">
                      {[60, 85, 70, 95, 75].map((height, i) => (
                        <motion.div key={`chart-bar-${height}`} className="relative flex flex-col justify-end" initial={{ height: 0, opacity: 0 }} animate={{ height: "100%", opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 + [60, 85, 70, 95, 75].indexOf(height) * 0.1, ease: "easeOut" }}>
                          <motion.div className="w-full bg-linear-to-t from-primary to-primary-light rounded-t-md" style={{ height: `${height}%` }} animate={{ height: [`${height}%`, `${height - 5}%`, `${height}%`] }} transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-text-secondary/10">
                    <span className="text-xs text-text-secondary">Traffic</span>
                    <motion.span className="text-sm font-semibold text-primary" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                      +28.5%
                    </motion.span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 border border-primary/10 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 border border-accent/10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
