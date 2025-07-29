import Image from "next/image";

export default function Hero() {
  return (
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
  );
} 