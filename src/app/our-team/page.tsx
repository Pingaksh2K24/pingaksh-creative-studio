import React from "react";

const TEAM_MEMBERS = [
  {
    name: "Prasad Sapakal",
    role: "Creative Director & Co-Founder",
    expertise: "Political Strategy & Campaign Management",
    description: "With extensive experience in political campaigns and creative strategy, Prasad leads our team in developing innovative approaches to political communication and voter engagement.",
    skills: ["Campaign Strategy", "Political Analysis", "Creative Direction", "Team Leadership"],
    image: "/images/team/prasad.jpg" // Placeholder image path
  },
  {
    name: "Anil Umarkar",
    role: "Technical Director & Co-Founder", 
    expertise: "Digital Innovation & Technology Solutions",
    description: "Anil brings cutting-edge technical expertise to political campaigns, specializing in digital platforms, data analytics, and innovative technology solutions for modern political communication.",
    skills: ["Digital Strategy", "Technology Solutions", "Data Analytics", "Innovation Management"],
    image: "/images/team/anil.jpg" // Placeholder image path
  }
];

export default function OurTeam() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#101024] to-[#0a0a1a] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-fuchsia-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Our Team</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the creative minds and strategic experts behind Pingaksh Creative Studio&apos;'s success in transforming political campaigns across India.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4 bg-[#101024]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our founders bring together decades of experience in political strategy, creative design, and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={member.name} className="bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 rounded-2xl border border-cyan-500/20 p-8 hover:border-cyan-400/40 transition-all duration-300">
                {/* Profile Image */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-300 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.expertise}</p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed text-center">
                    {member.description}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 text-center">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16 px-4 bg-[#0a0a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence in political communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-6 rounded-2xl border border-cyan-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Strategic Excellence</h3>
              <p className="text-gray-300">
                Every campaign is crafted with precision, backed by data-driven insights and deep understanding of political dynamics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/10 to-transparent p-6 rounded-2xl border border-fuchsia-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-fuchsia-500/25">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-fuchsia-300 mb-3">Innovation & Speed</h3>
              <p className="text-gray-300">
                We leverage cutting-edge technology and creative approaches to deliver impactful campaigns with rapid turnaround times.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-2xl border border-blue-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Integrity & Trust</h3>
              <p className="text-gray-300">
                We build lasting partnerships through transparent communication, ethical practices, and unwavering commitment to our clients&apos;' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 px-4 bg-[#101024]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Are you passionate about political communication and creative innovation? We're always looking for talented individuals to join our growing team.
          </p>
          
          <div className="bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 rounded-2xl border border-cyan-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">We&apos;'re Looking For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="text-lg font-bold text-cyan-300 mb-2">Creative Professionals</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Graphic Designers</li>
                  <li>• Content Writers</li>
                  <li>• Video Editors</li>
                  <li>• Social Media Specialists</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-fuchsia-300 mb-2">Strategic Experts</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Campaign Strategists</li>
                  <li>• Political Analysts</li>
                  <li>• Digital Marketing Experts</li>
                  <li>• Project Managers</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                View Open Positions
              </button>
              <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/25">
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
