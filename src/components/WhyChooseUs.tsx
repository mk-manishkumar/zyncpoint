"use client";

interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

const whyItems: WhyItem[] = [
  {
    icon: "⚡",
    title: "Performance-Driven",
    description: "Speed, efficiency, and optimization at every level",
  },
  {
    icon: "🔒",
    title: "Security First",
    description: "Enterprise-grade security practices and compliance",
  },
  {
    icon: "🤝",
    title: "Collaborative Approach",
    description: "Partners in your success, not just vendors",
  },
  {
    icon: "📈",
    title: "Proven Results",
    description: "Measurable impact on business growth and ROI",
  },
  {
    icon: "🔬",
    title: "Innovation-Focused",
    description: "Always at the forefront of technology",
  },
  {
    icon: "🎯",
    title: "Precision Execution",
    description: "Meticulous attention to every detail",
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="scroll-mt-22.5 px-6 py-16 bg-dark-secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text">Why Choose ZyncPoint</h2>
        <p className="text-base md:text-lg text-text-secondary">Key advantages that set us apart</p>
      </div>

      <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {whyItems.map((item) => (
          <div key={item.title} className="text-center">
            <div className="text-6xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-text">{item.title}</h3>
            <p className="text-text-secondary leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
