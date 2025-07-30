export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-end mt-18 px-4 bg-gradient-to-b from-[#101024] to-[#181830] rounded-b-[3rem] shadow-xl border-b-4 border-[#23234a] overflow-hidden min-h-[400px] md:min-h-[500px]"
      style={{
        backgroundImage: `url('/images/header.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 rounded-b-[3rem]"></div>
      
      {/* Text Content - Centered at Bottom */}
      <div className="relative z-10 text-center pb-8 px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest mb-2 text-white drop-shadow-lg animate-pulse">
          <span className="bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 bg-clip-text text-transparent animate-glow">
            PINGAKSH CREATIVE STUDIO
          </span>
        </h1>
        <h2 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-300 tracking-wide animate-fade-in-up animation-delay-2500">INNOVATING MEDIA MANAGEMENT</h2>
        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-2700">
          We help you manage your political campaigns, social media, graphics, and content with a futuristic, creative approach.
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1.0s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1300 { animation-delay: 1.3s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-1700 { animation-delay: 1.7s; }
        .animation-delay-1800 { animation-delay: 1.8s; }
        .animation-delay-1900 { animation-delay: 1.9s; }
        .animation-delay-2000 { animation-delay: 2.0s; }
        .animation-delay-2100 { animation-delay: 2.1s; }
        .animation-delay-2200 { animation-delay: 2.2s; }
        .animation-delay-2300 { animation-delay: 2.3s; }
        .animation-delay-2500 { animation-delay: 2.5s; }
        .animation-delay-2700 { animation-delay: 2.7s; }
      `}</style>
    </section>
  );
}