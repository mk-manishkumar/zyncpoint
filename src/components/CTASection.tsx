"use client";

const CTASection = () => {
  return (
    <section id="contact" className="scroll-mt-22.5 px-[24px] py-[64px] bg-linear-to-br from-[rgba(50,184,198,0.1)] to-[rgba(255,107,53,0.1)] text-center border-t border-b border-[rgba(50,184,198,0.2)]">
      <div className="max-w-175 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[24px] leading-snug text-text">Ready to Zync Your Vision?</h2>

        <p className="text-base md:text-lg text-text-secondary mb-[48px]">Let&apos;s discuss how ZyncPoint can drive your digital transformation and position your business for market leadership.</p>

        <button className="bg-primary text-dark px-8 py-3.5 rounded-full font-semibold text-base hover:bg-primary-light hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(50,184,198,0.4)] transition-all duration-300 cursor-pointer">Schedule a Consultation</button>
      </div>
    </section>
  );
};

export default CTASection;
