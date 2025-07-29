"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "#", active: true },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT US", href: "#about" },
  { label: "CLIENTS", href: "#clients" },
];

const SERVICES = [
  {
    title: "Political Campaign",
    desc: "Launch vibrant campaigns and connect with your audience.",
    color: "from-purple-800 to-purple-600",
    icon: "/file.svg",
    btn: "Go to See",
  },
  {
    title: "Social Media Marketing",
    desc: "Boost your brand's presence across all channels.",
    color: "from-cyan-800 to-cyan-600",
    icon: "/globe.svg",
    btn: "Go to List",
  },
  {
    title: "Graphics Designing",
    desc: "Create eye-catching, memorable content for your brand.",
    color: "from-fuchsia-800 to-fuchsia-600",
    icon: "/window.svg",
    btn: "Go to See",
  },
  {
    title: "Content Writing",
    desc: "Engage and convert with creative content.",
    color: "from-sky-800 to-sky-600",
    icon: "/vercel.svg",
    btn: "Go to List",
  },
];

const TESTIMONIALS = [
  { name: "Rakesh Mehta", role: "Political Strategist", img: "/file.svg" },
  { name: "Sneha Gupta", role: "Content Visionary", img: "/globe.svg" },
  { name: "Vikas Patel", role: "Design Expert", img: "/window.svg" },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-[#101024] shadow-lg border-b border-[#23234a]">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Pingaksh Logo" width={40} height={40} className="object-contain" />
          <span className="font-bold text-xl tracking-widest">PINGAKSH</span>
          <span className="text-xs font-semibold ml-2 opacity-60">CREATIVE STUDIO</span>
        </div>
        <nav className="flex-1 flex justify-center">
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
        <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2 rounded-lg font-semibold transition-colors shadow-md">
          CONTACT US
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center mt-18 px-4 bg-gradient-to-b from-[#101024] to-[#181830] rounded-b-[3rem] shadow-xl border-b-4 border-[#23234a] overflow-hidden min-h-[400px] md:min-h-[500px]"
        style={{
          backgroundImage: `url('/images/header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 rounded-b-[3rem]"></div>
        <div className="flex flex-col md:flex-row items-end justify-between w-full max-w-6xl gap-8 h-full">
          {/* Left Side - Text Content */}
          <div className="flex-1 flex flex-col items-start text-left relative z-10 justify-end pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest mb-2 text-white drop-shadow-lg">PINGAKSH CREATIVE STUDIO</h1>
            <h2 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-300 tracking-wide">INNOVATING MEDIA MANAGEMENT</h2>
            <p className="text-base md:text-lg text-white/80 max-w-lg mb-6">
              We help you manage your political campaigns, social media, graphics, and content with a futuristic, creative approach.
            </p>
          </div>
          {/* Right Side - Header Image */}
          <div className="flex-1 flex items-end justify-center pb-8">
            {/* <Image src="/images/header.jpg" alt="Header Illustration" width={400} height={300} className="object-contain rounded-2xl shadow-2xl" /> */}
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
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-fuchsia-600/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-fuchsia-400/80 hover:shadow-fuchsia-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 via-purple-600 to-blue-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-fuchsia-500/50 transition-all duration-300 relative z-10">
              <Image src="/file.svg" alt="Political Campaign" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-fuchsia-300 transition-colors duration-300">Political Campaign</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Lorem elit utatur exercitationem enim omnis non enim consequatur error enimings. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
            <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/50 hover:scale-110 relative z-10">Go to See</button>
          </div>
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-cyan-600/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-cyan-400/80 hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-green-400 via-cyan-500 via-blue-600 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 relative z-10">
              <Image src="/globe.svg" alt="Social Media Marketing" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-cyan-300 transition-colors duration-300">Social Media Marketing</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Doca ex files laboriosam dolore create dicta commodi ex error enimings. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-110 relative z-10">Go to See</button>
          </div>
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-fuchsia-600/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-fuchsia-400/80 hover:shadow-fuchsia-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 via-purple-600 to-indigo-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-fuchsia-500/50 transition-all duration-300 relative z-10">
              <Image src="/window.svg" alt="Graphics Designing" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-fuchsia-300 transition-colors duration-300">Graphics Designing</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Exercitationem architecto neutra earer error enimings et error enimings. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
            <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/50 hover:scale-110 relative z-10">Go to See</button>
          </div>
          {/* Bottom Row */}
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-cyan-600/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-cyan-400/80 hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 relative z-10">
              <Image src="/vercel.svg" alt="Content Writing" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-cyan-300 transition-colors duration-300">Content Writing</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Enim error enim architecto neutra earer error enimings et error enimings. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-110 relative z-10">Go to See</button>
          </div>
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-blue-600/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-blue-400/80 hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-emerald-400 via-teal-500 via-cyan-500 to-blue-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 relative z-10">
              <Image src="/globe.svg" alt="Extra Service" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-blue-300 transition-colors duration-300">Extra Service</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Seosertas chasdeasdeae commodi error enimings. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-110 relative z-10">Go to See</button>
          </div>
          <div className="bg-gradient-to-br from-[#181830] to-[#1a1a40] rounded-2xl border-2 border-fuchsia-600/60 shadow-2xl p-8 flex flex-col items-center text-center neon-card hover:border-fuchsia-400/80 hover:shadow-fuchsia-500/25 hover:scale-105 transition-all duration-500 min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-400 via-purple-500 via-fuchsia-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-fuchsia-500/50 transition-all duration-300 relative z-10">
              <Image src="/file.svg" alt="Another Service" width={32} height={32} className="filter brightness-0 invert" />
            </div>
            <h4 className="text-lg font-bold mb-2 relative z-10 group-hover:text-fuchsia-300 transition-colors duration-300">Another Service</h4>
            <p className="text-sm opacity-80 mb-4 relative z-10 group-hover:opacity-90 transition-opacity duration-300">Contentus blandit leoquimus orem praesentium tenetur, consequatur error. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
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
          <h3 className="text-2xl font-bold mb-2">Scapie Approach's</h3>
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

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-b from-[#101024] to-[#0a0a1a] border-t border-[#23234a]">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/images/logo.png" alt="Pingaksh Logo" width={40} height={40} className="object-contain" />
                <div>
                  <h3 className="text-xl font-bold tracking-widest">PINGAKSH</h3>
                  <p className="text-xs font-semibold opacity-60">CREATIVE STUDIO</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Innovating media management with cutting-edge digital solutions. We help businesses thrive in the digital age with our comprehensive creative services.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">y</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">i</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white border-b border-cyan-500/30 pb-2">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Political Campaign Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Social Media Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Graphics Designing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Content Writing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Digital Strategy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Brand Development</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white border-b border-fuchsia-500/30 pb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300 text-sm">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300 text-sm">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300 text-sm">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300 text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300 text-sm">Careers</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white border-b border-blue-500/30 pb-2">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <p className="text-gray-400 text-sm">123 Creative Street, Digital City, DC 12345</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">📧</span>
                  </div>
                  <p className="text-gray-400 text-sm">info@pingaksh.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">🕒</span>
                  </div>
                  <p className="text-gray-400 text-sm">Mon - Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#23234a] mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">© 2024 Pingaksh Creative Studio. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Sitemap</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Made with</span>
              <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">by Pingaksh Team</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
