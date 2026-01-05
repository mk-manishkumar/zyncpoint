"use client";

import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="px-6 py-16 min-h-screen flex items-center bg-linear-to-br from-dark to-[rgba(26,31,46,0.5)] relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Blue Orb - Moving across entire screen */}
        <motion.div className="absolute w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)", filter: "blur(80px)", top: "0%", left: "0%" }} animate={{ x: ["0vw", "40vw", "70vw", "30vw", "0vw"], y: ["0vh", "30vh", "10vh", "40vh", "0vh"], scale: [1, 1.2, 1.1, 1.15, 1], opacity: [0.2, 0.3, 0.25, 0.3, 0.2] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />

        {/* Pink/Purple Orb - Moving across screen */}
        <motion.div className="absolute w-80 h-80 rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.3) 50%, transparent 70%)", filter: "blur(70px)", top: "50%", left: "70%" }} animate={{ x: ["0vw", "-40vw", "-20vw", "-50vw", "0vw"], y: ["0vh", "-20vh", "10vh", "-10vh", "0vh"], scale: [1, 1.15, 1.05, 1.2, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }} />

        {/* Small Green Accent - Moving in bottom right area */}
        <motion.div className="absolute w-32 h-32 rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(34,197,94,0.6) 0%, transparent 70%)", filter: "blur(20px)", bottom: "5%", right: "5%" }} animate={{ x: ["0vw", "-15vw", "-5vw", "-20vw", "0vw"], y: ["0vh", "-10vh", "-5vh", "-15vh", "0vh"], scale: [1, 1.3, 1.1, 1.2, 1], opacity: [0.3, 0.5, 0.4, 0.5, 0.3] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        {/* Small Blue Dot 1 - Top right area */}
        <motion.div className="absolute w-3 h-3 rounded-full bg-primary-light opacity-50" style={{ top: "25%", right: "20%" }} animate={{ x: ["0vw", "10vw", "5vw", "8vw", "0vw"], y: ["0vh", "15vh", "8vh", "12vh", "0vh"], opacity: [0.3, 0.7, 0.5, 0.6, 0.3] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />

        {/* Small Blue Dot 2 - Bottom left area */}
        <motion.div className="absolute w-3 h-3 rounded-full bg-primary opacity-40" style={{ bottom: "30%", left: "15%" }} animate={{ x: ["0vw", "8vw", "3vw", "10vw", "0vw"], y: ["0vh", "-12vh", "-6vh", "-10vh", "0vh"], opacity: [0.2, 0.6, 0.4, 0.5, 0.2] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} />

        {/* Small Blue Dot 3 - Center area */}
        <motion.div className="absolute w-3 h-3 rounded-full bg-primary-light opacity-30" style={{ top: "45%", left: "50%" }} animate={{ x: ["0vw", "-10vw", "-5vw", "-12vw", "0vw"], y: ["0vh", "10vh", "5vh", "8vh", "0vh"], opacity: [0.2, 0.5, 0.35, 0.45, 0.2] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }} />

        {/* Additional Dot - Right side */}
        <motion.div className="absolute w-3 h-3 rounded-full bg-primary opacity-35" style={{ top: "60%", right: "30%" }} animate={{ x: ["0vw", "-8vw", "-3vw", "-10vw", "0vw"], y: ["0vh", "-8vh", "-4vh", "-10vh", "0vh"], opacity: [0.2, 0.5, 0.3, 0.4, 0.2] }} transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 4 }} />
      </div>

      <div className="relative z-10 max-w-225 mx-auto text-center">
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
          Bridge Complex Challenges with Cutting-Edge Tech
        </motion.h1>

        <motion.p className="text-base md:text-lg text-text-secondary mb-12 leading-relaxed max-w-175 mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}>
          At ZyncPoint, we transform your vision into high-performance digital solutions. Creative web development, AI-powered innovation, expert consultancy, and scalable cloud infrastructure, all engineered for your success.
        </motion.p>

        <motion.div className="flex gap-4 justify-center flex-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}>
          <Link href={"/contact"} className="bg-primary text-dark px-8 py-3.5 rounded-full font-semibold text-base hover:bg-primary-light hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(50,184,198,0.4)] transition-all duration-300 cursor-pointer">
            Start Your Project
          </Link>

          <Link href={"/services"} className="bg-transparent text-primary px-8 py-3.5 rounded-full font-semibold text-base border-2 border-primary hover:bg-[rgba(50,184,198,0.1)] hover:border-primary-light hover:text-primary-light transition-all duration-300 cursor-pointer">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
