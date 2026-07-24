import React from "react";
import { 
  IconBrandGithub, 
  IconBrandFacebook, 
  IconBrandX, 
  IconBrandInstagram, 
  IconBrandLinkedin, 
  IconShare,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconBolt,
  IconStar,
  IconTag
} from "@tabler/icons-react";
import { EncryptedText } from "../components/EncryptedText";

const socials = [
  {
    name: "Share",
    icon: IconShare,
    url: "#",
    color: "bg-cyan-950/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]",
  },
  {
    name: "Github",
    icon: IconBrandGithub,
    url: "https://github.com",
    color: "bg-neutral-900/40 border border-neutral-700/30 text-neutral-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]",
  },
  {
    name: "Facebook",
    icon: IconBrandFacebook,
    url: "https://facebook.com",
    color: "bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] hover:shadow-[0_0_30px_rgba(24,119,242,0.8)]",
  },
  {
    name: "Twitter / X",
    icon: IconBrandX,
    url: "https://x.com",
    color: "bg-neutral-900/40 border border-neutral-700/30 text-neutral-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]",
  },
  {
    name: "Instagram",
    icon: IconBrandInstagram,
    url: "https://instagram.com",
    color: "bg-[#ee2a7b]/10 border border-[#ee2a7b]/30 text-[#ee2a7b] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_30px_rgba(238,42,123,0.8)]",
  },
  {
    name: "LinkedIn",
    icon: IconBrandLinkedin,
    url: "https://linkedin.com",
    color: "bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:shadow-[0_0_30px_rgba(0,119,181,0.8)]",
  },
];

const SocialNetworks = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden w-full border-t border-neutral-900">
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(8deg); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-6deg); }
          }
          .animate-float-slow {
            animation: float-slow 7s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 5s ease-in-out infinite;
          }
          .social-btn {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .social-btn:hover {
            transform: translateY(-10px) scale(1.18);
          }
        `}
      </style>

      {/* Decorative Floaters */}
      <div className="absolute top-1/4 left-[15%] text-neutral-600 animate-float-slow pointer-events-none opacity-40">
        <IconBolt size={40} className="stroke-[1.5]" />
      </div>
      <div className="absolute bottom-1/4 right-[25%] text-cyan-500 animate-float-medium pointer-events-none opacity-40">
        <IconStar size={24} className="fill-cyan-500 stroke-[1.5]" />
      </div>
      <div className="absolute top-1/3 right-[10%] text-blue-500 animate-float-slow pointer-events-none opacity-40 rotate-[15deg]">
        <IconTag size={36} className="fill-blue-500 stroke-[1.5]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-center text-white">
          <EncryptedText 
            text="Social networks" 
            revealDelayMs={40}
            flipDelayMs={30}
            revealedClassName="text-white"
            encryptedClassName="text-cyan-400 font-mono"
          />
        </h2>

        {/* Connection Line and Icons Container */}
        <div className="w-full relative py-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 mt-6">
          
          {/* Straight Connecting Line */}
          <div className="absolute left-0 right-0 h-[2px] border-t-2 border-dashed border-blue-500/20 pointer-events-none z-0 hidden md:block"></div>

          {/* Left Handle Info */}
          <div className="flex items-center gap-2 text-gray-500 font-mono text-sm z-10 bg-black pr-4 py-1.5 pointer-events-auto">
            <IconDeviceLaptop size={18} />
            <IconDeviceMobile size={18} />
            <span className="text-gray-400 font-medium">@#vishal.es</span>
          </div>

          {/* Social Icons List */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-8 z-10 bg-black pl-4 pointer-events-auto">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-btn w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center active:scale-95 ${social.color}`}
                  title={social.name}
                >
                  <Icon size={24} className="md:size-28" />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialNetworks;
