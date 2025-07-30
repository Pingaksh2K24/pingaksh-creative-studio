import React from "react";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#101024] to-[#0a0a1a] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-fuchsia-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Contact Us</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your political campaign? Let&apos;s discuss how we can help you connect with voters and achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 bg-[#101024]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-8 rounded-2xl border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-cyan-300 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-[#0a0a1a] border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-[#0a0a1a] border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-[#0a0a1a] border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Organization/Party</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-[#0a0a1a] border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Service Required</label>
                  <select className="w-full px-4 py-3 bg-[#0a0a1a] border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                    <option value="">Select a service</option>
                    <option value="campaign-management">Political Campaign Management</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="graphics-design">Graphics Designing</option>
                    <option value="content-writing">Content Writing</option>
                    <option value="digital-strategy">Digital Strategy</option>
                    <option value="brand-development">Brand Development</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0a1a] border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white resize-none"
                    placeholder="Tell us about your campaign goals and requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We&apos;re here to help you build a winning campaign. Reach out to us through any of the channels below, and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 border border-cyan-400/30">
                    <span className="text-white text-lg font-bold">⌖</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-cyan-300">Office Address</h3>
                    <p className="text-gray-300">
                      Near Government Polytechnic, Vithhal Nagar<br />
                      Khamgaon, District Buldhana<br />
                      Maharashtra, 443404
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-fuchsia-500/25 border border-fuchsia-400/30">
                    <span className="text-white text-lg font-bold">✉</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-fuchsia-300">Email Address</h3>
                    <p className="text-gray-300">pingakshinnovations24@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25 border border-green-400/30">
                    <span className="text-white text-lg font-bold">☎</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-300">Phone Numbers</h3>
                    <p className="text-gray-300">
                      +91-9834828054<br />
                      +91-7972392628
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25 border border-orange-400/30">
                    <span className="text-white text-lg font-bold">⧖</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-300">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-fuchsia-500/10 to-transparent p-6 rounded-2xl border border-fuchsia-500/20">
                <h3 className="text-xl font-bold text-fuchsia-300 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">f</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">y</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">t</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">i</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#0a0a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">How long does a typical campaign take?</h3>
              <p className="text-gray-300">
                Campaign duration varies based on scope and requirements. Typically, a comprehensive political campaign takes 3-6 months from strategy development to execution.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-fuchsia-500/10 to-transparent p-6 rounded-xl border border-fuchsia-500/20">
              <h3 className="text-xl font-bold text-fuchsia-300 mb-3">Do you work with all political parties?</h3>
              <p className="text-gray-300">
                Yes, we work with candidates and parties across the political spectrum. Our focus is on helping leaders communicate effectively with their constituents.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-300 mb-3">What&apos;s included in your campaign packages?</h3>
              <p className="text-gray-300">
                Our packages include strategy development, visual branding, content creation, social media management, and ongoing campaign support. We customize each package based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
