import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white px-4 py-12 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-[#181830] rounded-2xl shadow-xl p-8 border border-[#23234a]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-cyan-400">Privacy Policy - Pingaksh Creative Studio</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>We at Pingaksh Creative Studio are committed to protecting your privacy. This policy outlines how we collect, use, store, and protect your personal information when you interact with our website, services, and digital platforms.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><span className="font-semibold">Personal Information:</span> Name, phone number, email address, company name, job title, etc.</li>
            <li><span className="font-semibold">Campaign Data:</span> Content, media, or assets shared for campaign purposes.</li>
            <li><span className="font-semibold">Technical Data:</span> IP address, browser type, device type, and pages visited (via cookies).</li>
            <li><span className="font-semibold">Communication Data:</span> Messages, emails, or contact form queries.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Provide services (branding, campaign management, media support, etc.)</li>
            <li>Communicate with you about your project or inquiries</li>
            <li>Improve our website and user experience</li>
            <li>Send marketing communications (only if you opt-in)</li>
            <li>Fulfill legal or contractual obligations</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>We do not sell or rent your personal information.</li>
            <li>We may share it with:
              <ul className="list-disc list-inside ml-6">
                <li>Internal team members working on your project</li>
                <li>Trusted service partners (hosting, email, analytics) under confidentiality</li>
                <li>Government or legal authorities (only if legally required)</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. However, no system is 100% secure. We continuously update our protocols to keep your data safe.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Access the data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="mt-2">To exercise your rights, email us at: <a href="mailto:pingakshinnovations24@gmail.com" className="text-cyan-400 underline">pingakshinnovations24@gmail.com</a></p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Cookies Policy</h2>
          <p>Our website uses cookies to enhance user experience, analyze traffic, and deliver relevant content. You can disable cookies from your browser settings.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites (e.g., YouTube, social platforms). We are not responsible for the privacy practices of those websites.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Policy Updates</h2>
          <p>This policy may be updated periodically. Changes will be reflected on this page with a new “Last Updated” date.</p>
          <p className="mt-2 font-semibold">Last Updated: [Insert Date]</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact:</p>
          <ul className="mt-2">
            <li>📧 <a href="mailto:pingakshinnovations24@gmail.com" className="text-cyan-400 underline">pingakshinnovations24@gmail.com</a></li>
            <li>📞 +91-9834828054</li>
          </ul>
        </section>
      </div>
    </main>
  );
} 