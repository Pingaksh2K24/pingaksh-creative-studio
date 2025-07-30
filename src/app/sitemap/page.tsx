import React from "react";
import Link from "next/link";

const SITE_PAGES = [
  {
    category: "Main Pages",
    pages: [
      { name: "Home", url: "/", description: "Welcome to Pingaksh Creative Studio" },
      { name: "About Us", url: "/about-us", description: "Learn about our company and mission" },
      { name: "Services", url: "/services", description: "Explore our political campaign services" },
      { name: "Our Team", url: "/our-team", description: "Meet our creative and strategic experts" },
      { name: "Contact Us", url: "/contact-us", description: "Get in touch with our team" },
    ]
  },
  {
    category: "Legal Pages",
    pages: [
      { name: "Privacy Policy", url: "/privacy-policy", description: "Our privacy and data protection policy" },
      { name: "Terms & Conditions", url: "/terms-and-conditions", description: "Terms of service and usage conditions" },
    ]
  },
  {
    category: "Navigation",
    pages: [
      { name: "Sitemap", url: "/sitemap", description: "Complete site navigation overview" },
    ]
  }
];

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#101024] to-[#0a0a1a] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-fuchsia-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Sitemap</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Navigate through all pages and sections of Pingaksh Creative Studio website. Find exactly what you&apos;re looking for.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 bg-[#101024]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {SITE_PAGES.map((category, categoryIndex) => (
              <div key={category.category} className="bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 rounded-2xl border border-cyan-500/20 p-6">
                <h2 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.pages.map((page, pageIndex) => (
                    <div key={page.url} className="bg-[#0a0a1a]/50 rounded-lg p-4 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 group">
                      <Link href={page.url} className="block">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-xs">{pageIndex + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                              {page.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors">
                              {page.description}
                            </p>
                            <div className="text-cyan-400 text-sm font-mono group-hover:text-cyan-300 transition-colors">
                              {page.url}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 px-4 bg-[#0a0a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Website Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-6 rounded-2xl border border-cyan-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
                <span className="text-2xl font-bold text-white">
                  {SITE_PAGES.reduce((total, category) => total + category.pages.length, 0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Total Pages</h3>
              <p className="text-gray-300 text-sm">
                Complete website structure with all main and supporting pages
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/10 to-transparent p-6 rounded-2xl border border-fuchsia-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-fuchsia-500/25">
                <span className="text-2xl font-bold text-white">{SITE_PAGES.length}</span>
              </div>
              <h3 className="text-xl font-bold text-fuchsia-300 mb-2">Categories</h3>
              <p className="text-gray-300 text-sm">
                Organized sections for easy navigation and content discovery
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-2xl border border-blue-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">Fully Responsive</h3>
              <p className="text-gray-300 text-sm">
                Optimized for desktop, tablet, and mobile viewing experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Help Section */}
      <section className="py-16 px-4 bg-[#101024]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Navigating?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Our team is here to help you navigate our services and find the perfect solution for your political campaign needs.
          </p>
          <div className="bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 rounded-2xl border border-cyan-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Get Direct Assistance</h3>
            <p className="text-gray-300 mb-6">
              Contact our team directly for personalized guidance and support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/25"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
