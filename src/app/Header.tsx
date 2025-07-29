"use client";
import Image from "next/image";

const NAV_LINKS = [
  { label: "HOME", href: "#", active: true },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT US", href: "#about" },
  { label: "CLIENTS", href: "#clients" },
];

export default function Header({ onMenuOpen }: { onMenuOpen?: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-[#101024] shadow-lg border-b border-[#23234a]">
      {/* Logo and Company Name (left) */}
      <div className="flex items-center gap-3">
        <Image src="/images/logo.png" alt="Pingaksh Logo" width={40} height={40} className="object-contain" />
        <span className="font-bold text-xl tracking-widest">PINGAKSH</span>
        <span className="text-xs font-semibold ml-2 opacity-60">CREATIVE STUDIO</span>
      </div>
      {/* Hamburger Menu (center, mobile only) */}
      <div className="flex-1 flex justify-center md:hidden">
        <button
          className="flex flex-col gap-1 p-2"
          aria-label="Open navigation menu"
          onClick={onMenuOpen}
        >
          <div className="w-7 h-1 bg-white rounded transition-all"></div>
          <div className="w-7 h-1 bg-white rounded transition-all"></div>
          <div className="w-7 h-1 bg-white rounded transition-all"></div>
        </button>
      </div>
      {/* Navlinks (center, desktop only) */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-8 text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`px-2 py-1 rounded transition-colors ${link.active ? "text-cyan-400 border-b-2 border-cyan-400" : "hover:text-cyan-300"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* CONTACT US button (right) */}
      <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2 rounded-lg font-semibold transition-colors shadow-md">
        CONTACT US
      </button>
    </header>
  );
} 