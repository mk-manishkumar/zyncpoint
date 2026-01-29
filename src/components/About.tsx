"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MISSION_ITEMS, TEAM_MEMBERS, ABOUT_WHY_ZYNCPOINT, ABOUT_TEAM_SECTION, type MissionItem, type TeamMember } from "../../scripts/constants";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
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
    <main className="relative bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div className="absolute top-1/4 -right-64 w-125 h-125 bg-primary rounded-full blur-[160px]" animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-1/4 -left-64 w-125 h-125 bg-accent rounded-full blur-[160px]" animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: ` linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      {/* Why ZyncPoint Section */}
      <section className="relative z-10 pt-4 pb-24 lg:pt-8 lg:pb-32">
        <div className="w-full max-w-350 mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-linear-to-r from-primary to-transparent" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
                {ABOUT_WHY_ZYNCPOINT.title.prefix} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-light to-accent">{ABOUT_WHY_ZYNCPOINT.title.highlight}</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">{ABOUT_WHY_ZYNCPOINT.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="text-text font-semibold mb-1">{ABOUT_WHY_ZYNCPOINT.mission.title}</h3>
                    <p className="text-text-secondary">{ABOUT_WHY_ZYNCPOINT.mission.description}</p>
                  </div>
                </div>
              </div>

              {/* Mission Items */}
              <div className="space-y-4">
                {MISSION_ITEMS.map((item: MissionItem, index: number) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} className="group relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                    <div className={`absolute left-0 top-0 w-0.5 h-0 bg-linear-to-b ${item.color} group-hover:h-full transition-all duration-500`} />
                    <h4 className="text-lg font-semibold text-primary mb-1">{item.title}</h4>
                    <p className="text-text-secondary">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Card */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
              <div className="relative bg-linear-to-br from-dark-secondary to-dark rounded-3xl p-12 lg:p-16 border border-primary/20 overflow-hidden">
                {/* Glow Effect */}
                <motion.div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div className="mb-8" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
                      <path d="M50 10L65 40L95 40L70 60L80 90L50 70L20 90L30 60L5 40L35 40L50 10Z" fill="currentColor" opacity="0.2" />
                      <path d="M50 20L60 45L85 45L65 60L72 85L50 67L28 85L35 60L15 45L40 45L50 20Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </motion.div>

                  <h3 className="text-3xl font-bold text-text mb-4">{ABOUT_WHY_ZYNCPOINT.visionCard.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{ABOUT_WHY_ZYNCPOINT.visionCard.description}</p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/20 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-accent/20 to-transparent rounded-tr-full" />
              </div>

              {/* Floating Accent Elements */}
              <motion.div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent opacity-60" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-linear-to-br from-accent to-primary opacity-40" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={sectionRef} className="relative z-10 py-24 lg:py-32">
        <div className="w-full max-w-350 mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-linear-to-r from-transparent via-primary to-transparent" />
              <span className="text-xs tracking-[0.3em] text-text-secondary font-medium uppercase">{ABOUT_TEAM_SECTION.eyebrow}</span>
              <div className="h-px w-8 bg-linear-to-r from-transparent via-primary to-transparent" />
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
              {ABOUT_TEAM_SECTION.title.prefix} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-light to-accent">{ABOUT_TEAM_SECTION.title.highlight}</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              {ABOUT_TEAM_SECTION.description}
            </motion.p>
          </div>

          {/* Team Members Grid */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {TEAM_MEMBERS.map((member: TeamMember, index: number) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }} onHoverStart={() => setHoveredMember(index)} onHoverEnd={() => setHoveredMember(null)} className="group relative">
                  {/* Card Background */}
                  <div className="relative bg-linear-to-br from-dark-secondary to-dark rounded-2xl overflow-hidden border border-primary/20 transition-all duration-500 hover:border-primary/50">
                    {/* Glow Effect */}
                    <motion.div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10" animate={{ opacity: hoveredMember === index ? 0.3 : 0 }} transition={{ duration: 0.3 }} />

                    <div className="relative p-8">
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <motion.div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden" animate={{ scale: hoveredMember === index ? 1.05 : 1 }} transition={{ duration: 0.3 }}>
                          {/* Gradient Border */}
                          <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-light to-accent p-1 rounded-full">
                            <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                              <div className="relative w-full h-full">
                                <Image src={member.image} alt={`${member.name} - ${member.role} of ZyncPoint`} fill className="object-cover" />
                              </div>
                            </div>
                          </div>

                          {/* Glow Effect on Hover */}
                          <motion.div className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-full blur-xl -z-10" animate={{ opacity: hoveredMember === index ? 0.6 : 0 }} transition={{ duration: 0.3 }} />
                        </motion.div>

                        {/* Status Indicator */}
                        <motion.div className="absolute bottom-2 right-1/2 translate-x-12 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-secondary" animate={{ scale: hoveredMember === index ? [1, 1.2, 1] : 1 }} transition={{ duration: 1, repeat: Infinity }} />
                      </div>

                      {/* Name & Role */}
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-text mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-primary-light transition-all duration-300">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                      </div>

                      {/* Social Links */}
                      <motion.div className="flex items-center justify-center gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: hoveredMember === index ? 1 : 0.6, y: hoveredMember === index ? 0 : 10 }} transition={{ duration: 0.3 }}>
                        {Object.entries(member.social).map(([platform, url]) => (
                          <Link key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-text-secondary/20 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300">
                            {platform === "linkedin" && (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            )}
                            {platform === "twitter" && (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                            )}
                            {platform === "github" && (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    </div>

                    {/* Corner Accent */}
                    <motion.div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary" animate={{ opacity: hoveredMember === index ? [1, 0.5, 1] : 0, scale: hoveredMember === index ? [1, 1.5, 1] : 1 }} transition={{ duration: 2, repeat: Infinity }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <motion.div className="absolute top-40 right-20 w-24 h-24 border-2 border-primary/10 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-accent/10 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
    </main>
  );
}
