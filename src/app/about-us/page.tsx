import React from "react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#101024] to-[#0a0a1a] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-fuchsia-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">About Us</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the story behind Pingaksh Creative Studio - where creativity meets strategy to reshape political narratives across India.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-[#101024]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Pingaksh Creative Studio was born from a vision to revolutionize political communication in India. Founded by a team of passionate strategists, designers, and technologists, we recognized the growing need for sophisticated digital presence in the political landscape.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our journey began with a simple belief: that powerful visuals and strategic messaging can transform how political leaders connect with their constituents. Today, we stand as a trusted partner for political campaigns, helping leaders across India build meaningful connections with voters.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Why We Exist</h3>
              <p className="text-gray-300 leading-relaxed">
                In today&apos;s digital age, political success requires more than just good intentions. It demands strategic communication, compelling visuals, and authentic storytelling. We bridge the gap between traditional politics and modern digital engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-[#0a0a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Strategic Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Every campaign we craft is backed by data-driven insights and strategic thinking to maximize impact and reach.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-fuchsia-300 mb-3">Creative Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We push creative boundaries to deliver fresh, engaging content that resonates with diverse audiences across India.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Authentic Partnership</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in building long-term relationships based on trust, transparency, and shared commitment to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-[#101024]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-lg font-bold text-cyan-300 mb-3">Strategic Planning</h3>
              <p className="text-gray-300 text-sm">
                Campaign strategy, voter analysis, and political positioning expertise.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-fuchsia-500/10 to-transparent p-6 rounded-xl border border-fuchsia-500/20">
              <h3 className="text-lg font-bold text-fuchsia-300 mb-3">Visual Design</h3>
              <p className="text-gray-300 text-sm">
                Branding, poster design, and visual identity development.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-lg font-bold text-blue-300 mb-3">Digital Marketing</h3>
              <p className="text-gray-300 text-sm">
                Social media management, content creation, and online engagement.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-transparent p-6 rounded-xl border border-green-500/20">
              <h3 className="text-lg font-bold text-green-300 mb-3">Technology</h3>
              <p className="text-gray-300 text-sm">
                Web development, digital platforms, and technical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#0a0a1a] to-[#101024]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Campaign?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the leaders who trust Pingaksh Creative Studio to amplify their message and connect with voters across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Start Your Campaign
            </button>
            <button className="border-2 border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
