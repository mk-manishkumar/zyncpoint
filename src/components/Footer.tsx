"use client";

import Link from "next/link";

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#" },
      { label: "Team", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#" },
      { label: "AI Solutions", href: "#" },
      { label: "Consultancy", href: "#" },
      { label: "Cloud Deployment", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Email", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-[rgba(10,15,20,0.95)] px-[24px] py-[48px] border-t border-[rgba(50,184,198,0.1)]">
      <div className="max-w-300 mx-auto">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[48px] mb-[48px]">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-[16px] text-primary font-semibold">{section.title}</h4>
              <ul className="list-none space-y-[12px]">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className="text-text-secondary hover:text-primary transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="pt-[48px] border-t border-[rgba(50,184,198,0.1)] text-center text-text-secondary text-sm">
          <p>&copy; 2026 ZyncPoint. All rights reserved. | Syncing vision with technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
