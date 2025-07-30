"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between bg-[#101024]/95 backdrop-blur-md shadow-lg border-b border-[#23234a]">
      {/* Logo and Company Name (left) */}
      <div className="flex items-center gap-3">
        <Image src="/images/logo.png" alt="Pingaksh Logo" width={40} height={40} className="object-contain" />
        <span className="font-bold text-xl tracking-widest text-white">PINGAKSH</span>
        <span className="text-xs font-semibold ml-2 opacity-60 text-white">CREATIVE STUDIO</span>
      </div>
      {/* Hamburger Menu (right corner, mobile only) */}
      <div className="md:hidden">
        <button
          className="flex flex-col gap-1 p-2"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <div className={`w-7 h-1 bg-white rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-7 h-1 bg-white rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-7 h-1 bg-white rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      {/* Navlinks (center, desktop only) */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-8 text-sm font-semibold">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link href={link.href} className={`px-2 py-1 rounded transition-colors ${isActive ? "text-cyan-400 border-b-2 border-cyan-400" : "text-white hover:text-cyan-300"}`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[88px] left-0 right-0 bg-[#101024]/98 backdrop-blur-md border-b border-[#23234a] z-40">
          <nav className="px-6 py-4">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive 
                          ? "text-cyan-400 bg-cyan-400/10 border-l-4 border-cyan-400" 
                          : "text-white hover:text-cyan-300 hover:bg-white/5"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30 top-[88px]"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
} 