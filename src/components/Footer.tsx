"use client";

import Image from "next/image";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[rgba(10,15,20,0.95)] px-6 py-12 border-t border-[rgba(50,184,198,0.1)]">
      <div className="max-w-300 mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/ZyncPoint_Logo.png" alt="ZyncPoint Logo" width={30} height={30} priority />
            <span className="text-[30px] leading-none font-bold text-primary-dark">ZYNCPOINT</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary">Follow us on:</span>

            <Link href="https://www.linkedin.com/company/zyncpoint" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-[rgba(50,184,198,0.2)] text-text-secondary hover:text-primary hover:border-primary transition" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </Link>

            <Link href="https://x.com/_manishmk" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-[rgba(50,184,198,0.2)] text-text-secondary hover:text-primary hover:border-primary transition" aria-label="Twitter">
              <LuTwitter size={18} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-[rgba(50,184,198,0.1)] text-center text-text-secondary text-sm">
          <p>&copy; 2026 ZyncPoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
