"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 h-20 w-full z-50 backdrop-blur-lg transition-all ${scrolled ? "bg-[rgba(15,20,25,0.98)] border-b border-[rgba(50,184,198,0.15)]" : "bg-[rgba(15,20,25,0.95)] border-b border-[rgba(50,184,198,0.1)]"}`}>
        {/* GRID LAYOUT */}
        <div className="max-w-350 mx-auto px-6 h-full grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/ZyncPoint_Logo.png" alt="ZyncPoint Logo" width={28} height={28} priority className="sm:h-5 sm:w-5" />
              <span className="font-extrabold leading-none tracking-wide bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent text-[20px]">ZYNCPOINT</span>
            </Link>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-secondary text-sm font-medium hover:text-primary transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* PORTFOLIO */}
          <div className="hidden md:flex justify-end">
            <Link href="/portfolio" className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-light transition">
              Portfolio
            </Link>
          </div>

          {/* MOBILE — Hamburger */}
          <button className="md:hidden justify-self-end text-text" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <button className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)} aria-label="Close menu" type="button" />

      {/* ================= MOBILE PANEL ================= */}
      <aside className={`fixed top-0 right-0 z-50 h-full w-70 bg-dark-secondary border-l border-[rgba(50,184,198,0.15)] transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full">
          {/* Close button */}
          <button className="self-end mb-8 text-text" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>

          {/* Links */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-text hover:text-primary transition">
                {link.label}
              </Link>
            ))}

            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="mt-6 inline-flex justify-center bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition">
              Portfolio
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
