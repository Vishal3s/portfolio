import React from "react";
import Beams from '../components/Beams';
import ProfileCard from '../components/ProfileCard';
import { EncryptedText } from "../components/EncryptedText";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Beams 3D Background */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={15}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Left: Name, subtitle, and download button */}
        <div className="flex-1 flex flex-col items-start md:items-start gap-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2">
            <EncryptedText 
              text="Vishal.E. S" 
              revealDelayMs={55}
              flipDelayMs={35}
              revealedClassName="text-white"
              encryptedClassName="text-cyan-400 font-mono"
            />
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-2">
            <EncryptedText 
              text="Software Engineer" 
              revealDelayMs={40}
              flipDelayMs={30}
              revealedClassName="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
              encryptedClassName="text-cyan-400 font-mono"
            />
          </p>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-xl mb-4 leading-relaxed">
            <EncryptedText 
              text="Code whisperer. Design enthusiast. Merging logic and creativity." 
              revealDelayMs={15}
              flipDelayMs={25}
              revealedClassName="text-gray-300"
              encryptedClassName="text-violet-400 font-mono"
            />
          </p>
          <div className="flex gap-4">
            <a
              href="/Vishal.E.S-Resume (1).pdf"
              download
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 text-white font-semibold shadow-lg hover:from-violet-700 hover:to-cyan-500 transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Right: Profile Card (smaller) */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="max-w-xs w-full scale-90 md:scale-75">
            <ProfileCard
              name=""
              title="Software Engineer"
              handle="vishal.es"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/img1.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.location.href = '#contact'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 