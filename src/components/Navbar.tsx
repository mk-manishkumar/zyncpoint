"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/smoothScroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#why", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${scrolled ? "bg-[rgba(15,20,25,0.98)] border-b border-[rgba(50,184,198,0.15)]" : "bg-[rgba(15,20,25,0.95)] border-b border-[rgba(50,184,198,0.1)]"}`}>
      <div className="max-w-350 mx-auto px-[24px] py-[16px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent tracking-tight">
          ZyncPoint
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-[32px] list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.href);
                }}
                className="text-secondary text-sm font-medium hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button onClick={() => smoothScrollTo("#contact")} className="bg-primary text-dark px-[24px] py-[12px] rounded-full font-semibold text-sm hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(50,184,198,0.3)] transition-all duration-300 cursor-pointer">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
