import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-b from-[#101024] to-[#0a0a1a] border-t border-[#23234a]">
      <div className="max-w-7xl mx-auto px-8 py-6">
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
                <p className="text-gray-400 text-sm">Near Government Polytechnic, Vithhal Nagar Khamgaon, District Buldhana, Maharashtra, 443404</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">📧</span>
                </div>
                <p className="text-gray-400 text-sm">pingakshinnovations24@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">📞</span>
                </div>
                <p className="text-gray-400 text-sm">+91-9834828054</p>
                <p className="text-gray-400 text-sm">+91-7972392628</p>
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
              <Link href="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Terms and Conditions</Link>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Sitemap</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Made with</span>
            <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">by </span>
            <a 
              href="https://pingaksh-innovations-web.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-600 transition-colors text-sm"
            >
              Pingaksh Innovations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 