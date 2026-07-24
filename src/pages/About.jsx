import React from "react";

const skills = [
  "React",
  "Tailwind CSS",
  "Three.js",
  "@react-three/fiber",
  "JavaScript",
  "HTML",
  "CSS",
  // Add more skills as needed
];

const About = () => (
  <section className="py-20 bg-black text-white w-full">
    <div className="w-full px-0 text-center">
      <h2 className="text-3xl font-bold mb-4 text-accent">About Me</h2>
      <p className="mb-6 text-gray-300">
        {/* Customization: Replace with your own bio */}
        I'm a passionate developer with a love for creative coding, design, and building interactive web experiences. I enjoy solving problems and learning new technologies.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-gray-800 text-accent border border-accent text-sm font-medium shadow hover:bg-accent hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default About; 