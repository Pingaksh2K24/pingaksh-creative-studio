"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

const NAV_LINKS = [
  { label: "HOME", href: "#", active: true },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT US", href: "#about" },
  { label: "CLIENTS", href: "#clients" },
];

const TESTIMONIALS = [
  { name: "Rakesh Mehta", role: "Political Strategist", img: "/file.svg" },
  { name: "Sneha Gupta", role: "Content Visionary", img: "/globe.svg" },
  { name: "Vikas Patel", role: "Design Expert", img: "/window.svg" },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans flex flex-col">
      {/* Smoke Cursor Effect */}
      <div className="fixed pointer-events-none z-50">
        <div
          className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full blur-sm opacity-60 animate-pulse"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-8 h-8 bg-gradient-to-r from-cyan-300 to-fuchsia-400 rounded-full blur-md opacity-40 animate-ping"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-12 h-12 bg-gradient-to-r from-cyan-200 to-fuchsia-300 rounded-full blur-lg opacity-20 animate-pulse"
          style={{
            left: mousePosition.x - 24,
            top: mousePosition.y - 24,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <Header onMenuOpen={() => setIsMobileMenuOpen(true)} />
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 bg-[#101024] border-b border-[#23234a]">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Pingaksh Logo" width={40} height={40} className="object-contain" />
              <span className="font-bold text-xl tracking-widest">PINGAKSH</span>
              <span className="text-xs font-semibold ml-2 opacity-60">CREATIVE STUDIO</span>
            </div>
            <button
              className="flex flex-col gap-1 p-2"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-7 h-1 bg-white rounded rotate-45 translate-y-1.5"></div>
              <div className="w-7 h-1 bg-white rounded opacity-0"></div>
              <div className="w-7 h-1 bg-white rounded -rotate-45 -translate-y-1.5"></div>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center">
            <ul className="flex flex-col gap-8 text-2xl font-bold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`block px-6 py-3 rounded transition-colors ${link.active ? "text-cyan-400 bg-cyan-400/10 border-l-4 border-cyan-400" : "hover:text-cyan-300 hover:bg-white/5"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <Hero />

      {/* Inside Pingaksh Section */}
      <section id="inside-pingaksh" className="relative flex flex-col items-center justify-center py-16 px-4 bg-[#101024] border-b-4 border-[#23234a] rounded-t-[3rem]">
        <div className="mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-left">Inside Pingaksh</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mb-4"></div>
        </div>
        <div className="w-full max-w-8xl flex flex-col md:flex-row items-left gap-2">
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-left md:mb-0">
            <img src="/images/image3.jpg" alt="Inside Pingaksh" className="rounded-2xl shadow-xl w-full max-w-sm object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-0 text-left text-white text-base md:text-lg">
            {/* Who We Are */}
            <div>
              <div className="font-semibold text-cyan-300 flex items-center gap-2 mb-2">Who We Are</div>
              <p className="mb-2">Pingaksh Creative Studio is a dynamic team of strategists, designers, storytellers, and technologists dedicated to reshaping political narratives. Founded with a vision to blend creativity with purpose, we specialize in crafting impactful digital identities and campaign experiences that influence minds and win hearts.</p>
              <p>We believe that powerful visuals and clear messaging are not just tools—they’re weapons in the political battlefield.</p>
            </div>
            {/* Vision & Mission */}
            <div>
              <div className="font-semibold text-fuchsia-300 flex items-center gap-2 mb-2">Our Vision & Mission</div>
              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-center gap-2"><span className="text-xl">🔭</span> <span className="font-semibold text-fuchsia-200">Vision</span></div>
                <div className="ml-7">To become India’s leading political and creative studio that empowers leaders and changemakers through strategic design, content, and technology.</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2"><span className="text-xl">🎯</span> <span className="font-semibold text-fuchsia-200">Mission</span></div>
                <div className="ml-7">To deliver data-driven, visually impactful, and result-oriented branding & campaign solutions that connect with the people and convert votes into victories.</div>
              </div>
            </div>
            {/* Why Political & Digital Branding Matters */}
            <div>
              <div className="font-semibold text-blue-300 flex items-center gap-2 mb-2">Why Political & Digital Branding Matters</div>
              <p className="mb-2">In today’s hyper-connected world, elections aren’t just won on the ground—they’re also won on screens.<br />Voters don’t just listen, they scroll, swipe, and share. That’s why your digital image, messaging, posters, and media presence must reflect trust, vision, and leadership.</p>
              <div className="mb-2">
                <span className="font-semibold">A strong political brand:</span>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-white/80">
                  <li>Builds public trust</li>
                  <li>Unifies party identity</li>
                  <li>Connects emotionally with voters</li>
                  <li>Drives engagement across digital platforms</li>
                </ul>
              </div>
              <p>At Pingaksh, we understand both the art of influence and the science of strategy. From poster designs to content writing, from campaign planning to digital outreach—we do it all, with impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neon Cards Section */}
      <section className="relative flex flex-col items-center justify-center py-16 px-4 bg-transparent z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Digital Toolbox</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>
        {/* Glowing ring background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[220px] md:w-[800px] md:h-[300px] pointer-events-none z-0">
          <div className="w-full h-full rounded-full border-2 border-cyan-400/30 blur-2xl opacity-60"></div>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* Top Row */}
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-cyan-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-cyan-400/80 hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 via-purple-600 to-blue-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 relative z-10">
              <Image src="/file.svg" alt="Political Branding" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-cyan-300 transition-colors duration-300">Political Branding & Identity Design</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">We craft unique political brands that resonate with voters. From logo and color palette to complete identity design, we ensure your campaign stands out and builds trust.</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-fuchsia-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-fuchsia-400/80 hover:shadow-fuchsia-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-green-400 via-cyan-500 via-blue-600 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-fuchsia-500/50 transition-all duration-300 relative z-10">
              <Image src="/globe.svg" alt="Election Campaign" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-fuchsia-300 transition-colors duration-300">Election Campaign Strategy & Management</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Comprehensive planning, execution, and monitoring of election campaigns. We manage everything from ground strategy to digital outreach, ensuring maximum impact and real-time adaptability.</p>
            <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-purple-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-purple-400/80 hover:shadow-purple-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 via-purple-600 to-indigo-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 relative z-10">
              <Image src="/window.svg" alt="Media Planning" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-purple-300 transition-colors duration-300">Media Planning & Outreach</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Strategic media planning for optimal coverage across print, digital, and broadcast. We handle press releases, media relations, and outreach to amplify your message to the right audience.</p>
            <button className="bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
          {/* Bottom Row */}
          {/* Card 4 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-blue-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-blue-400/80 hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 relative z-10">
              <Image src="/vercel.svg" alt="Digital Marketing" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-blue-300 transition-colors duration-300">Digital Marketing & Voter Engagement</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Targeted digital campaigns to connect with voters on every platform. We use social media, email, and digital ads to boost engagement and drive meaningful conversations.</p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
          {/* Card 5 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-emerald-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-emerald-400/80 hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-emerald-400 via-teal-500 via-cyan-500 to-blue-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300 relative z-10">
              <Image src="/globe.svg" alt="Creative Graphic Design" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-emerald-300 transition-colors duration-300">Creative Graphic Design</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Visually stunning graphics tailored for political campaigns. Our team creates infographics, banners, and creative visuals that capture attention and communicate your message.</p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
          {/* Card 6 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-orange-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-orange-400/80 hover:shadow-orange-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-400 via-purple-500 via-fuchsia-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 relative z-10">
              <Image src="/file.svg" alt="Poster Designing" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-orange-300 transition-colors duration-300">Poster Designing</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Professional poster designs for rallies, events, and digital campaigns. We ensure your posters are eye-catching, on-brand, and effective in mobilizing supporters.</p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
          {/* Card 7 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-pink-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-pink-400/80 hover:shadow-pink-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 via-purple-600 to-indigo-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 relative z-10">
              <Image src="/file.svg" alt="Content Writing & Messaging" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-pink-300 transition-colors duration-300">Content Writing & Messaging</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Compelling speeches, manifestos, and campaign messaging. We craft persuasive content that inspires action and builds a strong narrative for your campaign.</p>
            <button className="bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-400 hover:to-fuchsia-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
          {/* Card 8 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-indigo-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-indigo-400/80 hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-indigo-400 via-blue-500 via-purple-600 to-fuchsia-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 relative z-10">
              <Image src="/globe.svg" alt="Political Articles & Thought Leadership" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-indigo-300 transition-colors duration-300">Political Articles & Thought Leadership</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Expert articles, blogs, and opinion pieces to establish your thought leadership. We help you influence public opinion and position you as a credible voice in politics.</p>
            <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
          {/* Card 9 */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-yellow-500/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-yellow-400/80 hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 relative z-10">
              <Image src="/vercel.svg" alt="Technical Support & IT Infrastructure" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-yellow-300 transition-colors duration-300">Technical Support & IT Infrastructure</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Robust IT solutions for seamless campaign operations. From website management to secure data handling, we provide technical support and infrastructure setup.</p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 hover:scale-110 relative z-10">View Details</button>
          </div>
        </div>
      </section>

      {/* Media Management & Stats Section */}
      <section className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-6xl mx-auto w-full py-8">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold mb-2">Media Management</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#181830] rounded-xl p-4">
              <div className="font-semibold mb-1">Feature</div>
              <div className="text-xs opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="bg-[#181830] rounded-xl p-4">
              <div className="font-semibold mb-1">Case Study</div>
              <div className="text-xs opacity-70">Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</div>
            </div>
            <div className="bg-[#181830] rounded-xl p-4 col-span-2">
              <div className="font-semibold mb-1">Statistics</div>
              <div className="flex gap-4 mt-2">
                <div className="w-1/2">
                  <div className="h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-2"></div>
                  <div className="text-xs opacity-70">Growth</div>
                </div>
                <div className="w-1/2">
                  <div className="h-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg mb-2"></div>
                  <div className="text-xs opacity-70">Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scapie Approach (Charts) */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold mb-2">Scapie Approach&apos;s</h3>
          <div className="bg-[#181830] rounded-xl p-4 flex flex-col gap-4">
            <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"></div>
            <div className="h-24 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Testimonials & Quote Section */}
      <section className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-6xl mx-auto w-full py-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Client Testimonials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#181830] rounded-xl p-4 flex flex-col items-center text-center">
                <Image src={t.img} alt={t.name} width={48} height={48} className="rounded-full mb-2" />
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs opacity-70">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-[#181830] rounded-xl p-6 flex flex-col items-center justify-center h-full min-h-[160px]">
            <div className="text-lg font-bold mb-2">Get a Quote</div>
            <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-80 transition">Learn More</button>
          </div>
          <div className="bg-[#181830] rounded-xl p-6 flex flex-col items-center justify-center h-full min-h-[160px]">
            <div className="text-lg font-bold mb-2">Pingaksh</div>
            <div className="text-xs opacity-70 mb-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget consequat orci enim eu orci.</div>
            <button className="bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 transition">Learn More</button>
          </div>
        </div>
      </section>

      {/* Our Winning Edge Section */}
      <section id="winning-edge" className="relative flex flex-col items-center justify-center py-16 px-4 bg-[#181830] border-t-4 border-[#23234a] rounded-t-[2rem]">
        <div className="w-full flex flex-col gap-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Winning Edge</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-fuchsia-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-white/90 text-base md:text-lg text-center mb-6">At Pingaksh Creative Studio, we don’t just design campaigns we craft winning narratives. Here’s what sets us apart:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-[#23234a] to-[#181830] rounded-2xl border-2 border-yellow-400/40 shadow-xl p-6 flex flex-col items-center text-center hover:border-yellow-400/80 hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-500 min-h-[260px] w-full">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-fuchsia-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-yellow-300">Fast Turnaround, High-Quality Design</h4>
              <p className="text-sm opacity-90">We understand the urgency of political campaigns. Whether it’s last-minute posters or digital creatives for breaking news, our team delivers visually compelling content at speed without compromising on quality.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-[#23234a] to-[#181830] rounded-2xl border-2 border-cyan-400/40 shadow-xl p-6 flex flex-col items-center text-center hover:border-cyan-400/80 hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-500 min-h-[260px] w-full">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🗳️</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-cyan-300">In-Depth Understanding of the Political Landscape</h4>
              <p className="text-sm opacity-90">From booth-level dynamics to mass voter psychology, our team brings deep insights into regional politics, voter behavior, and electoral trends, ensuring every campaign hits the right chord with the right people.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-[#23234a] to-[#181830] rounded-2xl border-2 border-fuchsia-400/40 shadow-xl p-6 flex flex-col items-center text-center hover:border-fuchsia-400/80 hover:shadow-fuchsia-500/25 hover:scale-105 transition-all duration-500 min-h-[260px] w-full">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-fuchsia-300">End-to-End Election Campaign Support</h4>
              <p className="text-sm opacity-90">We are more than just a design agency. From ideation to execution, we manage every layer of the campaign strategy, content, media, technology, outreach, and more so you can focus on your core mission: connecting with the people.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-gradient-to-br from-[#23234a] to-[#181830] rounded-2xl border-2 border-blue-400/40 shadow-xl p-6 flex flex-col items-center text-center hover:border-blue-400/80 hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500 min-h-[260px] w-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-blue-300">One-Stop Creative & Tech Solution</h4>
              <p className="text-sm opacity-90">Whether you need political branding, content writing, social media, tech support, or on-ground coordination, Pingaksh is your single destination. We blend creativity with technology to deliver complete, campaign-ready solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
