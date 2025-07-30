import React from "react";

export default function Services() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#101024] to-[#0a0a1a] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-fuchsia-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Our Services</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your political campaign and connect with voters across India.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-[#101024]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Political Campaign Management */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Political Campaign Management</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                End-to-end campaign strategy, planning, and execution to maximize your political reach and impact.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Campaign Strategy Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Voter Analysis & Targeting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Message Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Campaign Timeline Planning
                </li>
              </ul>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-gradient-to-br from-fuchsia-500/10 to-transparent p-8 rounded-2xl border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-fuchsia-300 mb-4">Social Media Marketing</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Comprehensive social media strategy to engage voters and build your digital presence across platforms.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  Platform Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  Content Creation & Scheduling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  Community Engagement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  Analytics & Reporting
                </li>
              </ul>
            </div>

            {/* Graphics Designing */}
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Graphics Designing</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Professional visual design services to create compelling campaign materials and brand identity.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Logo & Brand Identity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Campaign Posters & Banners
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Social Media Graphics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Print & Digital Materials
                </li>
              </ul>
            </div>

            {/* Content Writing */}
            <div className="bg-gradient-to-br from-green-500/10 to-transparent p-8 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">✍️</span>
              </div>
              <h3 className="text-2xl font-bold text-green-300 mb-4">Content Writing</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Strategic content creation that resonates with your audience and communicates your political message effectively.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Speech Writing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Press Releases
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Social Media Copy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Campaign Literature
                </li>
              </ul>
            </div>

            {/* Digital Strategy */}
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Digital Strategy</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Data-driven digital strategies to optimize your online presence and maximize voter engagement.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Digital Audit & Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Online Reputation Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  SEO & Content Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Performance Tracking
                </li>
              </ul>
            </div>

            {/* Brand Development */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-8 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Brand Development</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Complete brand development services to establish a strong, recognizable political identity.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Brand Strategy & Positioning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Visual Identity System
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Brand Guidelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Brand Implementation
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-[#0a0a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Discovery</h3>
              <p className="text-gray-300">
                Understanding your goals, audience, and political landscape.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-fuchsia-300 mb-3">Strategy</h3>
              <p className="text-gray-300">
                Developing comprehensive campaign strategies and messaging.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Execution</h3>
              <p className="text-gray-300">
                Implementing campaigns with precision and creativity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-green-300 mb-3">Optimization</h3>
              <p className="text-gray-300">
                Continuous monitoring and improvement for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#101024] to-[#0a0a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Campaign?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let&apos;s discuss how our services can help you connect with voters and achieve your political goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Get Started Today
            </button>
            <button className="border-2 border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
