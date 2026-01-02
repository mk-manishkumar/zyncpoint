"use client";

import { smoothScrollTo } from "@/lib/smoothScroll";

const Hero = () => {
  return (
    <section className="mt-15 px-[24px] py-[64px] min-h-screen flex items-center bg-linear-to-br from-dark to-[rgba(26,31,46,0.5)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-75 h-75 bg-[rgba(50,184,198,0.08)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-[rgba(255,107,53,0.06)] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-225 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-[24px] leading-tight bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">Bridge Complex Challenges with Cutting-Edge Tech</h1>

        <p className="text-base md:text-lg text-text-secondary mb-[48px] leading-relaxed max-w-175 mx-auto">At ZyncPoint, we transform your vision into high-performance digital solutions. Creative web development, AI-powered innovation, expert consultancy, and scalable cloud infrastructure—all engineered for your success.</p>

        <div className="flex gap-[16px] justify-center flex-wrap">
          <button onClick={() => smoothScrollTo("#contact")} className="bg-primary text-dark px-8 py-3.5 rounded-full font-semibold text-base hover:bg-primary-light hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(50,184,198,0.4)] transition-all duration-300 cursor-pointer">
            Start Your Project
          </button>

          <button onClick={() => smoothScrollTo("#services")} className="bg-transparent text-primary px-8 py-3.5 rounded-full font-semibold text-base border-2 border-primary hover:bg-[rgba(50,184,198,0.1)] hover:border-primary-light hover:text-primary-light transition-all duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
