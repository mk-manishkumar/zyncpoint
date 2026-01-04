"use client";

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

const Services = () => {
  return (
    <section className="scroll-mt-22.5 px-[24px] py-[64px] bg-dark-secondary">
      <div className="text-center mb-[64px]">
        <h2 className="text-4xl md:text-5xl font-bold mb-[16px] text-text">Our Core Services</h2>
        <p className="text-base md:text-lg text-text-secondary max-w-150 mx-auto">Comprehensive solutions across the entire digital transformation spectrum</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-350 mx-auto">
        {services.map((service) => (
          <div key={service.id} className="group relative bg-linear-to-br from-[rgba(50,184,198,0.08)] to-[rgba(255,107,53,0.08)] border border-[rgba(50,184,198,0.2)] rounded-[12px] p-[48px] cursor-pointer overflow-hidden hover:border-primary hover:from-[rgba(50,184,198,0.12)] hover:to-[rgba(255,107,53,0.12)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(50,184,198,0.15)] transition-all duration-300">
            {/* Shine effect */}
            <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-[rgba(50,184,198,0.1)] to-transparent transition-all duration-500 pointer-events-none" />

            <div className="text-5xl mb-[16px] inline-block relative z-10">{service.icon}</div>

            <h3 className="text-2xl font-semibold mb-[16px] text-text relative z-10">{service.title}</h3>

            <p className="text-text-secondary mb-[16px] leading-relaxed relative z-10">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
