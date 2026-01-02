"use client";

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
    <section id="about" className="scroll-mt-22.5 px-[24px] py-[64px] bg-linear-to-br from-dark to-[rgba(26,31,46,0.8)]">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-[24px] leading-snug text-text">Why ZyncPoint?</h2>

          <p className="text-text-secondary mb-[24px] leading-relaxed text-base">At ZyncPoint, we bridge the gap between complex business challenges and high-performance digital solutions. In an era where technology moves faster than ever, we ensure your business stays ahead by providing the technical precision and creative edge needed to win.</p>

          <p className="text-text-secondary mb-[24px] leading-relaxed text-base">
            <strong className="text-text">Our Mission:</strong> To Zync your vision with the most state-of-the-art technology, delivering you to the Point of market leadership.
          </p>

          <div className="flex flex-col gap-[16px]">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="flex gap-[16px] p-[16px] bg-[rgba(50,184,198,0.05)] border-l-[3px] border-primary rounded-sm">
                <strong className="text-primary min-w-30 shrink-0">{highlight.title}</strong>
                <p className="text-text-secondary">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image/Visual Content */}
        <div className="bg-linear-to-br from-[rgba(50,184,198,0.1)] to-[rgba(255,107,53,0.1)] border border-[rgba(50,184,198,0.2)] rounded-[12px] p-[48px] flex items-center justify-center min-h-100">
          <div className="flex flex-col gap-[24px] items-center text-center">
            <div className="text-8xl opacity-60">🚀</div>
            <h3 className="text-2xl font-semibold text-text">Zync Your Vision</h3>
            <p className="text-text-secondary max-w-75">Transform challenges into competitive advantages with cutting-edge technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
