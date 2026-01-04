"use client";

import Image from "next/image";
import { Boxes } from "lucide-react";

interface Highlight {
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    title: "Technical Excellence",
    description: "Deep expertise in modern tech stacks and best practices",
  },
  {
    title: "Creative Innovation",
    description: "Unique solutions that set your business apart",
  },
  {
    title: "Scalability First",
    description: "Built for growth from day one",
  },
];

const About = () => {
  return (
    <section className="scroll-mt-22.5 px-6 py-16 bg-linear-to-br from-dark to-[rgba(26,31,46,0.8)]">
      <div className="max-w-300 mx-auto">
        {/* ================= WHY ZYNCPOINT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-text">Why ZyncPoint?</h2>

            <p className="text-text-secondary mb-6 leading-relaxed text-base">At ZyncPoint, we bridge the gap between complex business challenges and high-performance digital solutions. In an era where technology moves faster than ever, we ensure your business stays ahead by providing the technical precision and creative edge needed to win.</p>

            <p className="text-text-secondary mb-6 leading-relaxed text-base">
              <strong className="text-text">Our Mission:</strong> To Zync your vision with the most state-of-the-art technology, delivering you to the Point of market leadership.
            </p>

            <div className="flex flex-col gap-4">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="flex gap-4 p-4 bg-[rgba(50,184,198,0.05)] border-l-[3px] border-primary rounded-sm">
                  <strong className="text-primary min-w-30 shrink-0">{highlight.title}</strong>
                  <p className="text-text-secondary">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="bg-linear-to-br from-[rgba(50,184,198,0.1)] to-[rgba(255,107,53,0.1)] border border-[rgba(50,184,198,0.2)] rounded-xl p-12 flex items-center justify-center min-h-100">
            <div className="flex flex-col gap-6 items-center text-center">
              <div className="text-8xl opacity-60">
                <Boxes size={48} />
              </div>
              <h3 className="text-2xl font-semibold text-text">Zync Your Vision</h3>
              <p className="text-text-secondary max-w-75">Transform challenges into competitive advantages with cutting-edge technology</p>
            </div>
          </div>
        </div>

        {/* ================= OUR TEAM ================= */}
        <div>
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Team</h2>
            <p className="text-text-secondary max-w-150 mx-auto">A focused team driven by engineering excellence, product thinking, and long-term impact.</p>
          </div>

          {/* Team Grid */}
          <div className="flex justify-center">
            <div className="max-w-50 w-full bg-dark-secondary border border-[rgba(50,184,198,0.2)] rounded-xl p-8 text-center hover:border-primary transition">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border border-[rgba(50,184,198,0.3)]">
                  <Image src="/teams/manish_kumar.png" alt="Manish Kumar - Founder of ZyncPoint" fill className="object-cover" />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-text mb-1">Manish Kumar</h3>

              {/* Role */}
              <p className="text-primary font-medium mb-4">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;